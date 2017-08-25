import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Member } from './member.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MemberService]
})
export class AppComponent {
  title = 'Cat Fanciers';
  currentDate = new Date();
  members: FirebaseListObservable<any[]>;
  memberList;
  totalCats = 0;
  totalMembers = 0;

  constructor(private memberService: MemberService) { }

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

  }
}
