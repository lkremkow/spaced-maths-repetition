import { Meteor } from 'meteor/meteor';

import { Questions } from 'imports/collections/questions';
import { Question } from 'imports/models/questions'

Meteor.publish('questions', function(session_id_arg: string) {
  // console.log("someone subscribing for ", session_id_arg);

  let difficulty_threshhold = 0;
  let questions_matching_difficulty_threshhold : Question[] = [];
  console.log("adjusting difficulty rating");
  while (questions_matching_difficulty_threshhold.length === 0) {
    questions_matching_difficulty_threshhold = Questions.find({tied_to_session_id: session_id_arg,
                                                               difficulty: {$lte: difficulty_threshhold},
                                                               current_score: 0}).fetch();
    console.log("found " + questions_matching_difficulty_threshhold.length + " question at difficulty " + difficulty_threshhold);
    difficulty_threshhold++;
  };

  return Questions.find( { tied_to_session_id: session_id_arg,
                           difficulty: {$lte: difficulty_threshhold},
                           next_try: {$lte: new Date()}
                         }, { limit: 1,
                              fields: { owned_by_user_id: 0, tied_to_session_id: 0 },
                              sort: { next_try: 1 }
                            });

});