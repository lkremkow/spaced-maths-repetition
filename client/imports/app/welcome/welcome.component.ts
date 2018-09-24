import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.scss']
})

export class WelcomeComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("WelcomeComponent constructor called");
  };
  
  ngOnInit() {
    console.log("WelcomeComponent ngOnInit called");
  };

  ngOnDestroy() {
    console.log("WelcomeComponent ngOnDestroy called");
  };

};
