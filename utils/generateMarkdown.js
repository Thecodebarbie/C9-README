


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    // Handle other licenses or invalid input
    return ''; // Return an empty string for other licenses or invalid input
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation
}
## Usage

${data.usage}

## Contributing

${data.contributing}

## License

${renderLicenseSection(data.license)}

## Badges

${data.badges}

## Tests

${data.tests}

## Questions
  <ul>
   <li> <a href='mailto://${data.email}?subject="contact me"&body="Hello"'> Email Me <a/> </li>
   <li> <a href='https://github.com/${data.username}'> My Github Profile <a/> </li>
  </ul>
   

`;
}

module.exports = generateMarkdown;
