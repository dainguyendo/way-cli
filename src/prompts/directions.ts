import { QuestionCollection } from 'inquirer';
import { TravelRestriction } from '@google/maps';

const directionsPrompt: QuestionCollection = [
  {
    name: 'origin',
    type: 'input',
    message: 'Specify origin',
    default: ''
  },
  {
    name: 'destination',
    type: 'input',
    message: 'Specify destination',
    default: ''
  },
  {
    name: 'avoid',
    type: 'checkbox',
    message: 'Do you need to avoid anything?',
    choices: [
      'none',
      'ferries',
      'highways',
      'indoor',
      'tolls'
    ] as TravelRestriction[],
    default: '' as TravelRestriction
    // validate: () => true
  }
];
export default directionsPrompt;
