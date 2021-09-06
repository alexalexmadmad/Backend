import { Injectable } from '@nestjs/common';
import { ChatClient } from './chat-client.model';
import { ChatMessage } from './chat-message.model';

@Injectable()
export class ChatService {
  allMessages: ChatMessage[] = [];
  clients: ChatClient[] = [];

  addMessage(message: string, clientId: string): ChatMessage {
    const client = this.clients.find((c) => c.id === clientId);
    const chatMessage: ChatMessage = { message: message, sender: client };
    this.allMessages.push(chatMessage);
    return chatMessage;
  }

  addClient(id: string, nickname: string): ChatClient {
    let chatClient = this.clients.find(
      (c) => c.nickname === nickname && c.id === id,
    );
    if (chatClient) {
      return chatClient;
    }
    if (this.clients.find((c) => c.nickname === nickname)) {
      throw new Error('find anothe nickname');
    }
    chatClient = { id: id, nickname: nickname };
    this.clients.push({ id: id, nickname: nickname });
    return chatClient;
  }

  getClients(): ChatClient[] {
    return this.clients;
  }

  getMessages(): ChatMessage[] {
    return this.allMessages;
  }

  deleteClient(id: string): void {
    this.clients = this.clients.filter((c) => c.id !== id);
  }
}
