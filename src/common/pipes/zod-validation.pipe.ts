import { ArgumentMetadata, Injectable, PipeTransform, Logger } from '@nestjs/common';
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

    if (schema && typeof schema.parse === 'function') {
      try {
        return schema.parse(value);
      } catch (err) {
        this.logger.error('Zod validation error', (err as Error).message ?? String(err));
        throw err;
      }
    }

    return value;
  }
}
