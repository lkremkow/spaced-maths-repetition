import { Meteor } from 'meteor/meteor';

import { Users } from '../../../imports/collections/users';
import { User } from '../../../imports/models/users';

import { Question } from '../../../imports/models/questions';
import { Questions } from '../../../imports/collections/questions';
import { QuestionsLibrary } from '../../../imports/collections/questions_library';

Meteor.methods({

  keep_session_alive(session_id_arg: string) {
    let existing_user: User;
    existing_user = Users.findOne( { 'session_id': session_id_arg         
                                   });

    if (typeof existing_user !== "undefined") {
      Users.update(
              // selector
              { 'user_id': existing_user.user_id,
              },
              // modifier
              { $set: { 'session_last_touch': new Date()
                      }
              },
              {
                multi: false
              }
            );
    };
  }, 

  login_user(username_arg: string, password_arg: string) {

    let existing_user: User;
    existing_user = Users.findOne( { 'username': username_arg,
                                     'password': password_arg             
                                   });

    if (typeof existing_user === "undefined") {
      return "";
    } else {
      let new_session_id: string = Random.id(32);
      Users.update(
              // selector
              { '_id': existing_user._id,
              },
              // modifier
              { $set: { 'session_id': new_session_id,
                        'session_start': new Date(),
                        'session_last_touch': new Date(),
                        'last_login': new Date()
                      }
              },
              {
                multi: false
              }
            );
      Questions.update(
              // selector
              { 'owned_by_user_id': existing_user.user_id,
              },
              // modifier
              { $set: { 'tied_to_session_id': new_session_id
                      }
              },
              {
                multi: true
              }
            );            
      return new_session_id;
    };
    

  },

  create_user(username_arg: string, password_arg: string) {

    let existing_user: User;
    existing_user = Users.findOne( { 'username': username_arg });

    if (typeof existing_user === "undefined") {
      let new_user_id: string = Random.id(32);
      let new_session_id: string = Random.id(32);
      let new_user: User = {
        user_id: new_user_id,
        username: username_arg,
        password: password_arg,
        user_created: new Date(),
        session_id: new_session_id,
        session_start: new Date(),
        session_last_touch: new Date(),
        last_login: new Date()
      };
      Users.insert(new_user);

      var questions_in_library : Question[] = [];
      questions_in_library = QuestionsLibrary.find().fetch();
      for (let question_counter = 0; question_counter < questions_in_library.length; question_counter++) {
        delete questions_in_library[question_counter]._id;
        questions_in_library[question_counter].owned_by_user_id = new_user_id;
        questions_in_library[question_counter].tied_to_session_id = new_session_id;
        Questions.insert(questions_in_library[question_counter]);
      };
      return new_session_id;
    } else {
      return "";
    };
    

  },

  logout_user(session_id_arg: string) {

    let existing_user: User;
    existing_user = Users.findOne( { 'session_id': session_id_arg         
                                   });

    if (typeof existing_user !== "undefined") {
      Users.update(
              // selector
              { 'user_id': existing_user.user_id,
              },
              // modifier
              { $set: { 'session_id': null,
                        'session_start': null,
                        'session_last_touch': null
                      }
              },
              {
                multi: false
              }
            );
      Questions.update(
              // selector
              { 'owned_by_user_id': existing_user.user_id,
              },
              // modifier
              { $set: { 'tied_to_session_id': null
                      }
              },
              {
                multi: true
              }
            );
    };
  },

  destroy_account(session_id_arg: string) {

    let existing_user: User;
    existing_user = Users.findOne( { 'session_id': session_id_arg         
                                   });

    if (typeof existing_user !== "undefined") {
      Users.remove( {'user_id': existing_user.user_id} );
      Questions.remove( {'owned_by_user_id': existing_user.user_id} );
    };
  },

  modify_questions(session_id_arg: string, operation_arg: string, family_arg: string) {

    let existing_user: User;
    existing_user = Users.findOne( { 'session_id': session_id_arg         
                                   });

    let family_of_operations_selector: any = "";  
    if (typeof existing_user !== "undefined") {
      if (family_arg === "mul") {
        family_of_operations_selector = {
          $in: ['m']
        };

      } else if (family_arg === "div") {
        family_of_operations_selector = {
          $in: ['d']
        };
        
      } else if (family_arg === "add") {
        family_of_operations_selector = {
          $in: ['a']
        };
        
      } else if (family_arg === "sub") {
        family_of_operations_selector = {
          $in: ['s']
        };
        
      } else if (family_arg === "all") {
        family_of_operations_selector = {
          $in: ['m', 'd', 'a', 's']
        };
        
      };

      if (operation_arg === "add") {
        Questions.remove( {'owned_by_user_id': existing_user.user_id, operation: family_of_operations_selector} );
        var questions_in_library : Question[] = [];
        questions_in_library = QuestionsLibrary.find({operation: family_of_operations_selector}).fetch();
        for (let question_counter = 0; question_counter < questions_in_library.length; question_counter++) {
          delete questions_in_library[question_counter]._id;
          questions_in_library[question_counter].owned_by_user_id = existing_user.user_id;
          questions_in_library[question_counter].tied_to_session_id = session_id_arg;
          Questions.insert(questions_in_library[question_counter]);
        };
      } else if (operation_arg === "rem") {
        Questions.remove( {'owned_by_user_id': existing_user.user_id, operation: family_of_operations_selector} );
      };

    };
  },

  change_username(session_id_arg: string, new_username_arg: string) {

    let existing_user: User;
    existing_user = Users.findOne( { 'session_id': session_id_arg         
                                   });

    if ((typeof existing_user !== "undefined") && (new_username_arg.length != 0)) {
      Users.update(
        // selector
        { 'user_id': existing_user.user_id,
        },
        // modifier
        { $set: { 'username': new_username_arg
                }
        },
        {
          multi: false
        }
      );
    };
  },

  change_password(session_id_arg: string, new_password_arg: string) {

    let existing_user: User;
    existing_user = Users.findOne( { 'session_id': session_id_arg         
                                   });

    if ((typeof existing_user !== "undefined") && (new_password_arg.length != 0)) {
      Users.update(
        // selector
        { 'user_id': existing_user.user_id,
        },
        // modifier
        { $set: { 'password': new_password_arg
                }
        },
        {
          multi: false
        }
      );
    };
  }  

})
