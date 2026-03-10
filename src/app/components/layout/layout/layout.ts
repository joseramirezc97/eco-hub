import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNav } from '../top-nav/top-nav';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, TopNav, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {

}
