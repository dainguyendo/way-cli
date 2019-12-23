import Inquirer from 'inquirer';
import { Language, TravelMode, UnitSystem } from '@google/maps';

const configureQuestions: Inquirer.QuestionCollection = [
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
  },
  {
    name: 'units',
    type: 'list',
    message: 'Specify measurement unit',
    choices: ['imperial', 'metric'] as UnitSystem[],
    default: 'metric' as UnitSystem
  }
];
export default configureQuestions;
