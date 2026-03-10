import { Component } from '@angular/core';
import { ApprovalSidebarComponent } from '../../components/layout/approval-sidebar/approval-sidebar';
import { ApprovalCommentsComponent } from '../../components/layout/approval-comments/approval-comments';

@Component({
  selector: 'app-guideline-approval',
  imports: [ApprovalSidebarComponent, ApprovalCommentsComponent],
  templateUrl: './guideline-approval.html',
  styleUrl: './guideline-approval.scss'
})
export class GuidelineApproval {

}
