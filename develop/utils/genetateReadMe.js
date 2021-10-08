// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'APACHE 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

      case 'BSD 3':
        return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';

      case 'GPL 3.0':
        return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';

      case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';

      default:
        return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'APACHE 2.0':
            return '[APACHE 2.0 License](https://opensource.org/licenses/Apache-2.0)';
            
        case 'BSD 3':
            return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';
        
        case 'GPL 3.0':
            return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';

        case 'MIT':
            return '[MIT License](https://opensource.org/licenses/MIT)';
            
        default:
            return "";   
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == 'none') {
        return `## License
    This software is not licensed for open source use.`;
      } else {
      
      return `## License
    
    This project is licensed under the ${renderLicenseLink(license)}.`
      }
}

// TODO: Create a function to generate markdown for README
function generateReadMe(data) {
  return `# ${data.title}

`;
}









module.exports = generateReadMe;
