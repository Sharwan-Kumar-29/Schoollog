function UniqueVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const vowelCount = new Set();

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) {
      vowelCount.add(char);
    }
  }

  return vowelCount.size;
}
console.log(UniqueVowels("meeting")); 