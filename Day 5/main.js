function reverseAString(str) {
    //  write code here.
    return str.split("").reverse().join("");
    // Split the stiring into array, reverse them, and join them after that back into string again
}



/**
* Test Suite 
*/
describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        // arrange
        const str = 'hello';
        
        // act
        const result = reverseAString(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('olleh');
    });
});