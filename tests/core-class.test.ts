import { Case } from '../dist';
import { describe, it, expect } from 'vitest';

describe('The core modules of change-case', () => {
   let expression = 'MyName-is_peter parker__and--I-amCool';

   it('should camelCase the expression', () => {
      expect(Case.camel).toBeDefined();
      expect(Case.camel(expression)).toEqual('myNameIsPeterParkerAndIAmCool');
   });

   it('should capitalCase the expression', () => {
      expect(Case.capital).toBeDefined();
      expect(Case.capital(expression)).toEqual('My Name Is Peter Parker And I Am Cool');
   });

   it('should constantCase the expression', () => {
      expect(Case.constant).toBeDefined();
      expect(Case.constant(expression)).toEqual('MY_NAME_IS_PETER_PARKER_AND_I_AM_COOL');
   });

   it('should dotCase the expression', () => {
      expect(Case.dot).toBeDefined();
      expect(Case.dot(expression)).toEqual('my.name.is.peter.parker.and.i.am.cool');
   });

   it('should trainCase the expression', () => {
      expect(Case.train).toBeDefined();
      expect(Case.train(expression)).toEqual('My-Name-Is-Peter-Parker-And-I-Am-Cool');
   });

   it('should noCase the expression', () => {
      expect(Case.no).toBeDefined();
      expect(Case.no(expression)).toEqual('my name is peter parker and i am cool');
   });

   it('should kebabCase the expression', () => {
      expect(Case.kebab).toBeDefined();
      expect(Case.kebab(expression)).toEqual('my-name-is-peter-parker-and-i-am-cool');
   });

   it('should pascalCase the expression', () => {
      expect(Case.pascal).toBeDefined();
      expect(Case.pascal(expression)).toEqual('MyNameIsPeterParkerAndIAmCool');
   });

   it('should pathCase the expression', () => {
      expect(Case.path).toBeDefined();
      expect(Case.path(expression)).toEqual('my/name/is/peter/parker/and/i/am/cool');
   });

   it('should sentenceCase the expression', () => {
      expect(Case.sentence).toBeDefined();
      expect(Case.sentence(expression)).toEqual('My name is peter parker and i am cool');
   });

   it('should snakeCase the expression', () => {
      expect(Case.snake).toBeDefined();
      expect(Case.snake(expression)).toEqual('my_name_is_peter_parker_and_i_am_cool');
   });
});
