import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.mjs';
import { writeToFile } from './utils/fs.mjs';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project:',
    choices: ['MIT', 'GPLv2', 'Apache', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address:',
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); // Generate README content
      writeToFile('README.md', readmeContent); // Write README file
      console.log('Successfully created README.md!');
    })
    .catch((error) => {
      console.error(error);
    });
}

init();
