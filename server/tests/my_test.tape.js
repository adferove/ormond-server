const test = require('tape');

test('Testing log in', function (t) {
  t.plan(1);
  const output = four(plus(nine()));
  t.deepEqual(output, 13);
});

function zero(fn) {
  if (fn !== null && fn !== undefined) return fn(0);
  else return 0;
}
function one(fn) {
  if (fn !== null && fn !== undefined) return fn(1);
  else return 1;
}
function two(fn) {
  if (fn !== null && fn !== undefined) return fn(2);
  else return 2;
}
function three(fn) {
  if (fn !== null && fn !== undefined) return fn(3);
  else return 3;
}
function four(fn) {
  if (fn !== null && fn !== undefined) return fn(4);
  else return 4;
}
function five(fn) {
  if (fn !== null && fn !== undefined) return fn(5);
  else return 5;
}
function six(fn) {
  if (fn !== null && fn !== undefined) return fn(6);
  else return 6;
}
function seven(fn) {
  if (fn !== null && fn !== undefined) return fn(7);
  else return 7;
}
function eight(fn) {
  if (fn !== null && fn !== undefined) return fn(8);
  else return 8;
}
function nine(fn) {
  if (fn !== null && fn !== undefined) return fn(9);
  else return 9;
}

const plus = (fn) => (num) => {
  return fn + num;
};
const minus = (fn) => (num) => {
  return fn - num;
};
const times = (fn) => (num) => {
  return fn * num;
};
const dividedBy = (fn) => (num) => {
  return Math.trunc(num / fn);
};

// function persistence(num) {
//   if (num < 10) return 0;
//   else if (num < 1000) {
//     let t = 1;
//     return getNewValue(num, t);
//   }
// }

// function getNewValue(num, t) {
//   const duple = [...num.toString()];
//   let newResult = 1;

//   duple.forEach((n) => {
//     newResult *= parseInt(n);
//   });

//   if (newResult < 10) return t;
//   else {
//     t++;
//     return getNewValue(newResult, t);
//   }
// }

// function inArray(array1, array2) {
//   const ar2 = array2.toString().replace(/'/g, '');
//   const newAr2 = ar2.split(',');
//   const newSet = [...new Set(array1)];
//   newSet.sort();
//   const resultArray = newSet.filter((item) => {
//     let found = false;
//     newAr2.forEach((el) => {
//       if (el.includes(item)) {
//         found = true;
//         return;
//       }
//     });
//     return found;
//   });
//   return resultArray;
// }

// function solution(number) {
//   let result = '';
//   const eq = [
//     ['O'],
//     ['I', 'X', 'C', 'M'],
//     ['II', 'XX', 'CC', 'MM'],
//     ['III', 'XXX', 'CCC', 'MMM'],
//     ['IV', 'XL', 'CD'],
//     ['V', 'L', 'D'],
//     ['VI', 'LX', 'DC'],
//     ['VII', 'LXX', 'DCC'],
//     ['VIII', 'LXXX', 'DCCC'],
//     ['IX', 'XC', 'CM'],
//   ];
//   const arr = [...number.toString()];
//   let size = arr.length;
//   let pos = size - 1;

//   arr.forEach((item) => {
//     const num = parseInt(item);
//     if (num > 0) {
//       result += eq[num][pos];
//     }
//     pos--;
//   });
//   return result;
// }

// function queueTime(customers, n) {
//   const tills = new Array(n).fill(0);
//   customers.forEach((c) => {
//     assignTill(c, tills);
//   });
//   tills.sort(function (a, b) {
//     return a - b;
//   });
//   return tills[n - 1];
// }

// function assignTill(customer, tills) {
//   const firstFree = findFirsToBeFree(tills);
//   tills[firstFree] = tills[firstFree] + customer;
//   return tills;
// }

// function findFirsToBeFree(tills) {
//   let first = 0;
//   let min;
//   tills.forEach((item, index) => {
//     if (index === 0) {
//       first = index;
//       min = item;
//     } else {
//       if (min > item) {
//         min = item;
//         first = index;
//       }
//     }
//   });
//   return first;
// }

// function order(words) {
//   const splitted = words.split(' ');

//   const items = splitted.reduce((acc, cv) => {
//     const value = cv.match(/\d+/g);
//     const obj = { name: cv, value: value };
//     acc.push(obj);
//     return acc;
//   }, []);

//   items.sort(function (a, b) {
//     return a.value - b.value;
//   });

//   let result = '';
//   items.forEach((item) => (result += item.name + ' '));

//   return result.trim();
// }

// function bouncingBall(h, bounce, w) {
//   if (h > 0 && bounce > 0 && bounce < 1 && w < h) {
//     let views = getViews(h, bounce, w, 1);
//     return views;
//   } else {
//     return -1;
//   }
// }

// function getViews(h, bounce, w, cv) {
//   let nh = h * bounce;
//   if (nh >= w) {
//     cv += 2;
//     return getViews(nh, bounce, w, cv);
//   }
//   return cv;
// }
