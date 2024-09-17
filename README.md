# Greip Javascript Package

The official Javascript package of Greip API

[Report Issue](https://github.com/Greipio/javascript/issues/new)
·
[Request Feature](https://github.com/Greipio/javascript/discussions/new)
·
[Greip Website](https://greip.io/)
·
[Documentation](https://docs.greip.io/)

[![NPM Package of Greip](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/greip.js)
[![Github Repository](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Greipio/javascript)
[![jsDelivery CDN Link](https://img.shields.io/badge/jsDelivr-E84D3D?style=for-the-badge&logo=jsDelivr&logoColor=white)](https://cdn.jsdelivr.net/gh/Greipio/javascript/greip.bundle.js)

[![npm version](https://badge.fury.io/js/greip.js.svg)](https://badge.fury.io/js/greip.js)
&nbsp;&nbsp;
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Greipio/javascript?color=green&label=Minified%20size&logo=github)
&nbsp;&nbsp;
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/apache-2-0)
&nbsp;&nbsp;
![API Status](https://img.shields.io/website?down_color=orange&down_message=down&label=API%20status&up_color=green&up_message=up&url=https%3A%2F%2Fgreipapi.com)

---

## Installation

### 1. For React.js, React Native, etc:

```
npm i greip.js --save
```

or

```
yarn add greip.js
```

### 2. For CDN Integration

```html
<script src="https://cdn.jsdelivr.net/gh/Greipio/javascript/greip.bundle.js" type="text/javascript"></script>
```

### 3. For Node.js

Please use our [Node.js library](https://github.com/Greipio/node) instead.

## Initializing the Greip object

There're two different ways to initialize the Greip object, let's dive into this:

### 1. For React.js, React Native, etc:

```javascript
import {
  Lookup,
  Threats,
  GeoIP,
  BulkLookup,
  ASN,
  BadWord,
  Country,
  EmailValidation,
  PhoneValidation,
  PaymentFraud,
  IBANValidation,
} from 'greip.js';
```

### 2. CDN Integration

In CDN integration, you already have `Greip` as a global variable initialized automatically when the page loads.

You can start using it directly as follows:

```javascript
Greip.GeoIP({
  key: 'your-api-key',
  // other options here
}).then((response) => {
  console.log(response);
});
```

## Usage

Here's how you use the API Methods:

### 1. IP Geolocation Method

Use this method to retrieve the IP address of the visitor/user with its full information.

```javascript
await GeoIP({
  key: 'your-api-key',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 2. IP Threats Method

Use this method to retrieve threat intelligence information associated with a given IP address.

```javascript
await Threats({
  key: 'your-api-key',
  ip: '1.1.1.1',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 3. IP Lookup Method

Use this method to retrieve the information of a given IP address.

```javascript
await Lookup({
  key: 'your-api-key',
  ip: '1.1.1.1',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 4. Bulk IP Lookup Method

You can use this method to retrieve the information of multiple IP addresses (no need to use the `Lookup` method inside a loop).

```javascript
await BulkLookup({
  key: 'your-api-key',
  ips: ['1.1.1.1', '2.2.2.2'],
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 5. ASN Lookup Method

In this method, Greip will help you lookup any given AS Number and returning all data related to it, like: name, org (the organization name), country, domain, email, phone, totalIPs, list of all routes (v4 & v6) related the given AS Number, etc.

```javascript
await ASN({
  key: 'your-api-key',
  asn: 'AS01',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 6. Profanity Detection Method

This method can be used to detect abuse of your website/app. It’s a great way to know more about your user inputs and whether they contain profanity (bad words) or not before releasing them to the public.

```javascript
await BadWord({
  key: 'your-api-key',
  text: 'This is just normal sample text.',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 7. Country Lookup Method

This method can help you retrieve information of the given country.

```javascript
await Country({
  key: 'your-api-key',
  countryCode: 'SA',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 8. Email Validation Method

This method provides an additional layer of validation for your system. While validating email syntax is important, it is not sufficient.

This method goes beyond syntax validation by checking the domain’s validity, the availability of the Mail Service, detecting Disposable Email (Temporary Emails), etc. By utilising this method, you can ensure a more thorough validation process for email addresses.

```javascript
await EmailValidation({
  key: 'your-api-key',
  email: 'name@domain.com',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 9. Phone Validation Method

This method can be used as an extra-layer of your system for validating phone numbers. It validates phone number syntax and valid-possibility.

```javascript
await PhoneValidation({
  key: 'your-api-key',
  phone: '123123123',
  countryCode: 'US',
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 10. Payment Fraud Prevention Method

Prevent financial losses by deploying AI-Powered modules.

```javascript
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
})
  .then((res: any) => {
    console.log(res.data); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

### 11. IBAN Validation Method

This method allows you to validate International Bank Account Numbers (IBANs) and retrieve additional information about the country associated with the IBAN.

```javascript
await IBANValidation({
  key: 'your-api-key',
  iban: 'BY86AKBB10100000002966000000',
})
  .then((res: any) => {
    console.log(res); // Log Response
  })
  .catch((error: any) => {
    console.log(error);
  });
```

## Options, Methods and More

You can find the full guide of this package by visiting our [documentation page](https://docs.greip.io/).

## Credits

- [Greip Developers](https://greip.io)
- [All Contributors](https://github.com/Greipio/javascript/graphs/contributors)

## Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/db51cf11f87d8fdca78afb81e7711761affa247f.svg "Repobeats analytics image")
