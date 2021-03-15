// Problem 3
// Millennial Millinery

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

Melissa is opening a new millinery business in downtown Asheville. It is a hat
store called Millennial Millinery. For now, Melissa has decided to sell just one
type of hat, but it will vary by size and material. She would like your help in
determining the prices of hats. The type of material will determine the price
of a hat and the total area of material used to make the hat.

In this problem, we will assume that the human head and the hat will be
circular in shape rather than elongated. For a given hat, you will need to
determine the total area of material used. Let r be the radius of the wearer’s
head in inches. Each hat consists of three parts:

- The top of the hat, which is a circle of radius r.
- The middle of the hat, which is a cylinder without its two bases. This
  cylinder has a circumference equal to that of the top of the hat, and a
  height of 4 inches.
- The brim of the hat, which is 3 inches wide. Thus, the brim occupies the
  annular region between two concentric circles having radii of r and r + 3
  inches.

Each hat is made of one kind of material. Melissa makes hats of three possible
materials, and each type has a different price per square inch:

- Velvet, 25 cents
- Straw, 35 cents
- Wool, 45 cents

The hats come in various sizes. Hat sizes range from 6 to 8, in increments of
one-eighth. Thus, the second largest hat size is `7-7/8` and the second
smallest is `6-1/8`. The relationship between the hat size and the size of the
wearer’s head is as follows. If `h` is the hat size, then the circumference of
the head and of the hat is `25/8h`. For example, a size 7 hat has a
circumference of `21-7/8` inches.

## Input

The first line of input will contain a single integer n, indicating the number
of hats to price. Each of the remaining n lines of input will contain
information about one hat. The format of such a line is as follows:

`Model <number> <material> <size>`

Where `<number>` is a two-digit positive integer, `<material>` is “velvet”,
“straw”, or “wool”; and `<size>` is either a whole number 6, 7, or 8, or a
mixed numeral between 6 and 8 rounded to the nearest one-eighth in lowest
terms. A mixed numeral will have one space between the whole number and
fraction.

## Output

Your program will print one line for each hat. The output format is as follows:
Model <number> $ <price>
Where <price> is an amount of dollars expressed to exactly two decimal places. Be sure to
print exactly one space on either side of the dollar sign.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} size
//  * @returns {string}
//  */
// const mixedToImproperFraction = size => {
//   const [, w, n, d] = size
//     .match(/^(\d+)(?:\s(\d+)\/(\d+))?$/)
//     .map(n => Number(n) || 0);
//   console.log(w, n, d);
//   return !d ? [w, 1] : [w * d + n, w * n];
// };

/**
 * @param {string} size
 * @returns {string}
 */
const mixedToImproperFraction = size =>
  (([, w, n, d]) => (!d ? [w, 1] : [w * d + n, w * n]))(
    size.match(/^(\d+)(?:\s(\d+)\/(\d+))?$/).map(n => Number(n) || 0),
  );

/**
 * @param {string} s
 * @returns {string}
 */
const prices = s => {
  const [, number, material, size] = s.match(/^\D+\s(\d+)\s(\w+)\s(.+)$/);
  console.log(number, material, size);
  const [whole, part] = mixedToImproperFraction(size); // ?
  const [diaWHole, diaPart] =
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(prices('Model 70 wool 6'), 'Model 70 $ 84.38');

/*

6 = 6 * 25 / 8 = 6 * 25 / 1 * 8 = 150 / 8

*/

strictEqual(prices('Model 97 velvet 7 1/2'), 'Model 97 $ 59.01');

/*

15   25
-- * --
 7    8

*/

strictEqual(prices('Model 86 straw 6 5/8'), 'Model 86 $ 72.56');
