import {
  availableGeoIPParams,
  availableLanguages,
  availableFormats,
  availableCountryParams,
  makeHttpRquest,
  makePostRquest,
} from './util';
import { Options } from './types';

export const GeoIP = (options: Options) => {
  if (typeof options !== 'object') options = {};

  if (!options.key || options.key.length < 1) {
    throw new Error('You should pass the API Key.');
  }

  return new Promise((resolve, reject) => {
    const params = options.params || [];
    const format = options.format || 'JSON';
    let lang = options.lang || 'EN';
    const mode = options.mode || 'live';
    lang = lang.toUpperCase();

    // Validate the params variable items
    params.forEach((perParam) => {
      if (perParam.length > 0) {
        if (!availableGeoIPParams.includes(perParam)) {
          reject(
            new Error(
              'The "' +
              perParam +
              '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format)) {
      reject(
        new Error(
          'The `format` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang)) {
      reject(
        new Error(
          'The `lang` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options',
        ),
      );
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options',
        ),
      );
    }
    makeHttpRquest(
      'GeoIP',
      {
        'key': options.key,
        'params': params.join(','),
        'format': format,
        'lang': lang,
        'mode': mode,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
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
    const ip = options.ip || '';
    const params = options.params || [];
    const format = options.format || 'JSON';
    let lang = options.lang || 'EN';
    const mode = options.mode || 'live';
    lang = lang.toUpperCase();

    // Validate the ip variable
    if (ip.length < 7) {
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
              '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format)) {
      reject(
        new Error(
          'The `format` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang)) {
      reject(
        new Error(
          'The `lang` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
        ),
      );
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
        ),
      );
    }
    makeHttpRquest(
      'IPLookup',
      {
        'ip': ip,
        'key': options.key,
        'params': params.join(','),
        'format': format,
        'lang': lang,
        'mode': mode,
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
    let ips = options.ips || [];
    const params = options.params || [];
    const format = options.format || 'JSON';
    let lang = options.lang || 'EN';
    const mode = options.mode || 'live';
    lang = lang.toUpperCase();

    if (typeof ips !== 'object') ips = [];

    // Validate the ip variable
    if (ips.length < 1) {
      reject(new Error('You should pass the `ips` parameter.'));
    }
    ips.forEach((perParam) => {
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
              '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format)) {
      reject(
        new Error(
          'The `format` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang)) {
      reject(
        new Error(
          'The `lang` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
        ),
      );
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options',
        ),
      );
    }
    makeHttpRquest(
      'BulkLookup',
      {
        'ips': ips,
        'key': options.key,
        'params': params.join(','),
        'format': format,
        'lang': lang,
        'mode': mode,
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
    const format = options.format || 'JSON';
    let lang = options.lang || 'EN';
    const mode = options.mode || 'live';

    countryCode = countryCode.toUpperCase();
    lang = lang.toUpperCase();

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
              '" module you used is unknown.\nYou can use: `language`, `flag`, `currency` and/or `timezone`.\nRead more at: https://docs.greip.io/options/development-environment',
            ),
          );
        }
      }
    });

    // Validate the format variable
    if (!availableFormats.includes(format)) {
      reject(
        new Error(
          'The `format` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang)) {
      reject(
        new Error(
          'The `lang` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }
    makeHttpRquest(
      'Country',
      {
        'CountryCode': countryCode,
        'key': options.key,
        'params': params.join(','),
        'format': format,
        'lang': lang,
        'mode': mode,
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
    const text = options.text || '';
    const params = options.params || [];
    const format = options.format || 'JSON';
    let lang = options.lang || 'EN';
    const mode = options.mode || 'live';

    lang = lang.toUpperCase();

    // Validate the text variable
    if (text.length < 1) {
      reject(new Error('You should pass the `text` parameter.'));
    }

    // Validate the format variable
    if (!availableFormats.includes(format)) {
      reject(
        new Error(
          'The `format` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `JSON`, `XML` or `CSV`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }

    // Validate the lang variable
    if (!availableLanguages.includes(lang)) {
      reject(
        new Error(
          'The `lang` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          lang +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }
    makeHttpRquest(
      'badWords',
      {
        'text': text,
        'key': options.key,
        'params': params.join(','),
        'format': format,
        'lang': lang,
        'mode': mode,
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
    const asn = options.asn || '';
    const mode = options.mode || 'live';

    // Validate the text variable
    if (asn.length < 1) {
      reject(new Error('You should pass the `asn` parameter.'));
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          mode +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }
    makeHttpRquest(
      'ASNLookup',
      {
        'asn': asn,
        'key': options.key,
        'mode': mode,
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
    const email = options.email || '';
    const mode = options.mode || 'live';

    // Validate the text variable
    if (email.length < 1) {
      reject(new Error('You should pass the `email` parameter.'));
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          mode +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }
    makeHttpRquest(
      'validateEmail',
      {
        'email': email,
        'key': options.key,
        'mode': mode,
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
    const data = options.data || [];
    const mode = options.mode || 'live';

    // Validate the text variable
    if (data.length < 1) {
      reject(new Error('You should pass the `data` parameter.'));
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          mode +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }
    makePostRquest(
      'paymentFraud',
      {
        'data': data,
        'key': options.key,
        'mode': mode,
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
    const phone = options.phone || '';
    const countryCode = options.countryCode || '';
    const mode = options.mode || 'live';

    // Validate the text variable
    if (phone.length < 1 || countryCode.length < 1) {
      reject(new Error('You should pass both `phone` and `countryCode` parameters.'));
    }

    // Validate the mode variable
    if (mode !== 'live' && mode !== 'test') {
      reject(
        new Error(
          'The `mode` option value "' +
          mode +
          '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment',
        ),
      );
    }
    makeHttpRquest(
      'validatePhone',
      {
        'phone': phone,
        'countryCode': countryCode,
        'key': options.key,
        'mode': mode,
      },
      (res: object) => {
        if (typeof res !== 'object') res = JSON.parse(res);
        resolve(res);
      },
    );
  });
};
