import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  Logger,
} from '@nestjs/common';
import { ZodTypeAny } from 'zod';

type ZodMetatype = {
  schema?: ZodTypeAny;
};

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  private readonly logger = new Logger(ZodValidationPipe.name);
  transform(value: unknown, metadata: ArgumentMetadata): unknown {
    const metatype = metadata.metatype as ZodMetatype | undefined;
    const schema = metatype?.schema;

    // Normalize snake_case keys to camelCase before parsing so frontend
    // sending snake_case (e.g. full_name) still validates against DTOs.
    const toCamel = (s: string) => s.replace(/[_-][a-z]/g, (m) => m.charAt(1).toUpperCase());
    function normalizeKeys(obj: any): any {
      if (Array.isArray(obj)) return obj.map(normalizeKeys);
      if (obj && typeof obj === 'object') {
        const out: any = {};
        for (const key of Object.keys(obj)) {
          const camel = toCamel(key);
          out[camel] = normalizeKeys(obj[key]);
        }
        return out;
      }
      return obj;
    }

    const input = (value && typeof value === 'object') ? normalizeKeys(value as any) : value;

    if (schema && typeof schema.parse === 'function') {
      try {
        return schema.parse(input);
      } catch (err) {
        this.logger.error(
          'Zod validation error',
          (err as Error).message ?? String(err),
        );
        throw err;
      }
    }

    return input;
  }
}
