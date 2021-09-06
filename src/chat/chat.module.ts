import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './shared/chat.service';

@Module({
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
