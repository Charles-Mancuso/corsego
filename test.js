// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique 
// characters. What if you cannot use additional data structures?"

// Brute force, time complexity O(n^2)
const isUnique1 = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) return false
    }
  }
  return true
}

console.log(isUnique1("abcd10jk")); // true
console.log(isUnique1("hutg9mnd!nk9")); // false

// Sort method, to sort a string in JS you must split it, sort it, then join it.
// O(n log n)
const isUnique2 = str => {
  sorted = str.split('').sort().join('');
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] == sorted[i + 1]) return false
  }
  return true;
}

console.log(isUnique2("abcd10jk")); // true
console.log(isUnique2("hutg9mnd!nk9")); // false

// const isUnique3 = str => {
//   let hsh = New Hash();
//   console.log(hsh);
// }

// isUnique3('hello');