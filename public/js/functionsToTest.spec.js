import { returnAnObject, multiplyAllByTwo } from './functionsToTest';

describe('La fonction returnAnObject', () => {
  test('devrait retourner un objet quand on lui attribue un argument', () => {
    expect(returnAnObject('premier', 'second')).toMatchObject({0:'premier',1:'second'});
  });

  test('devrait retourner No argument was given to the function.', () => {
    expect(returnAnObject()).toBe('No argument was given to the function.');
  });
});

describe('La fonction multiplyAllByTwo', () => {
  test('devrait retourner un nombre multiplié par 2', () => {
    expect(multiplyAllByTwo([3, 4])).toEqual([6, 8]);
  });

  test('devrait retourner The argument is not an Array of numbers si on attribue en argument autre chose qu\'un tableau de nombres', () => {
    expect(multiplyAllByTwo('pas un tableau de nombres')).toBe('The argument is not an Array of numbers');
  });

});

// PS: le fichier functionsToTest.js a été corrigé sinon 1 test(multiplication par 2) ne passe pas
// à cause de de la variable non déclarée "arrayTimesTwo" (is not defined) a été remplacé par la variable "response" dans le console.log




