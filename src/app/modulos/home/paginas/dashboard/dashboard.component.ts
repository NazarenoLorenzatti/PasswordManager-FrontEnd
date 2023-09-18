import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {

  private router = inject(Router);

  constructor() { }

  ngOnInit(): void {
    this.router.navigate(['/home/pagina-principal']);
  }

}
