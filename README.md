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
### Class based usage
```ts
import { Case } from 'change-case-all';

const str = 'test string';

camel       = Case.camel(str);               // testString
capital     = Case.capital(str);             // Test String
constant    = Case.constant(str);            // TEST_STRING
dot         = Case.dot(str);                 // test.string
no          = Case.no(str);                  // test string
pascal      = Case.pascal(str);              // TestString
path        = Case.path(str);                // test/string
sentence    = Case.sentence(str);            // Test string
snake       = Case.snake(str);               // test_string
train       = Case.train(str);               // Test-String
kebap       = Case.kebap(str);               // test-string
sponge      = Case.sponge(str);              // TeSt StRiNg
swapCase    = Case.swap(str);                // TEST STRING
title       = Case.title(str);               // Test String
uppper      = Case.upper(str);               // TEST STRING
localeUpper = Case.localeUpper(str, 'en');   // TEST STRING
lower       = Case.lower(str);               // test string
localeLower = Case.localeLower(str, 'en');   // test string
lowerFirst  = Case.lowerFirst(str);          // test string
upperFirst  = Case.upperFirst(str);          // Test string
isUpper     = Case.isUpper(str);             // false
isLower     = Case.isLower(str);             // true

```

### Function based usage
```ts
import { camelCase, upperCase, ... } from 'change-case-all';

const str = 'test string';

camel       = camelCase(str);               // testString
capital     = capitalCase(str);             // Test String
constant    = constantCase(str);            // TEST_STRING
dot         = dotCase(str);                 // test.string
no          = noCase(str);                  // test string
pascal      = pascalCase(str);              // TestString
path        = pathCase(str);                // test/string
sentence    = sentenceCase(str);            // Test string
snake       = snakeCase(str);               // test_string
train       = trainCase(str);               // Test-String
kebap       = kebapCase(str);               // test-string
sponge      = spongeCase(str);              // TeSt StRiNg
swapCase    = swapCase(str);                // TEST STRING
title       = titleCase(str);               // Test String
uppper      = upperCase(str);               // TEST STRING
localeUpper = localeUpperCase(str, 'en');   // TEST STRING
lower       = lowerCase(str);               // test string
localeLower = localeLowerCase(str, 'en');   // test string
lowerFirst  = lowerCaseFirst(str);          // test string
upperFirst  = upperCaseFirst(str);          // Test string
isUpper     = isUpperCase(str);             // false
isLower     = isLowerCase(str);             // true

```
