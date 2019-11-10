import { QuestionCollection } from 'inquirer';

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
  }
];
export default directionsPrompt;
