import { Meteor } from 'meteor/meteor';

import { Questions } from 'imports/collections/questions';
import { Question } from 'imports/models/questions'

Meteor.publish('questions', function(session_id_arg: string) {
  // console.log("someone subscribing for ", session_id_arg);
  return Questions.find( { tied_to_session_id: session_id_arg,
                         }, { limit: 1,
                              fields: { owned_by_user_id: 0, tied_to_session_id: 0 },
                              sort: { next_try: 1 }
                            });

});