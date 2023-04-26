const { createRequire } = require('module');
const require = createRequire(import.meta.url);
const inquirer = require('inquirer');

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
    name: 'author',
    message: 'Who is the author of the project?',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { title, description } = answers;
      const readmeContent = `# ${title}\n\n${description}\n`;

      writeToFile('README.md', readmeContent);
      console.log("Successfully created README.md!");
    })
    .catch((error) => {
      console.error(error);
    });
}

init();

