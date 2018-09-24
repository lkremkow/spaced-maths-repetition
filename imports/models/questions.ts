export interface Question {
  _id?: string,
  owned_by_user_id: string,
  tied_to_session_id: string,
  operation: string,
  question: string,
  answer: string,
  difficulty: number,
  last_try: Date,
  next_try: Date,
  times_tried: number,
  times_right: number,
  times_wrong: number,
  current_score: number
};


