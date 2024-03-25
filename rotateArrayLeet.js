// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k is greater than the length of nums
    
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
    
    return nums;
};
// Helper function to reverse elements in the array from start to end index
function reverse(nums, start, end) {
    // While the start index is less than the end index
    while (start < end) {
        // Swap the elements at start and end indices
        
        // Step 1: Temporary storage of the value at start index
        const temp = nums[start];
        
        // Step 2: Overwrite the value at start index with the value at end index
        nums[start] = nums[end];
        
        // Step 3: Assign the temporary value to the end index
        nums[end] = temp;
        
        // Move towards the center of the array by incrementing start and decrementing end indices
        start++;
        end--;
    }
}
