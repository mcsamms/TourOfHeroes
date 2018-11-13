import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  constructor() { }

  /**
   * Adds a message to my messages collection
   * @param message the message to add
   */
  add(message: string): void {
    this.messages.push(message);
  }

  /**
   * Clear the messages array
   */
  clear(): void {
    this.messages = [];
  }
}
