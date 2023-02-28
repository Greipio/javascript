import { GeoIP, Lookup, BulkLookup, BadWord, Country, ASN, EmailValidation, PhoneValidation, PaymentFraud } from '../index';

test('GeoIP Method Test', async () => {
  await GeoIP({
    key: '0540759999851b6b25e98cbfae03c94e',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('Lookup Method Test', async () => {
  await Lookup({
    key: '0540759999851b6b25e98cbfae03c94e',
    ip: '1.1.1.1',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('BulkLookup Method Test', async () => {
  await BulkLookup({
    key: '0540759999851b6b25e98cbfae03c94e',
    ips: ['1.1.1.1', '2.2.2.2'],
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('BadWord Method Test', async () => {
  await BadWord({
    key: '0540759999851b6b25e98cbfae03c94e',
    text: 'This is just normal sample text.',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('Country Method Test', async () => {
  await Country({
    key: '0540759999851b6b25e98cbfae03c94e',
    countryCode: 'SA',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('ASN Lookup Method Test', async () => {
  await ASN({
    key: '0540759999851b6b25e98cbfae03c94e',
    asn: 'AS01',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('Email Validation Method Test', async () => {
  await EmailValidation({
    key: '0540759999851b6b25e98cbfae03c94e',
    email: 'asdfasd@sdfsd.com',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('Phone Validation Method Test', async () => {
  await PhoneValidation({
    key: '0540759999851b6b25e98cbfae03c94e',
    phone: '123412341234',
    countryCode: 'US',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});

test('Payment Fraud Method Test', async () => {
  await PaymentFraud({
    key: '0540759999851b6b25e98cbfae03c94e',
    data: {
      'action': 'purchase',
      'website_domain': '',
      'website_name': '',
      'merchant_id': 21,
      'shipment_id': 1,
      'transaction_id': 100,
      'transaction_amount': 1000000,
      'transaction_currency': 'GBP',
      'cart_items': {
        'item_id': 1,
        'item_name': 'Product name',
        'item_quantity': 1,
        'item_price': '1100.55',
        'item_category_id': 1,
      },
      'isDigitalProducts': true,
      'coupon': 'ASDF',
      'customer_id': 1,
      'customer_firstname': 'First',
      'customer_lastname': 'Last',
      'customer_pob': 'London',
      'customer_ip': '1.1.1.1',
      'customer_country': 'GB',
      'customer_region': 'London',
      'customer_city': 'London',
      'customer_zip': 'NW10 7PQ',
      'customer_street': '7 Coronation Road',
      'customer_street2': '',
      'customer_latitude': 0.123,
      'customer_longitude': 0.123,
      'customer_device_id': 'UNIQUE_DEVICE_ID',
      'customer_phone': '000000000',
      'customer_registration_date': 1677554670,
      'customer_balance': '1000.00',
      'customer_dob': '1997-19-05',
      'customer_email': 'name@domain.com',
      'customer_2fa': true,
      'customer_useragent': 'Mozill almaden sdfwer',
      'shipping_country': 'GB',
      'shipping_region': 'London',
      'shipping_city': 'London',
      'shipping_zip': 'NW10 7PQ',
      'shipping_street': '7 Coronation Road',
      'shipping_street2': '',
      'shipping_latitude': 0.123,
      'shipping_longitude': 0.123,
      'billing_country': 'GB',
      'billing_region': 'London',
      'billing_city': 'London',
      'billing_zip': 'NW10 7PQ',
      'billing_street': '7 Coronation Road',
      'billing_street2': '',
      'billing_latitude': 0.123,
      'billing_longitude': 0.123,
      'payment_type': 'applepay',
      'card_name': 'First Last',
      'card_number': '1234XXXXXXXX1234',
      'card_expiry': '29/05',
      'cvv_result': true,
    },
    countryCode: 'US',
  }).then((res: any) => {
    expect(res.status).toEqual('success');
  });
});