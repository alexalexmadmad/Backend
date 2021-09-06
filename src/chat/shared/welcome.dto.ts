import { ChatMessage } from './chat-message.model';
import { ChatClient } from './chat-client.model';

export interface WelcomeDto {
  clients: ChatClient[];
  client: ChatClient;
  messages: ChatMessage[];
}
