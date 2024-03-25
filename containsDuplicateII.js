// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

 

// Constraints:

//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     0 <= k <= 105

/**
//  **runtime limit exceeded
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j < nums.length; j++){

            if( nums[i]===nums[j] && Math.abs(i-j)<=k){

                return true
                
            }
        }
    }return false
};
// winner
//runtime 80ms -- accepted
var containsNearbyDuplicate = function(nums, k) {
    // Initialize a Map to store the indices of previously seen elements
    const numIndexMap = new Map();

    // Iterate through the array 'nums'
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; // Get the current number
        
        // If the number has been seen before within distance 'k'
        if (numIndexMap.has(num) && i - numIndexMap.get(num) <= k) {
            return true; // Found a duplicate within 'k' distance
        }

        // Update the index of the current number or add it to the map if it's new
        numIndexMap.set(num, i);
    }

    // If no duplicates within 'k' distance are found, return false
    return false;
};
// 94 ms
var containsNearbyDuplicate = function(nums, k) {
    // Initialize a Map to store the indices of previously seen elements
    const numIndexMap = new Map();

    // Iterate through the array 'nums'
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; // Get the current number
        
        // If the number has been seen before within distance 'k'
        if (numIndexMap.has(num) && i - numIndexMap.get(num) <= k) {
            return true; // Found a duplicate within 'k' distance
        }

        // Update the index of the current number or add it to the map if it's new
        numIndexMap.set(num, i);
    }

    // If no duplicates within 'k' distance are found, return false
    return false;
};
// You're correct, my apologies for the oversight. In the provided algorithm, the check for i - j <= k is implicit due to the way the sliding window is managed. Let me explain:

// In the original algorithm, the condition i - j <= k ensures that the difference between the indices of two duplicate elements is less than or equal to k. However, in the optimized algorithm using the sliding window approach, this condition is implicitly satisfied by the way the window is updated.

// Here's why:

//     The sliding window's size is maintained as k + 1. Initially, the window contains elements from index 0 to index k.

//     As the algorithm iterates through the array, it removes the oldest element from the window whenever the index i exceeds k. This ensures that the window only contains elements within a distance of k from the current element.

//     When the algorithm encounters a duplicate element within the set, it immediately returns true, indicating that a duplicate within distance k has been found.

// By maintaining the sliding window size and managing it properly, the algorithm implicitly ensures that the difference between the indices of two duplicate elements is less than or equal to k. Therefore, even though there isn't an explicit check for i - j <= k, the algorithm effectively handles this condition through its sliding window mechanism.