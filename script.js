const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
    // Write your code here
    let result = [];      // This will store our subarrays
    let currentChunk = []; // Current subarray we're building
    let currentSum = 0;    // Sum of current subarray
    
    for (let i = 0; i < arr.length; i++) {
        // Check if adding current element exceeds the limit
        if (currentSum + arr[i] <= n) {
            // If it fits, add to current chunk
            currentChunk.push(arr[i]);
            currentSum += arr[i];
        } else {
            // If it doesn't fit, save current chunk and start new one
            result.push(currentChunk);
            currentChunk = [arr[i]];  // Start new chunk with current element
            currentSum = arr[i];      // Reset sum to current element
        }
    }
    
    // Don't forget the last chunk!
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }
    
    return result;
};
const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n)));
