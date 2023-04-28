# m9c-professional-README-generator

[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description:

This is a command-line application that dynamically generates a professional README.md file from user input. The application uses the Inquirer package to prompt the user with a series of questions about their project and generate a high-quality README file based on their responses.

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To use this application, you will need to have Node.js installed on your computer. You can download Node.js at https://nodejs.org/en/download/. 

Once you have installed Node.js, clone this repository and navigate to the root directory. Run the following command to install the required packages/dependencies: npm install

## Usage

To run this application, navigate to the root directory of the project in your terminal and run the command node index.mjs. You will be prompted with a series of questions about your project. 

## Generated README Files

When you run the README Generator application, a new file named "MY-README.md" will be generated based on the responses you provide to the prompts. This file will be located in the "generated_readmes" folder in the root directory of the project. Please note that running the application multiple times will overwrite any existing "MY-README.md" files in the folder, so be sure to save any important information before generating a new file.

## License

This project is licensed under the MIT license. If the user selects a license from the provided list, the application will also include a badge and a notice in the License section.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:
1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

## Questions

If you have any questions or comments about this project, please contact me at agh.pe.gatech@outlook.com. You can also visit my [GitHub profile](https://github.com/AGHenderson97) for additional information and resources. 

## Example generated MY-README
https://drive.google.com/file/d/1sFiQwkJFcUX8LHdr13FFhH5G3zdAecWd/view?usp=sharing

## User Story:

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria:

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
