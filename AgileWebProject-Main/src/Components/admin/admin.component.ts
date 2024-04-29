import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SearchComponent,RouterOutlet,RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router: Router,){}

}
