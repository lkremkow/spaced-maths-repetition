import { MongoObservable } from 'meteor-rxjs';

import { Question } from '../models/questions';

export const Questions = new MongoObservable.Collection<Question>('questions_published');