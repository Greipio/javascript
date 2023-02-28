<div align="center">
    <h1>Greip Javascript Library</h1>
    <p>The official JS library of Greip API</p>
    <br />
    <a href="https://github.com/Greipio/Greip-JS/issues/new">Report Issue</a> · 
    <a href="https://github.com/Greipio/Greip-JS/discussions/new">Request Feature</a> · 
    <a href="https://greip.io" target="_BLANK">Home Page</a> · 
    <a href="https://docs.greip.io/tools-and-libraries/js" target="_BLANK">API Docs</a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/greip.js" title="NPM Package" href="_BLANK"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></a>
    <a href="https://github.com/Greipio/Greip-JS" title="Github Repo" href="_BLANK"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
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
Here's how you use the API Methods:
<br /><br />

## 1. IP Geolocation Method
```javascript
import { GeoIP }  from 'greip.js'; 

await GeoIP({
    key: 'your-api-key',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 2. IP Lookup Method
```javascript
import { Lookup }  from 'greip.js'; 

await Lookup({
    key: 'your-api-key',
    ip: '1.1.1.1',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 3. Bulk IP Lookup Method
```javascript
import { BulkLookup }  from 'greip.js'; 

await BulkLookup({
    key: 'your-api-key',
    ips: ['1.1.1.1', '2.2.2.2'],
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 4. ASN Lookup Method
```javascript
import { ASN }  from 'greip.js'; 

await ASN({
    key: 'your-api-key',
    asn: 'AS01',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 5. Profanity Detection Method
```javascript
import { BadWord }  from 'greip.js'; 

await BadWord({
    key: 'your-api-key',
    text: 'This is just normal sample text.',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 6. Country Lookup Method
```javascript
import { Country }  from 'greip.js'; 

await Country({
    key: 'your-api-key',
    countryCode: 'SA',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 7. Email Validation Method
```javascript
import { EmailValidation }  from 'greip.js'; 

await EmailValidation({
    key: 'your-api-key',
    email: 'name@domain.com',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 8. Phone Validation Method
```javascript
import { PhoneValidation }  from 'greip.js'; 

await PhoneValidation({
    key: 'your-api-key',
    phone: '123123123',
    countryCode: 'US',
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br />

## 9. Payment Fraud Prevention Method
```javascript
import { PaymentFraud }  from 'greip.js'; 

await PaymentFraud({
    key: 'your-api-key',
    data: {
      action: 'purchase',
      website_domain: '',
      website_name: '',
      merchant_id: 21,
      shipment_id: 1,
      transaction_id: 100,
      transaction_amount: 1000000,
      transaction_currency: 'GBP',
      cart_items: {
        item_id: 1,
        item_name: 'Product name',
        item_quantity: 1,
        item_price: '1100.55',
        item_category_id: 1,
      },
      isDigitalProducts: true,
      coupon: 'ASDF',
      customer_id: 1,
      customer_firstname: 'First',
      customer_lastname: 'Last',
      customer_pob: 'London',
      customer_ip: '1.1.1.1',
      customer_country: 'GB',
      customer_region: 'London',
      customer_city: 'London',
      customer_zip: 'NW10 7PQ',
      customer_street: '7 Coronation Road',
      customer_street2: '',
      customer_latitude: 0.123,
      customer_longitude: 0.123,
      customer_device_id: 'UNIQUE_DEVICE_ID',
      customer_phone: '000000000',
      customer_registration_date: 1677554670,
      customer_balance: '1000.00',
      customer_dob: '1997-19-05',
      customer_email: 'name@domain.com',
      customer_2fa: true,
      customer_useragent: 'Mozill almaden sdfwer',
      shipping_country: 'GB',
      shipping_region: 'London',
      shipping_city: 'London',
      shipping_zip: 'NW10 7PQ',
      shipping_street: '7 Coronation Road',
      shipping_street2: '',
      shipping_latitude: 0.123,
      shipping_longitude: 0.123,
      billing_country: 'GB',
      billing_region: 'London',
      billing_city: 'London',
      billing_zip: 'NW10 7PQ',
      billing_street: '7 Coronation Road',
      billing_street2: '',
      billing_latitude: 0.123,
      billing_longitude: 0.123,
      payment_type: 'applepay',
      card_name: 'First Last',
      card_number: '1234XXXXXXXX1234',
      card_expiry: '29/05',
      cvv_result: true,
    },
}).then((res: any) => {
    console.log(res.data); // Log Response
});
```
<br /><br />

# Options, Methods and More
You can find the full guide of this package by visiting our [Documentation Page](https://docs.greip.io/).

<br /><br />
# Credits
* [Greip Developers](https://greip.io)
* [All Contributors](https://github.com/Greipio/Greip-JS/graphs/contributors)

<br /><br />
# License
The MIT License (MIT). Please see [License](https://github.com/Greipio/Greip-JS/blob/main/LICENSE) File for more information.
