import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  edit = false;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
    this.router.navigate(['group']);
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to remove this member from the group?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }

  showEditForm() {
    this.edit = true;
  }

  hideEditForm() {
    this.edit = false;
  }
}
