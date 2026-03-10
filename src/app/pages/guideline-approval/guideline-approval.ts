import { Component } from '@angular/core';
import { ApprovalSidebar } from '../../components/layout/approval-sidebar/approval-sidebar';
import { ApprovalComments } from '../../components/layout/approval-comments/approval-comments';

@Component({
  selector: 'app-guideline-approval',
  imports: [ApprovalSidebar, ApprovalComments],
  templateUrl: './guideline-approval.html',
  styleUrl: './guideline-approval.scss'
})
export class GuidelineApproval {

}
