function chunkyMonkey(values, size) {
    //  write code here.
    let slicedArray = [];
    
    if(size <= values.length) {
        const slicedArray1 = values.slice(0,size);
        const slicedArray2 = values.slice(size,values.length);
        
        slicedArray.push(slicedArray1);
        slicedArray.push(slicedArray2);
        
    } else {
        slicedArray = values;
    }
    
    return slicedArray;
}



/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});