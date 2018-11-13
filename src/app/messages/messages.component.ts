import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**
   * Base constructor for the MessagesComponent
   * @param messageService Takes in the message service
   * as a linked parameter.
   */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
