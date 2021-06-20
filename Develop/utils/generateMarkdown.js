// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let choose = '';
  if (license === 'GNU AGPLv3') {
    choose = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    return choose
  }
  if (license === 'GNU GPLv3') {
    choose = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    return choose
  }
  if (license === 'Mozilla Public License 2.0') {
    choose = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    return choose
  }
  if (license === 'Apache License 2.0') {
    choose = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return choose
  }
  if (license === 'MIT') {
    choose = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return choose
  }
  if (license === 'NONE') {
    choose = ""
    return choose
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let choose = '';
  if (license === 'GNU AGPLv3') {
    choose = '(https://choosealicense.com/licenses/agpl-3.0/)'
    return choose
  }
  if (license === 'GNU GPLv3') {
    choose = '(https://choosealicense.com/licenses/gpl-3.0/)'
    return choose
  }
  if (license === 'Mozilla Public License 2.0') {
    choose = '(https://choosealicense.com/licenses/mpl-2.0/)'
    return choose
  }
  if (license === 'Apache License 2.0') {
    choose = '(https://choosealicense.com/licenses/apache-2.0/)'
    return choose
  }
  if (license === 'MIT') {
    choose = '(https://choosealicense.com/licenses/mit/)'
    return choose
  }
  if (license === 'NONE') {
    choose = ''
    return choose
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const renderLicense = renderLicense(license) + renderLicenseLink(license);
  return `##License
  `
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
