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

  const fs = require('fs');

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
  }
  
  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const { title, description } = answers; // Destructure answers object
        const readmeContent = `# ${title}\n\n${description}\n`; // Generate README content
  
        writeToFile('README.md', readmeContent); // Write README file
      })
      .catch((error) => {
        console.error(error);
      });
  }

init()
.then((data) => {
  console.log("Successfully created README.md!");
})
.catch((err) => {
  console.log(err);
});



