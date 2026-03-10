import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/layout/sidebar/sidebar';

@Component({
  selector: 'app-guideline-editor',
  imports: [SidebarComponent],
  templateUrl: './guideline-editor.html',
  styleUrl: './guideline-editor.scss',
})
export class GuidelineEditor {}
