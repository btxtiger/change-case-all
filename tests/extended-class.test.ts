import {
   isLowerCase,
   isUpperCase,
   localeLowerCase,
   localeUpperCase,
   lowerCase,
   lowerCaseFirst,
   spongeCase,
   swapCase,
   titleCase,
   upperCase,
   upperCaseFirst,
   Case
} from '../dist';

import { describe, it, expect } from 'vitest';

describe('The extended modules of change-case', () => {
   let expression = 'MyName-is_peter parker__and--I-amCool';

   it('should camelCase the expression', () => {
      expect(Case.lower).toBeDefined();
      expect(Case.lower(expression)).toEqual('myname-is_peter parker__and--i-amcool');
   });

   it('should localeLowerCase the expression', () => {
      expect(Case.localeLower).toBeDefined();
      expect(Case.localeLower(expression, 'EN')).toEqual('myname-is_peter parker__and--i-amcool');
   });

   it('should lowerCaseFirst the expression', () => {
      expect(Case.lowerFirst).toBeDefined();
      expect(Case.lowerFirst(expression)).toEqual('myName-is_peter parker__and--I-amCool');
   });

   it('should spongeCase the expression', () => {
      expect(Case.sponge).toBeDefined();
      // Result varies on each run
      // expect(Case.sponge(expression)).toEqual('mynAme-iS_pETEr paRkER__ANd--i-AMCool');
   });

   it('should swapCase the expression', () => {
      expect(Case.swap).toBeDefined();
      expect(Case.swap(expression)).toEqual('mYnAME-IS_PETER PARKER__AND--i-AMcOOL');
   });

   it('should titleCase the expression', () => {
      expect(Case.title).toBeDefined();
      expect(Case.title(expression)).toEqual('MyName-Is_peter Parker__and--I-amCool');
   });

   it('should upperCase the expression', () => {
      expect(Case.upper).toBeDefined();
      expect(Case.upper(expression)).toEqual('MYNAME-IS_PETER PARKER__AND--I-AMCOOL');
   });

   it('should localeUpperCase the expression', () => {
      expect(Case.localeUpper).toBeDefined();
      expect(Case.localeUpper(expression, 'EN')).toEqual('MYNAME-IS_PETER PARKER__AND--I-AMCOOL');
   });

   it('should upperCaseFirst the expression', () => {
      expect(Case.upperFirst).toBeDefined();
      expect(Case.upperFirst(expression)).toEqual('MyName-is_peter parker__and--I-amCool');
   });

   it('should test expression isUpperCase', () => {
      expect(Case.upper).toBeDefined();
      expect(Case.upper(expression)).toEqual('MYNAME-IS_PETER PARKER__AND--I-AMCOOL');
   });

   it('should test expression isLowerCase', () => {
      expect(Case.lower).toBeDefined();
      expect(Case.lower(expression)).toEqual('myname-is_peter parker__and--i-amcool');
   });
});
