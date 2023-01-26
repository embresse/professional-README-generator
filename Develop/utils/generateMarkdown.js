// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "BOOST") {
    licenseBadge = '![badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)\n';
  }
  if (license === "Apache") {
    licenseBadge = '![badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)\n';
  }
  if (license === "MIT") {
    licenseBadge = '![badge](https://img.shields.io/badge/License-MIT-yellow.svg)\n';
  }
  else {
    " ";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "BOOST") {
    licenseLink = '(https://www.boost.org/LICENSE_1_0.txt)\n';
  }
  if (license === "Apache") {
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)\n';
  }
  if (license === "MIT") {
    licenseLink = '(https://opensource.org/licenses/MIT)\n';
  }
  else {
    " ";
  }
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let content = ' '

  content += `# ${data.projectTitle}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
           
  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ` 
  
  
  
  content += `## Questions
  This was made by ${data.username}. Any questions can be sent to ${data.email}.
  You can find more at (https://github.com/${data.username}
  `;
  
  
  return content;
};

module.exports = generateMarkdown;
