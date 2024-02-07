function divideAndConquerSum(a) {
    
    // Base case: If the array is empty, return 0
    if (a.length === 0){
        return 0;
    }

     // Base case: If the array has only one element, return that element.
    if (a.length === 1){
        return a[0]
    }

    //Split the array into three roguhly equal sub-arrays.
    //Calculate the length of the array. 
    var length = a.length;

    //Calculate the indices to split the array into rouhgly equal sub-arrays.
    var part1 = Math.round(n/3);
    var part2 = part1 * 2;
    
    // Recursively calal the function on the three sub-arrays and sum the result.
    // 1. The first sub-array: from the start of the list to partition 1.
    // 2. The second sub-array: from partition 1 to partition 2.
    // 3. The third sub-array: from partition 2 to the end of the list.
    return divideAndConquerSum(a.slice(0,part1)) + divideAndConquerSum(a.slice(part1,part2)) + divideAndConquerSum(a.slice(part2));
}
