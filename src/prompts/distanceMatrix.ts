import Inquirer from 'inquirer';
import { TravelRestriction } from '@google/maps';

const distanceMatrixQuestions: Inquirer.QuestionCollection = [
  {
    name: 'origins',
    type: 'input',
    message:
      'Specify origin(s). For multiple origins use the "|" as the delimiter.\nExample: "Origin A | Origin B"',
    default: '',
    validate: value => !!value
  },
  {
    name: 'destinations',
    type: 'input',
    message:
      'Specify destination(s). For multiple destinations use the "|" as the delimiter.\nExample: "Destination A | Destination B"',
    default: '',
    validate: value => !!value
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
    default: 'none' as TravelRestriction
  }
];

export default distanceMatrixQuestions;
