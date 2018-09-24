import { MongoObservable } from 'meteor-rxjs';

import { Question } from '../models/questions';

export const QuestionsLibrary = new MongoObservable.Collection<Question>('questions_library');