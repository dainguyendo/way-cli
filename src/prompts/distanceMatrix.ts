import { QuestionCollection } from 'inquirer';
import { TravelMode, UnitSystem, TravelRestriction } from '@google/maps';

const distanceMatrixQuestions: QuestionCollection = [
  {
    name: 'origins',
    type: 'input',
    message:
      'Specify origin(s). For multiple origins use the "|" as the delimiter.\nExample: "Origin A | Origin B"',
    default: ''
    // validate: () => true
  },
  {
    name: 'destinations',
    type: 'input',
    message:
      'Specify destination(s). For multiple destinations use the "|" as the delimiter.\nExample: "Destination A | Destination B"',
    default: ''
    // validate: () => true
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

export default distanceMatrixQuestions;
