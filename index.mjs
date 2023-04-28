import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.mjs';
import { writeToFile } from './utils/fs.mjs';

const path = './generated_readmes';

async function init() {
  try {
    const responses = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for your project:',
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
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username:',
      },
    ]);

    const filename = `${path}/MY-README.md`;

    const markdown = generateMarkdown(responses);
    await writeToFile(filename, markdown);

    console.log(`Your README file has been generated and is located in ${filename}`);
  } catch (err) {
    console.log(err);
  }
}

init();
