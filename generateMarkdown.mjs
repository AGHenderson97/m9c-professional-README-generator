import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './utils/renderLicense.mjs';

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

If you have any questions or comments about this project, please contact me at ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.github}) for additional information and resources. Thank you!

## License

This project is licensed under the ${renderLicenseLink(data.license)} license. ${renderLicenseBadge(data.license)}
`;
}

export default generateMarkdown;
