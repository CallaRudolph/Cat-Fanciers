import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  members: Member[]; 

  constructor() { }

  ngOnInit() {
  }

}
