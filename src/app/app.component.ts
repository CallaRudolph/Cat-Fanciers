import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Member } from './member.model';
import { Messages } from './messages.model';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MemberService, MessagesService]
})
export class AppComponent {
  title = 'Cat Fanciers';
  currentDate = new Date();
  members: FirebaseListObservable<any[]>;
  messages: FirebaseListObservable<any[]>;
  memberList;
  totalCats = 0;
  totalMembers = 0;
  totalMessages = 0;
  messagesList;

  constructor(private memberService: MemberService, private messagesService: MessagesService) { }

  ngOnInit() : void {
    this.memberService.getMembers().subscribe(dataLastEmittedFromObserver => {
      var cats: number = 0;
      var counter = 0;
      this.memberList = dataLastEmittedFromObserver;
      this.memberList.forEach(function(currentMember) {
        cats += parseInt(currentMember.cats);
        counter ++;
      })
      this.totalCats = cats;
      this.totalMembers = counter;
    });
    this.messagesService.getMessages().subscribe(dataLastEmittedFromObserver => {
      var counter = 0;
      this.messagesList = dataLastEmittedFromObserver;
      this.messagesList.forEach(function(currentMessage) {
        counter++;
      })
      this.totalMessages = counter;
    })
  }
}
