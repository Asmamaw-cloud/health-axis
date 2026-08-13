import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

@Injectable()
export class StorageService {
  private localDir: string | null = null;

  constructor(private readonly configService: ConfigService) {
    const dir = this.configService.get<string>('STORAGE_LOCAL_DIR');
    if (dir) this.localDir = dir;
  }

  async uploadPublicImage(
    _bucket: string,
    path: string,
    fileBuffer: Buffer,
    _contentType: string,
  ): Promise<string> {
    if (!this.localDir) {
      throw new Error('Storage is not configured. Set STORAGE_LOCAL_DIR to enable local uploads.');
    }

    const fullPath = join(this.localDir, path);
    const dir = fullPath.replace(/\/[^\/]+$/, '');
    try {
      await mkdir(dir, { recursive: true });
    } catch {}
    await writeFile(fullPath, fileBuffer);
    // Return a path-like URL that the app can serve (user must configure static serving)
    return `/static/${path}`;
  }
}
