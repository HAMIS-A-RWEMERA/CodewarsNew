      const nextChar = String.fromCharCode(charCode + 1);
​
      // Condition 2: Alphabetical neighbors are absent
      // 'a' has no prev, 'z' has no next
      const prevAbsent = char === 'a' || !charCounts[prevChar];
      const nextAbsent = char === 'z' || !charCounts[nextChar];
​
      if (prevAbsent && nextAbsent) {
        lonelyCount++;
      }
    }
  }
​
  return lonelyCount;
}
​
// Test Cases
console.log(countLonelyLetters("ad"));           // Output: 2 (a, d)
console.log(countLonelyLetters("abc"));          // Output: 0
console.log(countLonelyLetters("Hello, World!")); // Output: 3 (h, w, r) - 'o', 'l', 'd' are not
console.log(countLonelyLetters("A-dA"));         // Output: 1 (d is lonely, A appears twice)
console.log(countLonelyLetters("zz"));           // Output: 0
​