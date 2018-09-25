import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

import { SessionToken } from 'imports/models/sessions';
import { Users } from 'imports/collections/users';

import { Router } from "@angular/router";

@Component({
  selector: 'account',
  templateUrl: 'account.html',
  styleUrls: ['account.scss']
})

export class AccountComponent implements OnInit, OnDestroy {

  sesssion_subscription: Subscription;
  sesssion_observable: Observable<SessionToken[]>;

  new_username: string;
  new_password: string;

  constructor(private router: Router, private zone: NgZone) {
    console.log("AccountComponent constructor called");
    this.new_username = null;
    this.new_password = null;
  };

  ngOnInit() {
    console.log("AccountComponent ngOnInit called");

    if (typeof window.sessionStorage.getItem("session_id") === 'undefined' ) {
      console.log("AccountComponent found no session_id; redirecting to login");
      this.navigate_to_login();
    } else {
      if (window.sessionStorage.getItem("session_id") === null) {
        console.log("AccountComponent found session_id to be null; redirecting to login");
        this.navigate_to_login();
      } else {
        if (window.sessionStorage.getItem("session_id").length === 0) {
          console.log("AccountComponent found session_id as zero; redirecting to login");
          this.navigate_to_login();
        } else {
          console.log("AccountComponent found session_id; subscribing");
          this.subscribe_to_session_token(window.sessionStorage.getItem("session_id"));
        };
      };
    };

  };

  ngOnDestroy() {
    console.log("AccountComponent ngOnDestroy called");

    if (this.sesssion_subscription) {
      this.sesssion_subscription.unsubscribe();
      console.log("PlayComponent unsubscribed from sesssion_subscription feed");
    };

  };

  private subscribe_to_session_token(session_id_arg: string): void {
    this.sesssion_subscription = MeteorObservable.subscribe('active_session', session_id_arg).subscribe( () => {
      console.log("AccountComponent subscribed to sesssion_subscription");
      this.sesssion_observable = Users.find( {} );
    });
  };

  private navigate_to_login(): void {
    this.zone.run(() => {
      this.router.navigate(['/login']);
    });
  };

  private logout(session_id_arg: string) {
    console.log("AccountComponent would like to logout the account for session " + session_id_arg);
    Meteor.call('logout_user', session_id_arg, (error, result) => {
      if (error) {
        console.log("AccountComponent called logout_user but something went wrong");
        console.log(error);
      } else {
        // console.log("AccountComponent called logout_user and got:", result);
        this.end_of_session();       
      };     
    });    
  };

  private change_username(session_id_arg: string) {
    console.log("AccountComponent would like to set the username to " + this.new_username + " for session " + session_id_arg);
    Meteor.call('change_username', session_id_arg, this.new_username, (error, result) => {
      if (error) {
        console.log("AccountComponent called change_username but something went wrong");
        console.log(error);
      } else {
        // console.log("AccountComponent called login_user and got:", result);
      };     
    });
  };

  private change_password(session_id_arg: string) {
    console.log("AccountComponent would like to set the password to " + this.new_password + " for session " + session_id_arg);
    let crypto = require('crypto');
    let new_password_hash: string = crypto.createHash('sha256').update(this.new_password).digest('hex');
    Meteor.call('change_password', session_id_arg, new_password_hash, (error, result) => {
      if (error) {
        console.log("AccountComponent called change_password but something went wrong");
        console.log(error);
      } else {
        // console.log("AccountComponent called login_user and got:", result);
      };     
    });    
  };  

  private modify_questions(session_id_arg: string, operation_arg: string, family_arg: string) {
    console.log("AccountComponent would like to " + operation_arg + " the " + family_arg + " questions for session " + session_id_arg);
    Meteor.call('modify_questions', session_id_arg, operation_arg, family_arg, (error, result) => {
      if (error) {
        console.log("AccountComponent called reset_questions but something went wrong");
        console.log(error);
      } else {
        // console.log("AccountComponent called login_user and got:", result);
      };
    });
  };

  private destroy_account(session_id_arg: string) {
    console.log("AccountComponent would like to destroy the account for session " + session_id_arg);
    Meteor.call('destroy_account', session_id_arg, (error, result) => {
      if (error) {
        console.log("AccountComponent called destroy_account but something went wrong");
        console.log(error);
      } else {
        // console.log("AccountComponent called login_user and got:", result);
        this.end_of_session();
      };     
    });    
  };   

  private end_of_session(): void {
    window.sessionStorage.removeItem("session_id");
    this.zone.run(() => {
      this.router.navigate(['/welcome']);
    });
  };

};
