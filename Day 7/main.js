function countVowelConsonant(str) {
  // write code here
  
  const splitText = str.toLowerCase().split("");
  let vowelConsonant = 0;
  
  splitText.forEach(function (char) {
      if(char == "a" || char == "i" || char == "u" || char == "e" || char == "o") {
          vowelConsonant += 1;
      } else {
          vowelConsonant += 2;
      }
    });
  
  return vowelConsonant;
  
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});