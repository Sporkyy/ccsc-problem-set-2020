// Problem 2 | Balancing Delimiters

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

Many encoded strings contain delimiters. A delimiter is a non-empty string that
acts as a boundary between different parts of a larger string. The delimiters
involved in this problem occur in pairs that must be balanced with each pair
having an open delimiter and a close delimiter. The open and close delimiters
will always be different.

## Input
The first line of input will contain a single integer n, which represents the
number of test cases. You may assume that 1 ≤ n ≤ 100. This will be followed by
n test cases. Each test case consists of two lines. The first line contains the
open and close delimiters. Each delimiter is a sequence of nonspace characters
of length less than ten consisting of letters, digits, and/or symbols. The
second line will be a string of one or more tokens to be checked for balanced
delimiters. Assume all delimiters and other tokens are preceded by at least one
space unless they occur at the start of a line.

## Output
For each test case, you should print the string checked followed by whether or
not it is balanced in the format below.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const checkBalance = (d, s) => {
//   // console.log(d, s);
//   const [l, r] = [d.slice(0, d.length / 2 - 1), d.slice(d.length / 2)];
//   console.log(`"${l}""${r}"`);
//   // // let [lcnt, rcnt] = [0, 0];
//   // let cnt = 0;
//   // for (let i = 0; i < s.length; i++) {
//   //   let j = 0;
//   //   while (j < l.length && s[j] === l[i + 1]) j++, i++;
//   //   if (l.length === j) cnt--;
//   //   console.log(cnt);
//   // }
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {string} d
 * @param {string} s
 * @param {string}
 */
const checkBalance = (d, s) => {
  // console.log(d, s);
  const [open, close] = [d.slice(0, d.length / 2), d.slice(d.length / 2)];
  // console.log(open, close);
  let cnt = 0;
  for (let i = 0, subI = 0; i < s.length; i++, subI = 0) {
    // console.log(i);
    while (s[i + subI] === open[subI] && subI < open.length) subI++;
    // console.log(subI);
    if (subI === open.length) {
      cnt++; // ?
      i += subI;
      continue;
    }
    // console.log(subI);
    subI = 0;
    // console.log('here', i);
    // console.log(`"${s[i + subI]}" === "${close[subI]}"`);
    while (s[i + subI] === close[subI] && subI < close.length) subI++;
    // console.log(subI);
    if (subI === close.length) {
      // console.log('here');
      cnt--; // ?
      i += subI;
      continue;
    }
  }
  // console.log(cnt);
  return `${s} is${0 === cnt ? '' : ' not'} balanced`;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(checkBalance('()', '( x + ( y )'), '( x + ( y ) is not balanced');

strictEqual(checkBalance('{}', '{ { 3 + 4 } }'), '{ { 3 + 4 } } is balanced');

strictEqual(
  checkBalance('<B> </B>', '<B> Make this text bold </B>'),
  '<B> Make this text bold </B> is balanced',
);

strictEqual(
  checkBalance('<B> </B>', '<B> Make this text bold </UB>'),
  '<B> Make this text bold </UB> is not balanced',
);

strictEqual(
  checkBalance('[]', '[ [ [ UNCA ] ] ]'),
  '[ [ [ UNCA ] ] ] is balanced',
);

strictEqual(
  checkBalance('fish fish2', 'red fish blue fish2 green fish yellow fish2'),
  'red fish blue fish2 green fish yellow fish2 is balanced',
);
