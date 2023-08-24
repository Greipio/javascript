"use strict";
exports.__esModule = true;
exports.IBANValidation = exports.PhoneValidation = exports.PaymentFraud = exports.EmailValidation = exports.ASN = exports.BadWord = exports.Country = exports.BulkLookup = exports.Lookup = exports.GeoIP = void 0;
var util_1 = require("./util");
var GeoIP = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var params = options.params || [];
        var format1 = options.format || 'JSON';
        var lang1 = options.lang || 'EN';
        var mode1 = options.mode || 'live';
        lang1 = lang1.toUpperCase();
        // Validate the params variable items
        params.forEach(function (perParam) {
            if (perParam.length > 0) {
                if (!util_1.availableGeoIPParams.includes(perParam)) {
                    reject(new Error('The "' +
                        perParam +
                        '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options'));
                }
            }
        });
        // Validate the format variable
        if (!util_1.availableFormats.includes(format1)) {
            reject(new Error('The `format` option value "' +
                format1 +
                '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options'));
        }
        // Validate the lang variable
        if (!util_1.availableLanguages.includes(lang1)) {
            reject(new Error('The `lang` option value "' +
                lang1 +
                '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/geoip-method#options'));
        }
        (0, util_1.makeHttpRquest)('GeoIP', {
            key: options.key,
            params: params.join(','),
            format: format1,
            lang: lang1,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.GeoIP = GeoIP;
var Lookup = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var ip1 = options.ip || '';
        var params = options.params || [];
        var format1 = options.format || 'JSON';
        var lang1 = options.lang || 'EN';
        var mode1 = options.mode || 'live';
        lang1 = lang1.toUpperCase();
        // Validate the ip variable
        if (ip1.length < 7) {
            reject(new Error('You should pass the `ip` parameter.'));
        }
        // Validate the params variable items
        params.forEach(function (perParam) {
            if (perParam.length > 0) {
                if (!util_1.availableGeoIPParams.includes(perParam)) {
                    reject(new Error('The "' +
                        perParam +
                        '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
                }
            }
        });
        // Validate the format variable
        if (!util_1.availableFormats.includes(format1)) {
            reject(new Error('The `format` option value "' +
                format1 +
                '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
        }
        // Validate the lang variable
        if (!util_1.availableLanguages.includes(lang1)) {
            reject(new Error('The `lang` option value "' +
                lang1 +
                '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
        }
        (0, util_1.makeHttpRquest)('IPLookup', {
            ip: ip1,
            key: options.key,
            params: params.join(','),
            format: format1,
            lang: lang1,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.Lookup = Lookup;
var BulkLookup = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var ips1 = options.ips || [];
        var params = options.params || [];
        var format1 = options.format || 'JSON';
        var lang1 = options.lang || 'EN';
        var mode1 = options.mode || 'live';
        lang1 = lang1.toUpperCase();
        if (typeof ips1 !== 'object')
            ips1 = [];
        // Validate the ip variable
        if (ips1.length < 1) {
            reject(new Error('You should pass the `ips` parameter.'));
        }
        ips1.forEach(function (perParam) {
            if (perParam.length < 7) {
                reject(new Error('You should pass a valid IP Addresses in the `ips` parameter.'));
            }
        });
        // Validate the params variable items
        params.forEach(function (perParam) {
            if (perParam.length > 0) {
                if (!util_1.availableGeoIPParams.includes(perParam)) {
                    reject(new Error('The "' +
                        perParam +
                        '" module you used is unknown.\nYou can use: `location`, `security`, `timezone`, `currency` and/or `device`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
                }
            }
        });
        // Validate the format variable
        if (!util_1.availableFormats.includes(format1)) {
            reject(new Error('The `format` option value "' +
                format1 +
                '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
        }
        // Validate the lang variable
        if (!util_1.availableLanguages.includes(lang1)) {
            reject(new Error('The `lang` option value "' +
                lang1 +
                '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://geoip-docs.gredev.io/sdks/js/lookup-method#options'));
        }
        (0, util_1.makeHttpRquest)('BulkLookup', {
            ips: ips1,
            key: options.key,
            params: params.join(','),
            format: format1,
            lang: lang1,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.BulkLookup = BulkLookup;
var Country = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var countryCode = options.countryCode || '';
        var params = options.params || [];
        var format1 = options.format || 'JSON';
        var lang1 = options.lang || 'EN';
        var mode1 = options.mode || 'live';
        countryCode = countryCode.toUpperCase();
        lang1 = lang1.toUpperCase();
        // Validate the countryCode variable
        if (countryCode.length !== 2) {
            reject(new Error('You should pass the `countryCode` parameter. Also, it should be a `ISO 3166-1 alpha-2` format.\nRead more at: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2'));
        }
        // Validate the params variable items
        params.forEach(function (perParam) {
            if (perParam.length > 0) {
                if (!util_1.availableCountryParams.includes(perParam)) {
                    reject(new Error('The "' +
                        perParam +
                        '" module you used is unknown.\nYou can use: `language`, `flag`, `currency` and/or `timezone`.\nRead more at: https://docs.greip.io/options/development-environment'));
                }
            }
        });
        // Validate the format variable
        if (!util_1.availableFormats.includes(format1)) {
            reject(new Error('The `format` option value "' +
                format1 +
                '" you specified is unknown.\nYou can use: `JSON`, `XML`, `CSV` or `Newline`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        // Validate the lang variable
        if (!util_1.availableLanguages.includes(lang1)) {
            reject(new Error('The `lang` option value "' +
                lang1 +
                '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        (0, util_1.makeHttpRquest)('Country', {
            CountryCode: countryCode,
            key: options.key,
            params: params.join(','),
            format: format1,
            lang: lang1,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.Country = Country;
var BadWord = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var text1 = options.text || '';
        var params = options.params || [];
        var format1 = options.format || 'JSON';
        var lang1 = options.lang || 'EN';
        var mode1 = options.mode || 'live';
        lang1 = lang1.toUpperCase();
        // Validate the text variable
        if (text1.length < 1) {
            reject(new Error('You should pass the `text` parameter.'));
        }
        // Validate the format variable
        if (!util_1.availableFormats.includes(format1)) {
            reject(new Error('The `format` option value "' +
                format1 +
                '" you specified is unknown.\nYou can use: `JSON`, `XML` or `CSV`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        // Validate the lang variable
        if (!util_1.availableLanguages.includes(lang1)) {
            reject(new Error('The `lang` option value "' +
                lang1 +
                '" you specified is unknown.\nYou can use: `EN`, `AR`, `DE`, `FR`, `ES`, `JA`, `ZH` or `RU`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        (0, util_1.makeHttpRquest)('badWords', {
            text: text1,
            key: options.key,
            params: params.join(','),
            format: format1,
            lang: lang1,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.BadWord = BadWord;
var ASN = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var asn1 = options.asn || '';
        var mode1 = options.mode || 'live';
        // Validate the text variable
        if (asn1.length < 1) {
            reject(new Error('You should pass the `asn` parameter.'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        (0, util_1.makeHttpRquest)('ASNLookup', {
            asn: asn1,
            key: options.key,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.ASN = ASN;
var EmailValidation = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var email1 = options.email || '';
        var mode1 = options.mode || 'live';
        // Validate the text variable
        if (email1.length < 1) {
            reject(new Error('You should pass the `email` parameter.'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        (0, util_1.makeHttpRquest)('validateEmail', {
            email: email1,
            key: options.key,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.EmailValidation = EmailValidation;
var PaymentFraud = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var data1 = options.data || [];
        var mode1 = options.mode || 'live';
        // Validate the text variable
        if (data1.length < 1) {
            reject(new Error('You should pass the `data` parameter.'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        (0, util_1.makePostRquest)('paymentFraud', {
            data: data1,
            key: options.key,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.PaymentFraud = PaymentFraud;
var PhoneValidation = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var phone1 = options.phone || '';
        var countryCode1 = options.countryCode || '';
        var mode1 = options.mode || 'live';
        // Validate the text variable
        if (phone1.length < 1 || countryCode1.length < 1) {
            reject(new Error('You should pass both `phone` and `countryCode` parameters.'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        (0, util_1.makeHttpRquest)('validatePhone', {
            phone: phone1,
            countryCode: countryCode1,
            key: options.key,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.PhoneValidation = PhoneValidation;
var IBANValidation = function (options) {
    if (typeof options !== 'object')
        options = {};
    if (!options.key || options.key.length < 1) {
        throw new Error('You should pass the API Key.');
    }
    return new Promise(function (resolve, reject) {
        var iban1 = options.iban || '';
        var mode1 = options.mode || 'live';
        // Validate the text variable
        if (iban1.length < 1) {
            reject(new Error('You should pass the `iban` parameter.'));
        }
        // Validate the mode variable
        if (mode1 !== 'live' && mode1 !== 'test') {
            reject(new Error('The `mode` option value "' +
                mode1 +
                '" you specified is unknown.\nYou can use: `live` or `test`.\nRead more at: https://docs.greip.io/options/development-environment'));
        }
        (0, util_1.makeHttpRquest)('validateIBAN', {
            iban: iban1,
            key: options.key,
            mode: mode1
        }, function (res) {
            if (typeof res !== 'object')
                res = JSON.parse(res);
            resolve(res);
        });
    });
};
exports.IBANValidation = IBANValidation;
