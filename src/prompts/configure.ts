import { QuestionCollection } from 'inquirer';
import { Language, TravelMode, UnitSystem } from '@google/maps';

const configureQuestions: QuestionCollection = [
  {
    name: 'language',
    type: 'input',
    message:
      'Input the language code to return. See https://developers.google.com/maps/faq#languagesupport for more information.',
    default: 'en' as Language
  },
  {
    name: 'mode',
    type: 'list',
    message: 'Select a mode of transportation',
    choices: ['bicycling', 'driving', 'transit', 'walking'] as TravelMode[],
    default: 'driving' as TravelMode
    // validate: () => true
  },
  {
    name: 'units',
    type: 'list',
    message: 'Specify measurement unit',
    choices: ['imperial', 'metric'] as UnitSystem[],
    default: 'metric' as UnitSystem
    // validate: () => true
  }
];
export default configureQuestions;
