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
    let set = new Set()
    for(let i =0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])

        if(set.size>k){
            set.delete(nums[i-k])
        }
    }
    return false
};

