function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  return `![${license} license](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  return `[${license}](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `
## License

This project is licensed under the ${renderLicenseLink(license)} license.
`;
}

function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the project, please feel free to contact me through my [GitHub profile](https://github.com/${data.githubUsername}) or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
