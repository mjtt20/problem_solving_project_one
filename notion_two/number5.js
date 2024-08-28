function countVowels(str) {
	let vowels = 'aeiouAEIOU';
	let countingVowels = [...str].filter(letter => vowels.includes(letter));
    let numberOfVowels = countingVowels.length;
	return numberOfVowels;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
