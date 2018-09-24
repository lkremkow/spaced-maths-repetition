import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'about.html',
  styleUrls: ['about.scss']
})

export class AboutComponent implements OnInit {

  constructor() {
    console.log("AboutComponent constructor called");
  };

  ngOnInit() {
    console.log("AboutComponent ngOnInit called");
  };

};
