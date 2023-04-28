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
  
  This project is licensed under the ${renderLicenseLink(license)} license. ${renderLicenseBadge(license)}
  `;
  }
  
  export { renderLicenseBadge, renderLicenseLink, renderLicenseSection };
  