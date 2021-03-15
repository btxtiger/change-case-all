import * as changeCase from 'change-case';

import * as lowerCase1 from 'lower-case';
import * as lowerCaseFirst1 from 'lower-case-first';
import * as spongeCase1 from 'sponge-case';
import * as swapCase1 from 'swap-case';
import * as titleCase1 from 'title-case';
import * as upperCase1 from 'upper-case';
import * as upperCaseFirst1 from 'upper-case-first';
import * as isUpperCase1 from 'is-upper-case';
import * as isLowerCase1 from 'is-lower-case';

// Core
export const camelCase = changeCase?.camelCase;
export const capitalCase = changeCase?.capitalCase;
export const constantCase = changeCase?.constantCase;
export const dotCase = changeCase?.dotCase;
export const headerCase = changeCase?.headerCase;
export const noCase = changeCase?.noCase;
export const paramCase = changeCase?.paramCase;
export const pascalCase = changeCase?.pascalCase;
export const pathCase = changeCase?.pathCase;
export const sentenceCase = changeCase?.sentenceCase;
export const snakeCase = changeCase?.snakeCase;

// Extended
export const lowerCase = lowerCase1?.lowerCase;
export const localeLowerCase = lowerCase1?.localeLowerCase;
export const lowerCaseFirst = lowerCaseFirst1?.lowerCaseFirst;
export const spongeCase = spongeCase1?.spongeCase;
export const swapCase = swapCase1?.swapCase;
export const titleCase = titleCase1?.titleCase;
export const upperCase = upperCase1?.upperCase;
export const localeUpperCase = upperCase1?.localeUpperCase;
export const upperCaseFirst = upperCaseFirst1?.upperCaseFirst;
export const isUpperCase = isUpperCase1?.isUpperCase;
export const isLowerCase = isLowerCase1?.isLowerCase;
