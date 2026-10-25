import { game } from "./fizzBuzzWhizz";

describe('FizzBuzzWhizz Game', () => {
  test.each([
    [1, 1],
    [2, 'Whizz'],
    [3, 'FizzWhizz'],
    [4, 4],
    [5, 'BuzzWhizz'],
    [6, 'Fizz'],
    [9, 'Fizz'],
    [10, 'Buzz'],
    [15, 'FizzBuzz'],
    [20, 'Buzz'],
    [30, 'FizzBuzz'],
    [75, 'FizzBuzz'],
    [97, 'Whizz'],     // large prime number
    [1000, 'Buzz'],    //Large multiple of 5
  ])('game(%i) should return %s', (input, expected) => {
    expect(game(input)).toEqual(expected);
  });
});