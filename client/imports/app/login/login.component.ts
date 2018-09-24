import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})

export class LoginComponent implements OnInit {

  new_user: boolean;
  returning_user: boolean;

  username: string;
  password: string;

  new_user_username: string;
  new_user_password: string;
  new_user_password_bis: string;

  constructor( private router: Router, private zone: NgZone ) {
    console.log("LoginComponent constructor called");

    this.new_user = false;
    this.returning_user = true;
    
    this.username = "";
    this.password = "";

    this.new_user_username = "";
    this.new_user_password = "";
    this.new_user_password_bis = "";
  
  };

  ngOnInit() {
    console.log("LoginComponent ngOnInit called");
  };

  private login_user() {
    let crypto = require('crypto');
    let password_hash: string = crypto.createHash('sha256').update(this.password).digest('hex');
    Meteor.call('login_user', this.username, password_hash, (error, result) => {
      if (error) {
        console.log("LoginComponent called login_user but something went wrong");
        console.log(error);
      } else {
        console.log("LoginComponent called login_user and got:", result);
        // console.log("LoginComponent called create_user and got ", result.length, " characters");
        if (result.length > 0) {
          this.save_session_id_locally(result);
        };
      };     
    });
  };

  private create_user() {
    let crypto = require('crypto');
    let new_password_hash: string = crypto.createHash('sha256').update(this.new_user_password).digest('hex');
    Meteor.call('create_user', this.new_user_username, new_password_hash, (error, result) => {
      if (error) {
        console.log("LoginComponent called create_user but something went wrong");
        console.log(error);
      } else {
        console.log("LoginComponent called create_user and got:", result);
        // console.log("LoginComponent called create_user and got ", result.length, " characters");
        if (result.length > 0) {
          this.save_session_id_locally(result);
        };
      };
    });
  };

  private save_session_id_locally(session_id_to_save: string) {
    window.sessionStorage.setItem("session_id", session_id_to_save);
    this.zone.run(() => {
      this.router.navigate(['/play']);
    });
  };

  private toggle_user_type() {
    if (this.new_user) {
      this.new_user = false;
      this.returning_user = true;
    } else if (this.returning_user) {
      this.new_user = true;
      this.returning_user = false;
    };

  };  

};
