import { BulkLookup } from './index.js';

const res = await BulkLookup({
    key: '0540759999851b6b25e98cbfae03c94e',
    ips: ['1.1.1.1', '2.2.2.2'],
})

console.log(res);