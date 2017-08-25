import { Injectable } from '@angular/core';
import { Messages } from './messages.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MessagesService {
  messages: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.messages = database.list('messages');
  }

  getMessages() {
    return this.messages;
  }

  addMessage(newMessage: Messages) {
    this.messages.push(newMessage);
  }

  getMessageById(messageId: string) {
    return this.database.object('/messages/' + messageId);
  }

  deleteMessage(localMessageToDelete){
    var messageEntryInFirebase = this.getMessageById(localMessageToDelete.$key);
    messageEntryInFirebase.remove();
  }
}
