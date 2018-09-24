import { Component, Input, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { MeteorObservable } from 'meteor-rxjs';
import { Question } from 'imports/models/questions';
import { Questions } from 'imports/collections/questions';

import { SessionToken } from 'imports/models/sessions';
import { Users } from 'imports/collections/users';

@Component({
  selector: 'play',
  templateUrl: 'play.html',
  styleUrls: ['play.scss']
})

export class PlayComponent implements OnInit, OnDestroy {

  sesssion_subscription: Subscription;
  sesssion_observable: Observable<SessionToken[]>;

  questions_subscription: Subscription;
  questions_observable: Observable<Question[]>;

  given_answer: string;

  constructor(private router: Router, private zone: NgZone) {
    console.log("PlayComponent constructor called");
  };

  ngOnInit() {
    console.log("PlayComponent ngOnInit called");
  
    if (typeof window.sessionStorage.getItem("session_id") === 'undefined' ) {
      console.log("PlayComponent found no session_id; redirecting to login");
      this.navigate_to_login();
    } else {
      if (window.sessionStorage.getItem("session_id") === null) {
        console.log("PlayComponent found session_id to be null; redirecting to login");
        this.navigate_to_login();
      } else {
        if (window.sessionStorage.getItem("session_id").length === 0) {
          console.log("PlayComponent found session_id as zero; redirecting to login");
          this.navigate_to_login();
        } else {
          console.log("PlayComponent found session_id; subscribing");
          this.subscribe_to_session_token(window.sessionStorage.getItem("session_id"));
        };
      };
    };
    
  };

  ngOnDestroy() {
    console.log("PlayComponent ngOnDestroy called");

    if (this.sesssion_subscription) {
      this.sesssion_subscription.unsubscribe();
      console.log("PlayComponent unsubscribed from sesssion_subscription feed");
    };

    if (this.questions_subscription) {
      this.questions_subscription.unsubscribe();
      console.log("PlayComponent unsubscribed from questions_subscription feed");
    };
  };

  private subscribe_to_session_token(session_id_arg: string): void {
    this.sesssion_subscription = MeteorObservable.subscribe('active_session', session_id_arg).subscribe( () => {
      console.log("PlayComponent subscribed to sesssion_subscription");
      this.sesssion_observable = Users.find( {} );
      this.subscribe_to_questions(window.sessionStorage.getItem("session_id"));
    });
  };

  private subscribe_to_questions(session_id_arg: string): void {
    this.questions_subscription = MeteorObservable.subscribe('questions', session_id_arg).subscribe( () => {
      console.log("PlayComponent subscribed to questions");
      this.questions_observable = Questions.find( {} );
    });
  };

  private submit_answer(question_id_arg: string): void {
    console.log("we tried to answer question " + question_id_arg + " with " + this.given_answer);
    Meteor.call('submit_answer', question_id_arg, this.given_answer, (error, result) => {
      if (error) {
        console.log("PlayComponent called submit_answer but something went wrong");
        console.log(error);
      } else {
        console.log("PlayComponent called submit_answer");
      };
    });
    this.given_answer = null;
    this.send_keep_alive(window.sessionStorage.getItem("session_id"));
  };

  private navigate_to_login(): void {
    this.zone.run(() => {
      this.router.navigate(['/login']);
    });
  };

  private send_keep_alive(question_id_arg: string): void {
    Meteor.call('keep_session_alive', question_id_arg, (error, result) => {
      if (error) {
        console.log("PlayComponent called keep_session_alive but something went wrong");
        console.log(error);
      } else {
        console.log("PlayComponent called keep_session_alive");
      };
    });
  };

};
