import Inquirer from 'inquirer';

const directionsPrompt: Inquirer.QuestionCollection = [
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
