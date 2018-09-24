import { Question } from 'imports/models/questions';

import { Questions } from 'imports/collections/questions';
import { QuestionsLibrary } from 'imports/collections/questions_library';


// import { Users } from 'imports/collections/users';
// import { StatisticOfGlobal } from 'imports/models/statistic_of_global';
// import { Time_To_Fix_Data } from 'imports/collections/time_to_fix_data';
// import { Time_To_Fix_Record } from 'imports/models/time_to_fix_record';

// setInterval(Meteor.bindEnvironment(remove_expired_sessions), 300000);

// Meteor.bindEnvironment(function(error, response, webBodyData)

fill_questions_library_if_empty();

function fill_questions_library_if_empty(): void {
  var questions_in_library : Question[] = [];
  questions_in_library = QuestionsLibrary.find().fetch();
  if (questions_in_library.length === 0) {
    console.log("questions library collection is empty, importing all questions");
    fill_questions_library();
  };
};

function fill_questions_library(): void {
  let new_question: Question = {
    owned_by_user_id: null,
    tied_to_session_id: null,
    operation: null,
    question: null,
    answer: null,
    difficulty: null,
    last_try: null,
    next_try: null,
    times_tried: 0,
    times_right: 0,
    times_wrong: 0,
    current_score: 0
  };

  // multiplication
  new_question.operation = "m";

  new_question.question = "1 × 1";
  new_question.answer = "1";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 2";
  new_question.answer = "2";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 3";
  new_question.answer = "3";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 4";
  new_question.answer = "4";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 5";
  new_question.answer = "5";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 6";
  new_question.answer = "6";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 7";
  new_question.answer = "7";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 8";
  new_question.answer = "8";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 9";
  new_question.answer = "9";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 10";
  new_question.answer = "10";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);  

  new_question.question = "2 × 1";
  new_question.answer = "2";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 1";
  new_question.answer = "3";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 1";
  new_question.answer = "4";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 1";
  new_question.answer = "4";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 1";
  new_question.answer = "5";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 1";
  new_question.answer = "6";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 1";
  new_question.answer = "7";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 1";
  new_question.answer = "8";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 1";
  new_question.answer = "9";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 1";
  new_question.answer = "1";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 2";
  new_question.answer = "2";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 3";
  new_question.answer = "3";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 4";
  new_question.answer = "4";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 5";
  new_question.answer = "5";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 6";
  new_question.answer = "6";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 7";
  new_question.answer = "7";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 8";
  new_question.answer = "8";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 9";
  new_question.answer = "9";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 1";
  new_question.answer = "1";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 1";
  new_question.answer = "2";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 1";
  new_question.answer = "3";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 1";
  new_question.answer = "4";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 1";
  new_question.answer = "5";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 1";
  new_question.answer = "6";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 1";
  new_question.answer = "7";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 1";
  new_question.answer = "8";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 1";
  new_question.answer = "9";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);  

  // additions
  new_question.operation = "m";

  new_question.question = "1 + 1";
  new_question.answer = "2";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 2";
  new_question.answer = "3";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 3";
  new_question.answer = "4";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 4";
  new_question.answer = "5";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 5";
  new_question.answer = "6";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 6";
  new_question.answer = "7";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 7";
  new_question.answer = "8";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 8";
  new_question.answer = "9";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 9";
  new_question.answer = "10";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 + 1";
  new_question.answer = "2";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 + 1";
  new_question.answer = "3";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 + 1";
  new_question.answer = "4";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 + 1";
  new_question.answer = "5";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 + 1";
  new_question.answer = "6";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 + 1";
  new_question.answer = "7";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 + 1";
  new_question.answer = "8";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 + 1";
  new_question.answer = "9";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 + 1";
  new_question.answer = "10";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

};