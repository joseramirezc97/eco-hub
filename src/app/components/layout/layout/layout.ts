import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from '../top-nav/top-nav';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, TopNavComponent, FooterComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {

}
