# change-case-all
[![npm](https://img.shields.io/npm/v/change-case-all.svg)](https://www.npmjs.com/package/change-case-all)
[![npm](https://img.shields.io/npm/dm/change-case-all.svg)](https://www.npmjs.com/package/change-case-all)
[![npm](https://img.shields.io/librariesio/release/npm/change-case-all)](https://www.npmjs.com/package/change-case-all)

Combined version of all [`change-case`](https://github.com/blakeembrey/change-case) methods, so you do not need to install them separately.
Tree shaking should still work if you use a module bundler.

## Usage
```shell script
npm install --save change-case-all
```

```ts
import { Case } from 'change-case-all';

const camel = Case.camel('test string'); // testString
const upper = Case.upper('test string'); // TEST STRING
```

```ts
import { camelCase, upperCase, ... } from 'change-case-all';

const camel = camelCase('test string'); // testString
const upper = upperCase('test string'); // TEST STRING
```

## Changelog
### 2.0.0
- Updated dependencies to `change-case@5.2.0`
- ParamCase &rarr; now KebabCase
- HeaderCase &rarr; now TrainCase
- Create mjs and cjs bundles
- Introduce `Case` helper class: e.g. `Case.camel('test string'); // testString`
- `TitleCase@4.1.0` failing in tests, thus kept at `3.0.3`

## Links
- **Original project:** https://github.com/blakeembrey/change-case 
- **Bundled browser friendly version:** https://github.com/nitro404/change-case-bundled

## Methods
```ts
import { camelCase, upperCase, ... } from 'change-case-all';
import { Case } from 'change-case-all';

const str = 'test string';

const camel = Case.camel(str); // testString
const camel = camelCase(str); // testString

const capital = Case.capital(str); // Test String
const capital = capitalCase(str); // Test String

const constant = Case.constant(str); // TEST_STRING
const constant = constantCase(str); // TEST_STRING

const dot = Case.dot(str); // test.string
const dot = dotCase(str); // test.string

const no = Case.no(str); // test string
const no = noCase(str); // test string

const pascal = Case.pascal(str); // TestString
const pascal = pascalCase(str); // TestString

const path = Case.path(str); // test/string
const path = pathCase(str); // test/string

const sentence = Case.sentence(str); // Test string
const sentence = sentenceCase(str); // Test string

const snake = Case.snake(str); // test_string
const snake = snakeCase(str); // test_string

const train = Case.train(str); // Test-String
const train = trainCase(str); // Test-String

const kebap = Case.kebap(str); // test-string
const kebap = kebapCase(str); // test-string

const sponge = Case.sponge(str); // TeSt StRiNg
const sponge = spongeCase(str); // TeSt StRiNg

const swapCase = Case.swap(str); // TEST STRING
const swapCase = swapCase(str); // TEST STRING

const title = Case.title(str); // Test String
const title = titleCase(str); // Test String

const uppper = Case.upper(str); // TEST STRING
const uppper = upperCase(str); // TEST STRING

const localeUpper = Case.localeUpper(str, 'en'); // TEST STRING
const localeUpper = localeUpperCase(str, 'en'); // TEST STRING

const lower = Case.lower(str); // test string
const lower = lowerCase(str); // test string

const localeLower = Case.localeLower(str, 'en'); // test string
const localeLower = localeLowerCase(str, 'en'); // test string

const lowerFirst = Case.lowerFirst(str); // test string
const lowerFirst = lowerCaseFirst(str); // test string

const upperFirst = Case.upperFirst(str); // Test string
const upperFirst = upperCaseFirst(str); // Test string

const isUpper = Case.isUpper(str); // false
const isUpper = isUpperCase(str); // false

const isLower = Case.isLower(str); // true
const isLower = isLowerCase(str); // true
```
