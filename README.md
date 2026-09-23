<<<<<<< HEAD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
=======
# Learn NestJS — Request Handling & Validation

This project is a classroom starter for **NestJS fundamentals**. The goal is not to ship a full product. Students practice how an HTTP API receives data, validates it, and returns a predictable response.

## Learning goals

By finishing the case studies below, a student should be able to:

- Handle incoming data from **route params**, **query string**, and **request body**
- Decide which source to use (or combine) for a given endpoint
- Validate and transform input with **`class-validator`** and **`class-transformer`**
- Return a consistent success and error response shape
>>>>>>> upstream/main

## Project setup

```bash
<<<<<<< HEAD
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

This project is already instrumented. Create a free account at [observe.nestjs.com](https://observe.nestjs.com), add an application, and paste the generated app key and secret into the `ObserveModule.forRoot()` call in `src/app.module.ts`.

The free plan needs no payment details and covers 300,000 events a month. You can also browse the [live demo](https://www.observe-demo.nestjs.com/dashboard) first - the whole dashboard over a busy service's data, with nothing to install.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observe](https://observe.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
=======
npm install
npm install class-validator class-transformer
```

## Compile and run

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

The app listens on `http://localhost:3000` by default.

## Required setup before the cases

Enable a global `ValidationPipe` in `src/main.ts` so every DTO is validated and transformed:

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  }),
);
```

| Option | Why it matters |
| --- | --- |
| `whitelist` | Strip properties that are not declared on the DTO |
| `forbidNonWhitelisted` | Reject unexpected fields instead of silently ignoring them |
| `transform` | Turn plain JSON / query strings into class instances |
| `enableImplicitConversion` | Convert `"12"` from params/query into a number when the DTO field is typed as `number` |

Create one DTO class per request source when a case uses more than one source (`ParamsDto`, `QueryDto`, `BodyDto`). Do not mix params, query, and body into a single class.

## When to use params, query, or body

| Source | Decorator | Use it for | Do not use it for |
| --- | --- | --- | --- |
| **Params** | `@Param()` | A required value that belongs in the URL (`/convert/length/1500`, `/parking/3`) | Optional filters or a long list of fields |
| **Query** | `@Query()` | Optional settings and flags (`?rate=11&inclusive=false`) | A large payload such as a list of items |
| **Body** | `@Body()` | Data the client submits, especially objects and arrays (`scores`, `items`) | A single identifier that already fits the URL |

Quick rule: **params identify the main value**, **query adjusts the calculation**, **body carries the payload**.

## Standard response shapes

Every case study must follow these envelopes so the classroom APIs stay consistent.

### Success

```json
{
  "success": true,
  "message": "Short description of what happened",
  "data": {}
}
```

- `data` is the calculated result (never a raw number or a bare array)
- If the result has several rows, put them in `data.items`
- Always wrap the answer with `success`, `message`, and `data`

### Validation error (`400 Bad Request`)

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "amount",
      "message": "amount must be a positive number"
    }
  ]
}
```

### Not found / unsupported value (`404`)

Use this when a named option is not supported (city, unit, coupon, vehicle type).

```json
{
  "success": false,
  "message": "City 'atlantis' is not supported",
  "errors": []
}
```

You may keep Nest's default exception format while learning, but the case studies expect the shapes above in the final answer.

---

## Case studies

Each case is an **independent daily-life problem**. They do not share data or modules. Implement them as separate endpoints. No database is required; calculate the result from the request.

### Case 1 — Convert meters to other length units (params)

**What to learn:** a path param is the main value. Transform a string param into a number and reject invalid values.

| | |
| --- | --- |
| Method | `GET` |
| Endpoint | `/convert/length/:meters` |
| Input | **Params only** |

**Params DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `meters` | `number` | required, number, minimum `0`, max `1_000_000` |

**Example request**

```http
GET /convert/length/1500
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Length converted",
  "data": {
    "meters": 1500,
    "kilometers": 1.5,
    "centimeters": 150000,
    "miles": 0.932
  }
}
```

Round `miles` to 3 decimal places. Invalid example: `GET /convert/length/abc` or `GET /convert/length/-2` → `400`.

---

### Case 2 — Calculate sales tax / PPN (query)

**What to learn:** query strings are for calculation options. Query values arrive as strings, so they must be transformed (`"11"` → `11`, `"false"` → `false`).

| | |
| --- | --- |
| Method | `GET` |
| Endpoint | `/tax` |
| Input | **Query only** |

**Query DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `amount` | `number` | required, number, minimum `0` |
| `rate` | `number` | required, number, `0`–`100` |
| `inclusive` | `boolean` | optional, default `false`. If `true`, `amount` already includes tax |

**Example request**

```http
GET /tax?amount=150000&rate=11&inclusive=false
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Tax calculated",
  "data": {
    "amount": 150000,
    "rate": 11,
    "inclusive": false,
    "tax": 16500,
    "net": 150000,
    "gross": 166500
  }
}
```

When `inclusive=true`, `gross` equals `amount`, `tax = amount * rate / (100 + rate)`, and `net = amount - tax`.

---

### Case 3 — Average of exam scores (body with array)

**What to learn:** a list of values belongs in the body. Validate an array with `@IsArray()`, `@ArrayMinSize()`, and `@IsNumber({}, { each: true })`.

| | |
| --- | --- |
| Method | `POST` |
| Endpoint | `/scores/average` |
| Input | **Body only** |

**Body DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `scores` | `number[]` | required, `1`–`20` items, each number `0`–`100` |
| `passMark` | `number` | optional, number, `0`–`100`, default `70` |

**Example request**

```http
POST /scores/average
Content-Type: application/json

{
  "scores": [80, 90, 75, 60, 88],
  "passMark": 70
}
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Score summary calculated",
  "data": {
    "count": 5,
    "average": 78.6,
    "highest": 90,
    "lowest": 60,
    "passMark": 70,
    "passed": 4,
    "failed": 1
  }
}
```

Round `average` to 1 decimal place.

---

### Case 4 — Split a restaurant bill (params + body)

**What to learn:** the URL holds how many people pay. The body holds the food items. Validate a nested array of objects.

| | |
| --- | --- |
| Method | `POST` |
| Endpoint | `/bills/:peopleCount/split` |
| Input | **Params + Body** |

**Params DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `peopleCount` | `number` | required, integer, `2`–`20` |

**Body DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `items` | `array` | required, `1`–`30` objects |
| `items[].name` | `string` | required, trim, `2`–`50` characters |
| `items[].price` | `number` | required, number, minimum `0` |
| `items[].qty` | `number` | required, integer, minimum `1` |
| `tipPercent` | `number` | optional, number, `0`–`30`, default `0` |

**Example request**

```http
POST /bills/4/split
Content-Type: application/json

{
  "items": [
    { "name": "Nasi goreng", "price": 28000, "qty": 2 },
    { "name": "Es teh", "price": 8000, "qty": 4 }
  ],
  "tipPercent": 10
}
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Bill split",
  "data": {
    "peopleCount": 4,
    "subtotal": 88000,
    "tipPercent": 10,
    "tip": 8800,
    "total": 96800,
    "perPerson": 24200
  }
}
```

`subtotal` is the sum of `price * qty`. Round `perPerson` to the nearest integer.

---

### Case 5 — Convert temperature (params + query)

**What to learn:** the number lives in the path. The source and target units are query options. Reject the same-unit pair or an unknown unit.

| | |
| --- | --- |
| Method | `GET` |
| Endpoint | `/convert/temperature/:value` |
| Input | **Params + Query** |

**Params DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `value` | `number` | required, number, `-273.15`–`1000` |

**Query DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `from` | `string` | required, one of `C`, `F`, `K` |
| `to` | `string` | required, one of `C`, `F`, `K`, must be different from `from` |

**Example request**

```http
GET /convert/temperature/30?from=C&to=F
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Temperature converted",
  "data": {
    "value": 30,
    "from": "C",
    "to": "F",
    "result": 86
  }
}
```

Formulas: `C → F = C * 9/5 + 32`, `C → K = C + 273.15`. Convert through Celsius when needed. Round `result` to 2 decimal places.

---

### Case 6 — Shopping checkout with discount (query + body)

**What to learn:** the cart is a body payload. Member status and coupon are optional flags in the query.

| | |
| --- | --- |
| Method | `POST` |
| Endpoint | `/checkout/discount` |
| Input | **Query + Body** |

**Query DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `member` | `boolean` | optional, default `false` |
| `coupon` | `string` | optional, one of `HEMAT10`, `HEMAT20`, `FREESHIP` |

**Body DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `items` | `array` | required, `1`–`20` objects |
| `items[].name` | `string` | required, `2`–`50` characters |
| `items[].price` | `number` | required, number, minimum `0` |
| `items[].qty` | `number` | required, integer, minimum `1` |

**Example request**

```http
POST /checkout/discount?member=true&coupon=HEMAT10
Content-Type: application/json

{
  "items": [
    { "name": "T-Shirt", "price": 120000, "qty": 2 },
    { "name": "Cap", "price": 80000, "qty": 1 }
  ]
}
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Checkout calculated",
  "data": {
    "subtotal": 320000,
    "member": true,
    "coupon": "HEMAT10",
    "discounts": {
      "member": 16000,
      "coupon": 32000,
      "total": 48000
    },
    "grandTotal": 272000
  }
}
```

Suggested discount rules:

- Member extra `5%` of subtotal
- `HEMAT10` = `10%`, `HEMAT20` = `20%`, `FREESHIP` = `0` (no price discount)
- Apply member and coupon on the original subtotal, then subtract both
- Unknown coupon → `404`

---

### Case 7 — Monthly loan installment (params + query + body)

**What to learn:** one endpoint can use all three sources. The principal is in the URL. Currency is a query option. Tenure and interest belong in the body.

| | |
| --- | --- |
| Method | `POST` |
| Endpoint | `/loans/:principal/installment` |
| Input | **Params + Query + Body** |

**Params DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `principal` | `number` | required, number, `1_000_000`–`1_000_000_000` |

**Query DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `currency` | `string` | optional, one of `IDR`, `USD`, default `IDR` |

**Body DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `months` | `number` | required, integer, `1`–`60` |
| `annualInterestRate` | `number` | required, number, `0`–`50` |

**Example request**

```http
POST /loans/12000000/installment?currency=IDR
Content-Type: application/json

{
  "months": 12,
  "annualInterestRate": 12
}
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Installment calculated",
  "data": {
    "principal": 12000000,
    "currency": "IDR",
    "months": 12,
    "annualInterestRate": 12,
    "monthlyInterestRate": 0.01,
    "monthlyInstallment": 1066192,
    "totalPayment": 12794304,
    "totalInterest": 794304
  }
}
```

Use the standard annuity formula:

`monthlyInstallment = P * r * (1 + r)^n / ((1 + r)^n - 1)`

where `r = annualInterestRate / 12 / 100` and `n = months`. If `r === 0`, installment is `principal / months`. Round money to the nearest integer.

---

### Case 8 — Electricity bill (body with nested objects)

**What to learn:** nested objects need `@ValidateNested()` and `@Type()`. This is still body-only, but the validation is deeper.

| | |
| --- | --- |
| Method | `POST` |
| Endpoint | `/bills/electricity` |
| Input | **Body only** (nested DTO) |

**Body DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `customerName` | `string` | required, trim, `3`–`80` characters |
| `meter.previousKwh` | `number` | required, number, minimum `0` |
| `meter.currentKwh` | `number` | required, number, `> previousKwh` |
| `rates.baseFee` | `number` | required, number, minimum `0` |
| `rates.perKwh` | `number` | required, number, minimum `0` |
| `rates.taxRate` | `number` | optional, number, `0`–`20`, default `11` |

**Example request**

```http
POST /bills/electricity
Content-Type: application/json

{
  "customerName": "Budi Santoso",
  "meter": {
    "previousKwh": 1200,
    "currentKwh": 1350
  },
  "rates": {
    "baseFee": 15000,
    "perKwh": 1444,
    "taxRate": 11
  }
}
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Electricity bill calculated",
  "data": {
    "customerName": "Budi Santoso",
    "usageKwh": 150,
    "baseFee": 15000,
    "usageFee": 216600,
    "subtotal": 231600,
    "taxRate": 11,
    "tax": 25476,
    "total": 257076
  }
}
```

`usageKwh = currentKwh - previousKwh`. `usageFee = usageKwh * perKwh`. `tax = subtotal * taxRate / 100`.

---

### Case 9 — Parking fee (params + query)

**What to learn:** duration is the identity in the URL. Vehicle type and weekend flag change the rate through query.

| | |
| --- | --- |
| Method | `GET` |
| Endpoint | `/parking/:hours` |
| Input | **Params + Query** |

**Params DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `hours` | `number` | required, number, `0.5`–`24` |

**Query DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `vehicle` | `string` | required, one of `car`, `motorcycle`, `bus` |
| `weekend` | `boolean` | optional, default `false` |

**Example request**

```http
GET /parking/3?vehicle=car&weekend=true
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Parking fee calculated",
  "data": {
    "hours": 3,
    "billedHours": 3,
    "vehicle": "car",
    "weekend": true,
    "hourlyRate": 8000,
    "weekendSurcharge": 0.2,
    "total": 28800
  }
}
```

Suggested rates (per hour): `motorcycle` = `2000`, `car` = `8000`, `bus` = `15000`.

- Round `hours` up to the next full hour for `billedHours` (2.1 → 3)
- Weekend adds `20%`
- `total = billedHours * hourlyRate * (weekend ? 1.2 : 1)`

---

### Case 10 — Delivery / shipping cost (params + query + body)

**What to learn:** destination city is in the path, delivery mode is a query flag, and package size is a nested body.

| | |
| --- | --- |
| Method | `POST` |
| Endpoint | `/shipping/:city` |
| Input | **Params + Query + Body** |

**Params DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `city` | `string` | required, one of `jakarta`, `bandung`, `surabaya`, `medan`, `denpasar` |

**Query DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `express` | `boolean` | optional, default `false` |
| `insurance` | `boolean` | optional, default `false` |

**Body DTO**

| Field | Type | Rules |
| --- | --- | --- |
| `weightKg` | `number` | required, number, `0.1`–`30` |
| `dimension.lengthCm` | `number` | required, number, `1`–`100` |
| `dimension.widthCm` | `number` | required, number, `1`–`100` |
| `dimension.heightCm` | `number` | required, number, `1`–`100` |

**Example request**

```http
POST /shipping/bandung?express=true&insurance=true
Content-Type: application/json

{
  "weightKg": 2.5,
  "dimension": {
    "lengthCm": 30,
    "widthCm": 20,
    "heightCm": 15
  }
}
```

**Success response (`200`)**

```json
{
  "success": true,
  "message": "Shipping cost calculated",
  "data": {
    "city": "bandung",
    "express": true,
    "insurance": true,
    "weightKg": 2.5,
    "volumetricKg": 1.8,
    "chargeableKg": 2.5,
    "baseFare": 12000,
    "expressFee": 6000,
    "insuranceFee": 2500,
    "total": 20500
  }
}
```

Suggested rules:

- City base fare: `jakarta` `9000`, `bandung` `12000`, `surabaya` `15000`, `medan` `18000`, `denpasar` `20000`
- `volumetricKg = length * width * height / 5000`
- `chargeableKg = max(weightKg, volumetricKg)`
- Add `2000` for every started kg above 1 kg
- Express adds `50%` of (base + weight extra)
- Insurance adds `1000` per chargeable kg
- Unsupported city → `404`

---

## Case map

Use this table to pick the right input source before writing code.

| Case | Everyday problem | Endpoint | Params | Query | Body |
| --- | --- | --- | --- | --- | --- |
| 1 | Convert meters | `GET /convert/length/:meters` | yes | | |
| 2 | Count tax / PPN | `GET /tax` | | yes | |
| 3 | Average of scores | `POST /scores/average` | | | yes (array) |
| 4 | Split a bill | `POST /bills/:peopleCount/split` | yes | | yes |
| 5 | Convert temperature | `GET /convert/temperature/:value` | yes | yes | |
| 6 | Checkout discount | `POST /checkout/discount` | | yes | yes |
| 7 | Loan installment | `POST /loans/:principal/installment` | yes | yes | yes |
| 8 | Electricity bill | `POST /bills/electricity` | | | yes (nested) |
| 9 | Parking fee | `GET /parking/:hours` | yes | yes | |
| 10 | Shipping cost | `POST /shipping/:city` | yes | yes | yes |

## Suggested implementation order

1. Enable `ValidationPipe` and add a shared response helper
2. Cases 1–3 (one source each: params, query, body)
3. Cases 4–6 and 9 (two sources)
4. Cases 7 and 10 (all three sources)
5. Case 8 (nested objects)

## Checklist for every case

- [ ] Dedicated DTO class(es) with `class-validator` decorators
- [ ] `@Type()` / transform where params or query must become `number` or `boolean`
- [ ] Controller uses `@Param()`, `@Query()`, `@Body()` only for the sources that case needs
- [ ] Success response matches the `success` / `message` / `data` envelope
- [ ] Invalid input returns `400` with the `errors[]` list
- [ ] Unsupported named value (city, coupon, unit) returns `404`

## Tests

```bash
npm run test
npm run test:e2e
npm run test:cov
```
>>>>>>> upstream/main
