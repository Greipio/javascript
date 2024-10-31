import {
  availableGeoIPParams,
  availableLanguages,
  availableFormats,
  availableCountryParams,
  makeHttpRquest,
  makePostRquest,
  getGFP,
} from './util';
import { Options } from './types';

export const GeoIP = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const params = options.params || [];
    const format1 = options.format || 'JSON';
    let lang1 = options.lang || 'EN';
    const mode1 = options.mode || 'live';
    lang1 = lang1.toUpperCase();

    //? Fingerprint data
    const gfp_data = getGFP();

    // Validate the params variable items
    params.forEach((perParam) => {
      if (perParam.length > 0) {
        if (!availableGeoIPParams.includes(perParam)) {
          reject(
            new Error(
              'The "' +
                perParam +
                '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/geoip',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format1)) {
      reject(
        new Error(
          'The `format` option value "' +
            format1 +
            '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/geoip',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang1)) {
      reject(
        new Error(
          'The `lang` option value "' +
            lang1 +
            '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/geoip',
        ),
      );
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/geoip',
        ),
      );
    }
    makeHttpRquest(
      '/geoip',
      {
        key: options.key,
        params: params.join(','),
        format: format1,
        lang: lang1,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
      {
        gfp: gfp_data,
      },
    );
  });
};

export const Lookup = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const ip1 = options.ip || '';
    const params = options.params || [];
    const format1 = options.format || 'JSON';
    let lang1 = options.lang || 'EN';
    const mode1 = options.mode || 'live';
    lang1 = lang1.toUpperCase();

    // Validate the ip variable
    if (ip1.length < 7) {
      reject(new Error('You should pass the `ip` parameter.'));
    }

    // Validate the params variable items
    params.forEach((perParam) => {
      if (perParam.length > 0) {
        if (!availableGeoIPParams.includes(perParam)) {
          reject(
            new Error(
              'The "' +
                perParam +
                '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format1)) {
      reject(
        new Error(
          'The `format` option value "' +
            format1 +
            '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang1)) {
      reject(
        new Error(
          'The `lang` option value "' +
            lang1 +
            '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }
    makeHttpRquest(
      '/lookup/ip',
      {
        ip: ip1,
        key: options.key,
        params: params.join(','),
        format: format1,
        lang: lang1,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const Threats = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const ip1 = options.ip || '';
    const format1 = options.format || 'JSON';
    const mode1 = options.mode || 'live';

    // Validate the ip variable
    if (ip1.length < 7) {
      reject(new Error('You should pass the `ip` parameter.'));
    }

    // Validate the format variable
    if (!availableFormats.includes(format1)) {
      reject(
        new Error(
          'The `format` option value "' +
            format1 +
            '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }
    makeHttpRquest(
      '/lookup/ip/threats',
      {
        ip: ip1,
        key: options.key,
        format: format1,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const BulkLookup = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    let ips1 = options.ips || [];
    const params = options.params || [];
    const format1 = options.format || 'JSON';
    let lang1 = options.lang || 'EN';
    const mode1 = options.mode || 'live';
    lang1 = lang1.toUpperCase();

    if (typeof ips1 !== 'object') ips1 = [];

    // Validate the ip variable
    if (ips1.length < 1) {
      reject(new Error('You should pass the `ips` parameter.'));
    }
    ips1.forEach((perParam) => {
      if (perParam.length < 7) {
        reject(new Error('You should pass a valid IP Addresses in the `ips` parameter.'));
      }
    });

    // Validate the params variable items
    params.forEach((perParam) => {
      if (perParam.length > 0) {
        if (!availableGeoIPParams.includes(perParam)) {
          reject(
            new Error(
              'The "' +
                perParam +
                '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format1)) {
      reject(
        new Error(
          'The `format` option value "' +
            format1 +
            '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang1)) {
      reject(
        new Error(
          'The `lang` option value "' +
            lang1 +
            '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/ip-lookup',
        ),
      );
    }
    makeHttpRquest(
      '/lookup/ip/bulk',
      {
        ips: ips1,
        key: options.key,
        params: params.join(','),
        format: format1,
        lang: lang1,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const Country = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    let countryCode = options.countryCode || '';
    const params = options.params || [];
    const format1 = options.format || 'JSON';
    let lang1 = options.lang || 'EN';
    const mode1 = options.mode || 'live';

    countryCode = countryCode.toUpperCase();
    lang1 = lang1.toUpperCase();

    // Validate the countryCode variable
    if (countryCode.length !== 2) {
      reject(
        new Error(
          'You should pass the `countryCode` parameter. Also, it should be a `ISO 3166-1 alpha-2` format.\nRead more at: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2',
        ),
      );
    }

    // Validate the params variable items
    params.forEach((perParam) => {
      if (perParam.length > 0) {
        if (!availableCountryParams.includes(perParam)) {
          reject(
            new Error(
              'The "' +
                perParam +
                '" module you used is unknown.\nYou can use: `language`, `flag`, `currency` and/or `timezone`.\nRead more at: https://docs.greip.io/api-reference/endpoint/other-services/country-data',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format1)) {
      reject(
        new Error(
          'The `format` option value "' +
            format1 +
            '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://docs.greip.io/api-reference/endpoint/other-services/country-data',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang1)) {
      reject(
        new Error(
          'The `lang` option value "' +
            lang1 +
            '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/api-reference/endpoint/other-services/country-data',
        ),
      );
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/other-services/country-data',
        ),
      );
    }
    makeHttpRquest(
      '/lookup/country',
      {
        CountryCode: countryCode,
        key: options.key,
        params: params.join(','),
        format: format1,
        lang: lang1,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const BadWord = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const text1 = options.text || '';
    const params = options.params || [];
    const format1 = options.format || 'JSON';
    let lang1 = options.lang || 'EN';
    const mode1 = options.mode || 'live';

    lang1 = lang1.toUpperCase();

    // Validate the text variable
    if (text1.length < 1) {
      reject(new Error('You should pass the `text` parameter.'));
    }

    // Validate the format variable
    if (!availableFormats.includes(format1)) {
      reject(
        new Error(
          'The `format` option value "' +
            format1 +
            '" you specified is unknown.\nYou can use: `JSON`, `XML` or `CSV`.\nRead more at: https://docs.greip.io/api-reference/endpoint/other-services/profanity-detection',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang1)) {
      reject(
        new Error(
          'The `lang` option value "' +
            lang1 +
            '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/api-reference/endpoint/other-services/profanity-detection',
        ),
      );
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/other-services/profanity-detection',
        ),
      );
    }
    makeHttpRquest(
      '/scoring/profanity',
      {
        text: text1,
        key: options.key,
        params: params.join(','),
        format: format1,
        lang: lang1,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const ASN = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const asn1 = options.asn || '';
    const mode1 = options.mode || 'live';

    // Validate the text variable
    if (asn1.length < 1) {
      reject(new Error('You should pass the `asn` parameter.'));
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/ip-geolocation/asn-lookup',
        ),
      );
    }
    makeHttpRquest(
      '/lookup/asn',
      {
        asn: asn1,
        key: options.key,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const EmailValidation = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const email1 = options.email || '';
    const mode1 = options.mode || 'live';

    // Validate the text variable
    if (email1.length < 1) {
      reject(new Error('You should pass the `email` parameter.'));
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/data-validation/email-lookup',
        ),
      );
    }
    makeHttpRquest(
      '/scoring/email',
      {
        email: email1,
        key: options.key,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const PaymentFraud = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const data1 = options.data || [];
    const mode1 = options.mode || 'live';

    // Validate the text variable
    if (typeof data1 !== 'object' || Array.isArray(data1)) {
      reject(new Error('You should pass the `data` parameter.'));
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/payment-fraud/payment-fraud-prevention',
        ),
      );
    }
    makePostRquest(
      'paymentFraud',
      {
        data: data1,
        key: options.key,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const PhoneValidation = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const phone1 = options.phone || '';
    const countryCode1 = options.countryCode || '';
    const mode1 = options.mode || 'live';

    // Validate the text variable
    if (phone1.length < 1 || countryCode1.length < 1) {
      reject(new Error('You should pass both `phone` and `countryCode` parameters.'));
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/data-validation/phone-lookup',
        ),
      );
    }
    makeHttpRquest(
      '/scoring/payment',
      {
        phone: phone1,
        countryCode: countryCode1,
        key: options.key,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};

export const IBANValidation = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const iban1 = options.iban || '';
    const mode1 = options.mode || 'live';

    // Validate the text variable
    if (iban1.length < 1) {
      reject(new Error('You should pass the `iban` parameter.'));
    }

    // Validate the mode variable
    if (mode1 !== 'live' && mode1 !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
            mode1 +
            '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/api-reference/endpoint/payment-fraud/iban-validation',
        ),
      );
    }
    makeHttpRquest(
      '/lookup/iban',
      {
        iban: iban1,
        key: options.key,
        mode: mode1,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};
