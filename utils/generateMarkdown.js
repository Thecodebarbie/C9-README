


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
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else {
    console.log("License type is not MIT");
    return ""; // Return an empty string for other licenses or invalid input
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    console.log(`Rendering license section for license: ${license}`);
    return `
## License

This project is licensed under the ${license} license.
`;
  } else {
    console.log('No license provided, skipping license section rendering');
    return '';
  }
}

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


${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Badges

${data.badges ? data.badges + '\n' : ''}![Static Badge](https://img.shields.io/badge/theCODEbarbie-%23FBF6E9?style=for-the-badge&logo=Spotlight&labelColor=%23F79AD3)

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
