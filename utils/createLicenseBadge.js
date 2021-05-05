// Function that creates a license badge based on the license selected by the user
function createLicenseBadge(licenseSelected) {
    let value = '';
    switch(licenseSelected) {
        case 'Academic Free License v3.0':
            value = `[![License: AFL v3](https://img.shields.io/badge/License-AFL%20v3.0-yellow.svg)](https://opensource.org/licenses/AFL-3.0)\n`;
            break;
        case 'Apache license 2.0':
            value = `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`;
            break;
        case 'Artistic license 2.0':
            value = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)\n`;
            break;
        case 'Boost Software License 1.0':
            value = `[![License: BSL 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n`;
            break;
        case 'BSD 2-clause "Simplified" license':
            value = `[![License: BSD 2-clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n`;
            break;
        case 'BSD 3-clause "New" or "Revised" license':
            value = `[![License: BSD 3-clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n`;
            break;
        case 'BSD 3-clause Clear license':
            value = `[![License: BSD 3-clause Clear](https://img.shields.io/badge/License-BSD%203--Clause%20Clear-blue.svg)](https://spdx.org/licenses/BSD-3-Clause-Clear.html)\n`;
            break;
        case 'Creative Commons license family':
            value = `[![License: CC](https://img.shields.io/badge/License-CC-lightgrey.svg)](https://creativecommons.org/licenses/)\n`;
            break;
        case 'Creative Commons Zero v1.0 Universal':
            value = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)\n`;
            break;
        case 'Creative Commons Attribution 4.0':
            value = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)\n`;
            break;
        case 'Creative Commons Attribution Share Alike 4.0':
            value = `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)\n`;
            break;
        case 'Do What The F*ck You Want To Public License':
            value = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)\n`;
            break;
        case 'Educational Community License v2.0':
            value = `[![License: ECL v2](https://img.shields.io/badge/License-ECL%202.0-red.svg)](https://opensource.org/licenses/ECL-2.0)\n`;
            break;
        case 'Eclipse Public License 1.0':
            value = `[![License: EPL 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)\n`;
            break;
        case 'Eclipse Public License 2.0':
            value = `[![License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)\n`;
            break;
        case 'European Union Public License 1.2':
            value = `[![License: EUPL 1.2](https://img.shields.io/badge/License-EUPL%201.2-orange.svg)](https://opensource.org/licenses/EUPL-1.2)\n`;
            break;
        case 'GNU Affero General Public License v3.0':
            value = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n`;
            break;
        case 'GNU General Public License family':
            value = `[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/licenses.html#GPL)\n`;
            break;
        case 'GNU General Public License v2.0':
            value = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n`;
            break;
        case 'GNU General Public License v3.0':
            value = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;
            break;
        case 'GNU Lesser General Public License family':
            value = `[![License: LGPL](https://img.shields.io/badge/License-LGPL-blue.svg)](https://www.gnu.org/licenses/licenses.html#LGPL)\n`;
            break;
        case 'GNU Lesser General Public License v2.1':
            value = `[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)\n`;
            break;
        case 'GNU Lesser General Public License v3.0':
            value = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)\n`;
            break;
        case 'ISC':
            value = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n`;
            break;
        case 'LaTeX Project Public License v1.3c':
            value = `[![License: LPPL v1.3c](https://img.shields.io/badge/License-LPPL%20v1.3c-orange.svg)](https://opensource.org/licenses/LPPL-1.3c)\n`;
            break;
        case 'Microsoft Public License':
            value = `[![License: MS PL](https://img.shields.io/badge/License-MS%20PL-brightgreen.svg)](https://opensource.org/licenses/MS-PL)\n`;
            break;
        case 'MIT':
            value = `[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)\n`;
            break;
        case 'Mozilla Public License 2.0':
            value = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n`;
            break;
        case 'Open Software License 3.0':
            value = `[![License: OSL 3.0](https://img.shields.io/badge/License-OSL%203.2-orange.svg)](https://opensource.org/licenses/OSL-3.0)\n`;
            break;
        case 'PostgreSQL License':
            value = `[![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-yellow.svg)](https://opensource.org/licenses/PostgreSQL)\n`;
            break;
        case 'SIL Open Font License 1.1':
            value = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)\n`;
            break;
        case 'University of Illinois/NCSA Open Source License':
            value = `[![License: NCSA](https://img.shields.io/badge/License-NCSA-yellow.svg)](https://opensource.org/licenses/NCSA)\n`;
            break;
        case 'The Unlicense':
            value = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n`;
            break;
        case 'zLib License':
            value = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)\n`;
            break;
        default:
            value = '';
            console.error('The selected License Badge is unavailable');
            break;
    }
    return value;
}

// Exporting the function
module.exports = {
    createLicenseBadge
}

