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

You can install the Greip JavaScript package using npm, yarn, or via CDN.

### Using npm

```bash
npm install greip.js --save
```

### Using yarn

```bash
yarn add greip.js
```

### CDN Integration

Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/Greipio/javascript/greip.bundle.js" type="text/javascript"></script>
```

> **Note:** For Node.js environments, please use our [Node.js library](https://github.com/Greipio/node).

---

## Getting Started

### Importing Greip Methods

#### For React.js, React Native, etc.

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

#### For CDN Integration

The `Greip` object is available globally. You can use its methods directly:

```javascript
Greip.GeoIP({
  key: 'your-api-key',
  // other options
}).then((response) => {
  console.log(response);
});
```

---

## Usage Examples

Below are examples for each available method. All methods return Promises.

### 1. IP Geolocation

**Options:**

| Option | Type     | Required | Description                                                       |
| ------ | -------- | -------- | ----------------------------------------------------------------- |
| key    | string   | Yes      | Your API key                                                      |
| params | string[] | No       | Modules: `location`, `security`, `timezone`, `currency`, `device` |
| format | string   | No       | Response format: `JSON`, `XML`, `CSV`, `Newline`                  |
| lang   | string   | No       | Language: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH`, `RU`          |
| mode   | string   | No       | `live` (default) or `test`                                        |

```javascript
await GeoIP({ key: 'your-api-key' })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 2. IP Threats

**Options:**

| Option | Type   | Required | Description                                      |
| ------ | ------ | -------- | ------------------------------------------------ |
| key    | string | Yes      | Your API key                                     |
| ip     | string | Yes      | IP address to check                              |
| format | string | No       | Response format: `JSON`, `XML`, `CSV`, `Newline` |
| mode   | string | No       | `live` (default) or `test`                       |

```javascript
await Threats({ key: 'your-api-key', ip: '1.1.1.1' })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 3. IP Lookup

**Options:**

| Option | Type     | Required | Description                                                       |
| ------ | -------- | -------- | ----------------------------------------------------------------- |
| key    | string   | Yes      | Your API key                                                      |
| ip     | string   | Yes      | IP address to lookup                                              |
| params | string[] | No       | Modules: `location`, `security`, `timezone`, `currency`, `device` |
| format | string   | No       | Response format: `JSON`, `XML`, `CSV`, `Newline`                  |
| lang   | string   | No       | Language: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH`, `RU`          |
| mode   | string   | No       | `live` (default) or `test`                                        |

```javascript
await Lookup({ key: 'your-api-key', ip: '1.1.1.1' })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 4. Bulk IP Lookup

**Options:**

| Option | Type     | Required | Description                                                       |
| ------ | -------- | -------- | ----------------------------------------------------------------- |
| key    | string   | Yes      | Your API key                                                      |
| ips    | string[] | Yes      | Array of IP addresses                                             |
| params | string[] | No       | Modules: `location`, `security`, `timezone`, `currency`, `device` |
| format | string   | No       | Response format: `JSON`, `XML`, `CSV`, `Newline`                  |
| lang   | string   | No       | Language: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH`, `RU`          |
| mode   | string   | No       | `live` (default) or `test`                                        |

```javascript
await BulkLookup({ key: 'your-api-key', ips: ['1.1.1.1', '2.2.2.2'] })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 5. ASN Lookup

**Options:**

| Option | Type   | Required | Description                |
| ------ | ------ | -------- | -------------------------- |
| key    | string | Yes      | Your API key               |
| asn    | string | Yes      | ASN to lookup              |
| mode   | string | No       | `live` (default) or `test` |

```javascript
await ASN({ key: 'your-api-key', asn: 'AS01' })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 6. Profanity Detection

**Options:**

| Option | Type     | Required | Description                                              |
| ------ | -------- | -------- | -------------------------------------------------------- |
| key    | string   | Yes      | Your API key                                             |
| text   | string   | Yes      | Text to check                                            |
| params | string[] | No       | Additional params (see docs)                             |
| format | string   | No       | Response format: `JSON`, `XML`, `CSV`                    |
| lang   | string   | No       | Language: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH`, `RU` |
| mode   | string   | No       | `live` (default) or `test`                               |

```javascript
await BadWord({ key: 'your-api-key', text: 'Sample text.' })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 7. Country Lookup

**Options:**

| Option      | Type     | Required | Description                                              |
| ----------- | -------- | -------- | -------------------------------------------------------- |
| key         | string   | Yes      | Your API key                                             |
| countryCode | string   | Yes      | ISO 3166-1 alpha-2 country code                          |
| params      | string[] | No       | Modules: `language`, `flag`, `currency`, `timezone`      |
| format      | string   | No       | Response format: `JSON`, `XML`, `CSV`, `Newline`         |
| lang        | string   | No       | Language: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH`, `RU` |
| mode        | string   | No       | `live` (default) or `test`                               |

```javascript
await Country({ key: 'your-api-key', countryCode: 'SA' })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 8. Email Validation

**Options:**

| Option | Type   | Required | Description                |
| ------ | ------ | -------- | -------------------------- |
| key    | string | Yes      | Your API key               |
| email  | string | Yes      | Email to validate          |
| mode   | string | No       | `live` (default) or `test` |

```javascript
await EmailValidation({ key: 'your-api-key', email: 'name@domain.com' })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 9. Phone Validation

**Options:**

| Option      | Type   | Required | Description                |
| ----------- | ------ | -------- | -------------------------- |
| key         | string | Yes      | Your API key               |
| phone       | string | Yes      | Phone number               |
| countryCode | string | Yes      | Country code (ISO)         |
| mode        | string | No       | `live` (default) or `test` |

```javascript
await PhoneValidation({
  key: 'your-api-key',
  phone: '123123123',
  countryCode: 'US',
})
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 10. Payment Fraud Prevention

**Options:**

| Option | Type   | Required | Description                                                                                                       |
| ------ | ------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| key    | string | Yes      | Your API key                                                                                                      |
| data   | object | Yes      | Transaction data ([see all fields](https://docs.greip.io/api-reference/endpoint/scoring/payment#body-parameters)) |
| mode   | string | No       | `live` (default) or `test`                                                                                        |

```javascript
await PaymentFraud({
  key: 'your-api-key',
  data: {
    // ...transaction and customer details...
  },
})
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

### 11. IBAN Validation

**Options:**

| Option | Type   | Required | Description                |
| ------ | ------ | -------- | -------------------------- |
| key    | string | Yes      | Your API key               |
| iban   | string | Yes      | IBAN to validate           |
| mode   | string | No       | `live` (default) or `test` |

```javascript
await IBANValidation({ key: 'your-api-key', iban: 'BY86AKBB10100000002966000000' })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
```

---

## Documentation

For detailed documentation, options, and advanced usage, please visit our [official documentation](https://docs.greip.io/).

---

## Credits

- [Greip Developers](https://greip.io)
- [All Contributors](https://github.com/Greipio/javascript/graphs/contributors)

---

## Repository Activity

![Alt](https://repobeats.axiom.co/api/embed/db51cf11f87d8fdca78afb81e7711761affa247f.svg 'Repobeats analytics image')
