import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RtcTokenBuilder, RtcRole } from 'agora-access-token';

@Injectable()
export class AgoraService {
  constructor(private readonly configService: ConfigService) {}

  generateMeetingLink(consultationId: string): string {
    const appId = this.configService.get<string>('AGORA_APP_ID') ?? '';
    const channelName = `consultation_${consultationId}`;

    // In many apps, frontends use the channel name + app ID to join.
    // We keep it simple here and just return a pseudo-deep-link-like URL.
    return `agora:${appId}:${channelName}`;
  }

  generateRtcToken(
    consultationId: string,
    uid: string,
    expireSeconds = 3600,
  ): string {
    const appId = this.configService.get<string>('AGORA_APP_ID') ?? '';
    const appCertificate =
      this.configService.get<string>('AGORA_APP_CERTIFICATE') ?? '';

    const channelName = `consultation_${consultationId}`;
    const role = RtcRole.PUBLISHER;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpireTs = currentTimestamp + expireSeconds;

    return RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCertificate,
      channelName,
      Number(uid),
      role,
      privilegeExpireTs,
    );
  }
}

