// Group Anagrams
// Given an array (arr) of strings, group anagrams together.

function groupAnagrams(arr) {
  const map = new Map();
  for (let word of arr) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, [word]);
    } else {
      let curr = map.get(key);
      map.set(key, [...curr, word]);
    }
  }
  return map.values();
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
