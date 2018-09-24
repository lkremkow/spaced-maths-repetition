import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: 'error.html',
  styleUrls: ['error.scss']
})

export class ErrorComponent {

  constructor(private router: Router) {
    console.log("ErrorComponent constructor called for page " + this.router.url);
  };

};
