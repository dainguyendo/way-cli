import { QuestionCollection } from 'inquirer';

const directionsPrompt: QuestionCollection = [
  {
    name: 'origin',
    type: 'input',
    message: 'Specify origin',
    default: '',
    validate: value => !!value
  },
  {
    name: 'destination',
    type: 'input',
    message: 'Specify destination',
    default: '',
    validate: value => !!value
  }
];
export default directionsPrompt;
