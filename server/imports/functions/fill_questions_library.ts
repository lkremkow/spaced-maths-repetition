import { Question } from 'imports/models/questions';

import { Questions } from 'imports/collections/questions';
import { QuestionsLibrary } from 'imports/collections/questions_library';

fill_questions_library_if_empty();

function fill_questions_library_if_empty(): void {
  // var questions_in_library : Question[] = [];
  // questions_in_library = QuestionsLibrary.find().fetch();
  // if (questions_in_library.length === 0) {
  //   console.log("questions library collection is empty, importing all questions");
  //   fill_questions_library();
  // };
  QuestionsLibrary.remove({});
  fill_questions_library();
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

  new_question.question = "1 × 12";
  new_question.answer = "12";
  new_question.difficulty = 4.5802;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 6";
  new_question.answer = "6";
  new_question.difficulty = 5.1502;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 1";
  new_question.answer = "9";
  new_question.difficulty = 5.2632;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 1";
  new_question.answer = "6";
  new_question.difficulty = 5.4393;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 11";
  new_question.answer = "11";
  new_question.difficulty = 5.8577;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 1";
  new_question.answer = "4";
  new_question.difficulty = 6.4795;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 1";
  new_question.answer = "8";
  new_question.difficulty = 6.8966;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 4";
  new_question.answer = "4";
  new_question.difficulty = 7.2765;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 5";
  new_question.answer = "55";
  new_question.difficulty = 7.4689;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 1";
  new_question.answer = "7";
  new_question.difficulty = 7.7083;
  QuestionsLibrary.insert(new_question);  

  new_question.question = "5 × 1";
  new_question.answer = "5";
  new_question.difficulty = 7.7947;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 2";
  new_question.answer = "6";
  new_question.difficulty = 7.7973;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 10";
  new_question.answer = "30";
  new_question.difficulty = 7.9922;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 1";
  new_question.answer = "2";
  new_question.difficulty = 8.0483;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 9";
  new_question.answer = "9";
  new_question.difficulty = 8.0709;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 1";
  new_question.answer = "3";
  new_question.difficulty = 8.2329;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 5";
  new_question.answer = "5";
  new_question.difficulty = 8.4034;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 8";
  new_question.answer = "8";
  new_question.difficulty = 8.4507;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 7";
  new_question.answer = "7";
  new_question.difficulty = 8.4536;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 2";
  new_question.answer = "8.6777";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 1";
  new_question.answer = "11";
  new_question.difficulty = 8.7137;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 2";
  new_question.answer = "8";
  new_question.difficulty = 8.9286;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 3";
  new_question.answer = "9";
  new_question.difficulty = 9.0909;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 2";
  new_question.answer = "4";
  new_question.difficulty = 9.1102;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 1";
  new_question.answer = "10";
  new_question.difficulty = 9.2338;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 10";
  new_question.answer = "40";
  new_question.difficulty = 9.3117;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 6";
  new_question.answer = "60";
  new_question.difficulty = 9.407;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 10";
  new_question.answer = "10";
  new_question.difficulty = 9.4118;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 3";
  new_question.answer = "3";
  new_question.difficulty = 9.5133;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 10";
  new_question.answer = "70";
  new_question.difficulty = 9.6078;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 6";
  new_question.answer = "66";
  new_question.difficulty = 9.7276;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 7";
  new_question.answer = "70";
  new_question.difficulty = 9.8619;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 1";
  new_question.answer = "1";
  new_question.difficulty = 9.8765;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 1";
  new_question.answer = "12";
  new_question.difficulty = 9.8814;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 5";
  new_question.answer = "50";
  new_question.difficulty = 10;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 10";
  new_question.answer = "60";
  new_question.difficulty = 10.0656;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 8";
  new_question.answer = "80";
  new_question.difficulty = 10.0806;
  QuestionsLibrary.insert(new_question);  

  new_question.question = "2 × 4";
  new_question.answer = "8";
  new_question.difficulty = 10.099;
  QuestionsLibrary.insert(new_question);  

  new_question.question = "8 × 10";
  new_question.answer = "80";
  new_question.difficulty = 10.1996;
  QuestionsLibrary.insert(new_question);  

  new_question.question = "11 × 4";
  new_question.answer = "44";
  new_question.difficulty = 10.3321;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 5";
  new_question.answer = "10";
  new_question.difficulty = 10.4673;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 2";
  new_question.answer = "22";
  new_question.difficulty = 10.5023;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 2";
  new_question.answer = "10";
  new_question.difficulty = 10.5578;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 11";
  new_question.answer = "33";
  new_question.difficulty = 10.5691;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 3";
  new_question.answer = "15";
  new_question.difficulty = 10.5906;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 10";
  new_question.answer = "50";
  new_question.difficulty = 10.8738;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 10";
  new_question.answer = "100";
  new_question.difficulty = 11.1111;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 3";
  new_question.answer = "6";
  new_question.difficulty = 11.2403;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 4";
  new_question.answer = "40";
  new_question.difficulty = 11.3402;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 2";
  new_question.answer = "20";
  new_question.difficulty = 11.4458;
  QuestionsLibrary.insert(new_question);

  new_question.question = "1 × 2";
  new_question.answer = "2";
  new_question.difficulty = 11.5468;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 5";
  new_question.answer = "25";
  new_question.difficulty = 11.7043;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 9";
  new_question.answer = "90";
  new_question.difficulty = 11.7391;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 7";
  new_question.answer = "14";
  new_question.difficulty = 11.8026;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 3";
  new_question.answer = "33";
  new_question.difficulty = 11.8644;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 10";
  new_question.answer = "20";
  new_question.difficulty = 11.9342;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 11";
  new_question.answer = "55";
  new_question.difficulty = 11.9835;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 11";
  new_question.answer = "44";
  new_question.difficulty = 12.1951;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 3";
  new_question.answer = "30";
  new_question.difficulty = 12.2;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 2";
  new_question.answer = "14";
  new_question.difficulty = 12.2153;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 8";
  new_question.answer = "88";
  new_question.difficulty = 12.2951;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 11";
  new_question.answer = "22";
  new_question.difficulty = 12.6582;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 6";
  new_question.answer = "12";
  new_question.difficulty = 12.8364;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 11";
  new_question.answer = "66";
  new_question.difficulty = 12.8571;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 11";
  new_question.answer = "88";
  new_question.difficulty = 12.8631;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 10";
  new_question.answer = "90";
  new_question.difficulty = 13.215;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 2";
  new_question.answer = "16";
  new_question.difficulty = 13.6986;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 5";
  new_question.answer = "15";
  new_question.difficulty = 13.8889;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 2";
  new_question.answer = "24";
  new_question.difficulty = 13.913;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 5";
  new_question.answer = "20";
  new_question.difficulty = 14.3469;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 9";
  new_question.answer = "18";
  new_question.difficulty = 14.5969;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 4";
  new_question.answer = "20";
  new_question.difficulty = 14.8847;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 8";
  new_question.answer = "16";
  new_question.difficulty = 14.959;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 11";
  new_question.answer = "99";
  new_question.difficulty = 15.2;
  QuestionsLibrary.insert(new_question);

  new_question.question = "2 × 12";
  new_question.answer = "24";
  new_question.difficulty = 15.3846;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 9";
  new_question.answer = "99";
  new_question.difficulty = 15.7088;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 7";
  new_question.answer = "77";
  new_question.difficulty = 15.9363;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 8";
  new_question.answer = "40";
  new_question.difficulty = 16.1616;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 11";
  new_question.answer = "77";
  new_question.difficulty = 16.2393;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 2";
  new_question.answer = "18";
  new_question.difficulty = 16.309;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 6";
  new_question.answer = "30";
  new_question.difficulty = 17.1846;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 3";
  new_question.answer = "12";
  new_question.difficulty = 17.418;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 5";
  new_question.answer = "45";
  new_question.difficulty = 17.9592;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 4";
  new_question.answer = "12";
  new_question.difficulty = 18;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 6";
  new_question.answer = "18";
  new_question.difficulty = 18.2203;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 7";
  new_question.answer = "35";
  new_question.difficulty = 18.3445;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 9";
  new_question.answer = "45";
  new_question.difficulty = 18.4549;
  QuestionsLibrary.insert(new_question);

  new_question.question = "5 × 12";
  new_question.answer = "60";
  new_question.difficulty = 18.6441;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 5";
  new_question.answer = "30";
  new_question.difficulty = 19.0476;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 5";
  new_question.answer = "35";
  new_question.difficulty = 20.7039;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 11";
  new_question.answer = "110";
  new_question.difficulty = 21.1454;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 5";
  new_question.answer = "40";
  new_question.difficulty = 21.5481;
  QuestionsLibrary.insert(new_question);

  new_question.question = "10 × 12";
  new_question.answer = "120";
  new_question.difficulty = 21.6667;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 10";
  new_question.answer = "120";
  new_question.difficulty = 22.1014;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 7";
  new_question.answer = "21";
  new_question.difficulty = 22.1491;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 9";
  new_question.answer = "81";
  new_question.difficulty = 23.6515;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 5";
  new_question.answer = "60";
  new_question.difficulty = 23.6515;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 12";
  new_question.answer = "36";
  new_question.difficulty = 24.3478;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 4";
  new_question.answer = "16";
  new_question.difficulty = 24.3615;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 3";
  new_question.answer = "36";
  new_question.difficulty = 24.6269;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 8";
  new_question.answer = "24";
  new_question.difficulty = 24.8016;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 3";
  new_question.answer = "18";
  new_question.difficulty = 25.6959;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 3";
  new_question.answer = "21";
  new_question.difficulty = 25.8065;
  QuestionsLibrary.insert(new_question);

  new_question.question = "3 × 9";
  new_question.answer = "27";
  new_question.difficulty = 26.5033;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 3";
  new_question.answer = "24";
  new_question.difficulty = 27.7056;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 3";
  new_question.answer = "27";
  new_question.difficulty = 28.4038;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 6";
  new_question.answer = "36";
  new_question.difficulty = 28.5429;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 10";
  new_question.answer = "110";
  new_question.difficulty = 29.1829;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 4";
  new_question.answer = "48";
  new_question.difficulty = 30.3419;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 4";
  new_question.answer = "36";
  new_question.difficulty = 31.0204;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 6";
  new_question.answer = "24";
  new_question.difficulty = 31.1871;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 9";
  new_question.answer = "36";
  new_question.difficulty = 32.3944;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 12";
  new_question.answer = "48";
  new_question.difficulty = 32.8185;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 7";
  new_question.answer = "63";
  new_question.difficulty = 33.8028;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 4";
  new_question.answer = "28";
  new_question.difficulty = 33.9246;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 4";
  new_question.answer = "24";
  new_question.difficulty = 34.4758;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 9";
  new_question.answer = "63";
  new_question.difficulty = 35.8079;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 7";
  new_question.answer = "28";
  new_question.difficulty = 35.8349;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 8";
  new_question.answer = "72";
  new_question.difficulty = 37.1739;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 9";
  new_question.answer = "72";
  new_question.difficulty = 38.2022;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 6";
  new_question.answer = "72";
  new_question.difficulty = 39.0244;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 9";
  new_question.answer = "54";
  new_question.difficulty = 39.4273;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 6";
  new_question.answer = "54";
  new_question.difficulty = 39.5918;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 12";
  new_question.answer = "144";
  new_question.difficulty = 42.437;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 12";
  new_question.answer = "72";
  new_question.difficulty = 42.8571;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 7";
  new_question.answer = "49";
  new_question.difficulty = 43.71;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 6";
  new_question.answer = "42";
  new_question.difficulty = 44.5585;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 12";
  new_question.answer = "84";
  new_question.difficulty = 44.5736;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 9";
  new_question.answer = "108";
  new_question.difficulty = 45.7831;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 7";
  new_question.answer = "84";
  new_question.difficulty = 46.3115;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 7";
  new_question.answer = "56";
  new_question.difficulty = 47.0588;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 7";
  new_question.answer = "42";
  new_question.difficulty = 47.1698;
  QuestionsLibrary.insert(new_question);

  new_question.question = "9 × 12";
  new_question.answer = "108";
  new_question.difficulty = 47.5177;
  QuestionsLibrary.insert(new_question);

  new_question.question = "4 × 8";
  new_question.answer = "32";
  new_question.difficulty = 47.8175;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 4";
  new_question.answer = "32";
  new_question.difficulty = 49.2872;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 8";
  new_question.answer = "64";
  new_question.difficulty = 49.4802;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 12";
  new_question.answer = "132";
  new_question.difficulty = 49.5192;
  QuestionsLibrary.insert(new_question);

  new_question.question = "11 × 11";
  new_question.answer = "121";
  new_question.difficulty = 49.5902;
  QuestionsLibrary.insert(new_question);

  new_question.question = "7 × 8";
  new_question.answer = "56";
  new_question.difficulty = 52.6652;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 8";
  new_question.answer = "96";
  new_question.difficulty = 52.7426;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 12";
  new_question.answer = "96";
  new_question.difficulty = 56.5041;
  QuestionsLibrary.insert(new_question);

  new_question.question = "12 × 11";
  new_question.answer = "132";
  new_question.difficulty = 57.9365;
  QuestionsLibrary.insert(new_question);

  new_question.question = "6 × 8";
  new_question.answer = "48";
  new_question.difficulty = 60.3004;
  QuestionsLibrary.insert(new_question);

  new_question.question = "8 × 6";
  new_question.answer = "48";
  new_question.difficulty = 62.5;
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

  
  // division
  new_question.operation = "d";
  
  new_question.question = "9 ÷ 1";
  new_question.answer = "9";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);


  // substraction
  new_question.operation = "s";

  new_question.question = "9 − 1";
  new_question.answer = "8";
  new_question.difficulty = 1;
  QuestionsLibrary.insert(new_question);
};
