import { Users } from 'imports/collections/users';

setInterval(Meteor.bindEnvironment(remove_expired_sessions), 300000);

function remove_expired_sessions(): void {
  console.log("removing expired sessions");
  let cut_off = new Date(Date.now() - 5*60000);
  Users.update(
    // selector
    { 'session_last_touch': {"$lte": cut_off},
    },
    // modifier
    { $set: { 'session_id': "",
              'session_start': "",
              'session_last_touch': ""
            }
    },
    {
      multi: true
    }
  );
  
};