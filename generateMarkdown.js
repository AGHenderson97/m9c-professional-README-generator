// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  const badge = `![${license} license](https://img.shields.io/badge/license-${license}-brightgreen)`;

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  const link = `[${license}](https://opensource.org/licenses/${license})`;

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  const section = `
## License

This project is licensed under the ${renderLicenseLink(license)} license.
`;

  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
