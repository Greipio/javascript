<div align="center">
    <h1>GRE GeoIP for JS & Node.js</h1>
    <p>The official JS library for GRE GeoIP API</p>
    <br />
    <a href="https://github.com/gre-dev/GeoIP-JS/issues/new">Report Issue</a> · 
    <a href="https://github.com/gre-dev/GeoIP-JS/discussions/new">Request Feature</a> · 
    <a href="https://www.gredev.io/en/GeoIP" target="_BLANK">API Home Page</a> · 
    <a href="https://geoip-docs.gredev.io/sdks/js" target="_BLANK">API Docs</a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/gre-geoip" title="NPM Package" href="_BLANK"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></a>
    <a href="https://github.com/gre-dev/GeoIP-JS" title="Github Repo" href="_BLANK"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" title="Javascript">
</div>
<br />

---
<br />

[![npm version](https://badge.fury.io/js/gre-geoip.svg)](https://badge.fury.io/js/gre-geoip)
&nbsp;&nbsp;
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gre-dev/GeoIP-JS?color=green&label=Minified%20size&logo=github)
&nbsp;&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
<br /><br />

# Requirements
No requirements for using this package.
<br /><br />

# Installation
For Node.js, React.js & React Native:
```
npm i gre-geoip --save
```
or
```
yarn add gre-geoip
```
<br />

For Browser:
```html
<script src="https://cdn.jsdelivr.net/gh/gre-dev/GeoIP-JS@latest/gre-geoip.min.js"></script>
```
<br /><br />

# Usage
Let's say that we want to get the visitor IP Address. So we do the following:
<br /><br />

For Node.js, React.js & React Native:
```javascript
const GREGeoIP = require('gre-geoip');
const GeoIP = new GREGeoIP('<API-Key>');

GeoIP.geoip().then(res => {
    console.log(res?.data?.ip);
});
```
<br />

For Browser:
```html
<script>
    const GeoIP = new GREGeoIP('<API-Key>');

    GeoIP.geoip().then(res => {
        console.log(res?.data?.ip);
    });
</script>
```

<br /><br />
# Options, Methods and More
You can find the full guide of this package by visiting our [Documentation Page](https://geoip-docs.gredev.io/sdks/js).

<br /><br />
# Credits
* [GRE Development Ltd.](https://www.gredev.io/en/)
* [All Contributors](https://github.com/gre-dev/GeoIP-JS/graphs/contributors)

<br /><br />
# License
The MIT License (MIT). Please see [License](https://github.com/gre-dev/GeoIP-JS/blob/main/LICENSE) File for more information.