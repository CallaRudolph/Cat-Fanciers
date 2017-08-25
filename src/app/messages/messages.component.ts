import { Component, OnInit, Input } from '@angular/core';
import { Messages } from '../messages.model';
import { MessagesService } from '../messages.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  @Input() selectedMessage;
  messages: FirebaseListObservable<any[]>;

  constructor(private router: Router, private messagesService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messagesService.getMessages();
  }

  submitForm(name: string, body: string) {
    var newMessage: Messages = new Messages(name, body);
    this.messagesService.addMessage(newMessage);
  }

  beginDeletingMessage(messageToDelete){
    if(confirm("Are you sure you want to remove this message?")){
      this.messagesService.deleteMessage(messageToDelete);
    }
  }
}
