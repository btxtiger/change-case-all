import {
   camelCase,
   capitalCase,
   constantCase,
   dotCase,
   headerCase,
   noCase,
   paramCase,
   pascalCase,
   pathCase,
   sentenceCase,
   snakeCase,
   kebabCase,
   trainCase,
} from '../dist';
import { describe, it, expect } from 'vitest';

describe('The core modules of change-case', () => {
   let expression = 'MyName-is_peter parker__and--I-amCool';

   it('should camelCase the expression', () => {
      expect(camelCase).toBeDefined();
      expect(camelCase(expression)).toEqual('myNameIsPeterParkerAndIAmCool');
   });

   it('should capitalCase the expression', () => {
      expect(capitalCase).toBeDefined();
      expect(capitalCase(expression)).toEqual('My Name Is Peter Parker And I Am Cool');
   });

   it('should constantCase the expression', () => {
      expect(constantCase).toBeDefined();
      expect(constantCase(expression)).toEqual('MY_NAME_IS_PETER_PARKER_AND_I_AM_COOL');
   });

   it('should dotCase the expression', () => {
      expect(dotCase).toBeDefined();
      expect(dotCase(expression)).toEqual('my.name.is.peter.parker.and.i.am.cool');
   });

   it('should headerCase the expression', () => {
      expect(headerCase).toBeDefined();
      expect(headerCase(expression)).toEqual('My-Name-Is-Peter-Parker-And-I-Am-Cool');
   });

   it('should trainCase the expression', () => {
      expect(trainCase).toBeDefined();
      expect(trainCase(expression)).toEqual('My-Name-Is-Peter-Parker-And-I-Am-Cool');
   });

   it('should noCase the expression', () => {
      expect(noCase).toBeDefined();
      expect(noCase(expression)).toEqual('my name is peter parker and i am cool');
   });

   it('should paramCase the expression', () => {
      expect(paramCase).toBeDefined();
      expect(paramCase(expression)).toEqual('my-name-is-peter-parker-and-i-am-cool');
   });

   it('should kebabCase the expression', () => {
      expect(kebabCase).toBeDefined();
      expect(kebabCase(expression)).toEqual('my-name-is-peter-parker-and-i-am-cool');
   });

   it('should pascalCase the expression', () => {
      expect(pascalCase).toBeDefined();
      expect(pascalCase(expression)).toEqual('MyNameIsPeterParkerAndIAmCool');
   });

   it('should pathCase the expression', () => {
      expect(pathCase).toBeDefined();
      expect(pathCase(expression)).toEqual('my/name/is/peter/parker/and/i/am/cool');
   });

   it('should sentenceCase the expression', () => {
      expect(sentenceCase).toBeDefined();
      expect(sentenceCase(expression)).toEqual('My name is peter parker and i am cool');
   });

   it('should snakeCase the expression', () => {
      expect(snakeCase).toBeDefined();
      expect(snakeCase(expression)).toEqual('my_name_is_peter_parker_and_i_am_cool');
   });
});
