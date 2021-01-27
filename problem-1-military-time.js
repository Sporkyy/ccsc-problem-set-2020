// Problem 1 | Military Time

/*

Military time is a method of measuring the time based on the full twenty-fours
of the day rather than two groups of twelve hours. For example, 0530 is 5:30 AM
and 1730 is 5:30 PM. You are writing a program that inputs two military times
for a particular soldier. The first time input represents when the soldier first
logs in for work, and the second time input is when he or she logs out. Your
program should calculate the total hours and minutes they worked. Many members
of the military work during the third shift so they may log in one evening, and
log out the following day.

## Input
The first line of input will be a positive integer n representing the number of
test cases. This will be followed by n lines of input consisting of two
integers. The first integer at the start of the line is the time when someone
logs in and the second integer is the time is when he or she logs out. The two
integers will each be four digits and separated by a single space. They will
always be valid times in the range from 0000 up to 2359.

## Output Corresponding to Sample Input
The output should be formatted exactly as shown below where each line indicates
the hours and minutes worked between the two times. only have one of either.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const timeDiff = s => {
//   const [[h1, m1], [h2, m2]] = s
//     .split(' ')
//     .map(t => [t.slice(0, 2), t.slice(2)]); // ?
//   let [hDiff, mDiff] = [h2 - h1, m2 - m1]; // ?
//   if (hDiff < 0) hDiff += 24;
//   if (mDiff < 0) {
//     hDiff = (hDiff + 1) % 23;
//     mDiff += 60;
//   }
//   console.log(`${hDiff} ${mDiff}`);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const timeDiff = s => {
  const [t1, t2] = s.split(' ').map(Number);
  let diff = t2 - t1;
  if (diff < 0) diff = 2400 + diff;
  let [h, m] = [Math.trunc(diff / 100), diff % 100];
  if (60 < m) m = 60 - (100 - m);
  return `${h} hour${1 === h ? '' : 's'} ${m} minute${1 === m ? '' : 's'}`;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(timeDiff('0900 1730'), '8 hours 30 minutes');

strictEqual(timeDiff('1730 0900'), '15 hours 30 minutes');

strictEqual(timeDiff('0030 0031'), '0 hours 1 minute');

strictEqual(timeDiff('0200 0100'), '23 hours 0 minutes');

strictEqual(timeDiff('0031 0030'), '23 hours 59 minutes');

strictEqual(timeDiff('1231 1430'), '1 hour 59 minutes');
