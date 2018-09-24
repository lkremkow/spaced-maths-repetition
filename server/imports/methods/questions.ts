import { Meteor } from 'meteor/meteor';

import { Question } from '../../../imports/models/questions';
import { Questions } from '../../../imports/collections/questions';

Meteor.methods({

  submit_answer(question_id_arg: string, given_answer_arg: string) {
    console.log("we tried to answer question " + question_id_arg + " with " + given_answer_arg);
  
    let question_answered: Question;
    question_answered = Questions.findOne( { '_id': question_id_arg });

    if (typeof question_answered !== "undefined") {

      if (question_answered.answer === given_answer_arg) {
        console.log("the question was answered correctly");

        let minutes_to_defer_question = Math.pow(question_answered.current_score + 1, 2);

        console.log("deferring the question " + minutes_to_defer_question + " minutes");

        Questions.update(
          // selector
          { '_id': question_id_arg,
          },
          // modifier
          { $set: { 'last_try': new Date(),
                    'next_try': new Date(Date.now() + minutes_to_defer_question*60000),
                    'times_tried': question_answered.times_tried + 1,
                    'times_right': question_answered.times_right + 1,
                    'current_score': question_answered.current_score + 1
                  }
          },
          // options
          {
            multi: false
          }
          );
      } else {
        console.log("the question was answered incorrectly");
        Questions.update(
          // selector
          { '_id': question_id_arg,
          },
          // modifier
          { $set: { 'last_try': new Date(),
                    'next_try': new Date(Date.now() + 1*60000),
                    'times_tried': question_answered.times_tried + 1,
                    'times_wrong': question_answered.times_wrong + 1,
                    'current_score': 0
                  }
          },
          // options
          {
            multi: false
          }
          );        
      };
    };
  }

})
