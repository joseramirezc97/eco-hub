import { Component } from '@angular/core';
import { Sidebar } from '../../components/layout/sidebar/sidebar';

@Component({
  selector: 'app-guideline-editor',
  imports: [Sidebar],
  templateUrl: './guideline-editor.html',
  styleUrl: './guideline-editor.scss',
})
export class GuidelineEditor {}
