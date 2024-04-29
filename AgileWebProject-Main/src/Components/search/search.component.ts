import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchterm='';
  @Input() placeholderT: string | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchterm) {
        this.searchterm = params.searchterm;
      }
    });
  }

  ngOnInit(): void {}

  search(term: string): void {
    if (term.trim()) {
      console.log("url",this.router.url);
      if(this.router.url.startsWith("/admin/users")){
        this.router.navigate(['/admin/users', term.trim()]);
      }
      else if (this.router.url.startsWith("/admin/agents")){
        this.router.navigate(['/admin/agents', term.trim()]);

      }
      else if (this.router.url.startsWith("/agents")){
        this.router.navigate(['/agents', term.trim()]);


      }
   // console.log(this.router.url);
    }
    else{
      if(this.router.url.startsWith("/admin/users")){
        this.router.navigate(['/admin/users']);
      }
      else if (this.router.url.startsWith("/admin/agents")){
        this.router.navigate(['/admin/agents']);

      } else if (this.router.url.startsWith("/agents")){
        this.router.navigate(['/agents']);


      }

    }
    
  }

  }



