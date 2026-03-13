import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ZodTypeAny } from 'zod';

type ZodMetatype = {
  schema?: ZodTypeAny;
};

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata): unknown {
    const metatype = metadata.metatype as ZodMetatype | undefined;
    const schema = metatype?.schema;

    if (schema && typeof schema.parse === 'function') {
      return schema.parse(value);
    }

    return value;
  }
}

