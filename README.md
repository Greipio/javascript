<div align="center">
    <h1>Greip Javascript Library</h1>
    <p>The official JS library of Greip API</p>
    <br />
    <a href="https://github.com/gre-dev/Greip-JS/issues/new">Report Issue</a> · 
    <a href="https://github.com/gre-dev/Greip-JS/discussions/new">Request Feature</a> · 
    <a href="https://greip.io" target="_BLANK">Home Page</a> · 
    <a href="https://docs.greip.io/tools-and-libraries/js" target="_BLANK">API Docs</a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/greip.js" title="NPM Package" href="_BLANK"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></a>
    <a href="https://github.com/gre-dev/Greip-JS" title="Github Repo" href="_BLANK"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
    <a href="https://www.patreon.com/gredev" title="Patreon Profile - GRE Development Ltd." href="_BLANK"><img src="https://img.shields.io/badge/Patreon-ff424e?style=for-the-badge&logo=patreon&logoColor=white"></a>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" title="Javascript">
</div>
<br />

---
<br />

[![npm version](https://badge.fury.io/js/greip.js.svg)](https://badge.fury.io/js/greip.js)
&nbsp;&nbsp;
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gre-dev/Greip-JS?color=green&label=Minified%20size&logo=github)
&nbsp;&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
&nbsp;&nbsp;
![API Status](https://img.shields.io/website?down_color=orange&down_message=down&label=API%20status&up_color=green&up_message=up&url=https%3A%2F%2Fgregeoip.com)
<br /><br />

# Requirements
No requirements for using this package.
<br /><br />

# Installation
For Node.js, React.js & React Native:
```
npm i greip.js --save
```
or
```
yarn add greip.js
```
<br /><br />

# Usage
Let's say that we want to get the visitor IP Address. So we do the following:
<br /><br />

For Node.js, React.js & React Native:
```javascript
import { GeoIP }  from 'greip.js'; 

await GeoIP({
    key: 'your-api-key',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```

<br /><br />
# Options, Methods and More
You can find the full guide of this package by visiting our [Documentation Page](https://docs.greip.io/tools-and-libraries/js).

<br /><br />
# Credits
* [Greip Developers](https://greip.io)
* [All Contributors](https://github.com/gre-dev/Greip-JS/graphs/contributors)

<br /><br />
# License
The MIT License (MIT). Please see [License](https://github.com/gre-dev/Greip-JS/blob/main/LICENSE) File for more information.
