import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class StorageService {
  private client: SupabaseClient | null = null;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const key = this.configService.get<string>(
      'SUPABASE_SERVICE_ROLE_KEY',
    );

    if (url && key) {
      this.client = createClient(url, key);
    }
  }

  async uploadPublicImage(
    bucket: string,
    path: string,
    fileBuffer: Buffer,
    contentType: string,
  ): Promise<string> {
    if (!this.client) {
      throw new Error(
        'Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.',
      );
    }

    const { error } = await this.client.storage
      .from(bucket)
      .upload(path, fileBuffer, {
        contentType,
        upsert: true,
      });

    if (error) {
      throw error;
    }

    const { data } = this.client.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  }
}

