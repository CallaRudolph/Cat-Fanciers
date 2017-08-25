import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [MemberService]
})
export class GroupComponent implements OnInit {
  members: Member[];

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

}
