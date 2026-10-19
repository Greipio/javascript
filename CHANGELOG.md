# Changelog

## 3.0.0 — 2026-03-19

### Breaking

- **Greip API v2** base URL and routes (`https://v2.greipapi.com`).
- **Bearer** authorization; removed legacy `key` in request payloads where applicable.
- Unwraps v2 `success` / `data` responses for callers.
- Updated paths for lookup, scoring, country, ASN, IBAN, email, phone, profanity (POST), and payment fraud (POST).
- Consumers must use v2 property names (`ip.address`, `number` for ASN, `is_valid`, `risk_level`, etc.).

### Changed

- Tests require `GREIP_TOKEN` and assert v2 shapes.
