import { GeoIP, Lookup, BulkLookup, BadWord, Country } from '../index';

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
    text: 'This is a fucking sample text.',
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
