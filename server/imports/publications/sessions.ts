import { Meteor } from 'meteor/meteor';

import { Users } from 'imports/collections/users';

Meteor.publish('active_session', function(session_id_arg: string) {
  return Users.find( { "session_id": session_id_arg,
                     }, { limit: 1,
                          fields: { user_id: 0, password: 0, user_created: 0, session_start: 0, session_last_touch: 0, last_login: 0 }
                        });

});