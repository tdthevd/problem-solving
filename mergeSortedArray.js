// 88. Merge Sorted Array
// Easy
// Topics
// Companies
// Hint

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

 

// Constraints:

//     nums1.length == m + n
//     nums2.length == n
//     0 <= m, n <= 200
//     1 <= m + n <= 200
//     -109 <= nums1[i], nums2[j] <= 109

 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

// /**
//  */**
//  * Merge two sorted arrays nums1 and nums2 in non-decreasing order and modify nums1 in-place.
//  * @param {number[]} nums1 
// // - The first sorted array with extra space for merging.
//  * @param {number} m 
// // - The number of elements in nums1 to be considered.
//  * @param {number[]} nums2 
// // - The second sorted array.
//  * @param {number} n 
// // - The number of elements in nums2.
//  * @return {void} 
// // - Do not return anything, modify nums1 in-place.
 
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Index for nums1
    let j = n - 1; // Index for nums2
    let k = m + n - 1; // Index for the merged result

    // Merge from the end to the beginning
    while (i >= 0 && j >= 0) {
        // Compare elements from the end of both arrays and put the larger one in nums1
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};


// The function uses three pointers (i, j, and k) to keep track of the current position in nums1, nums2, and the merged result, respectively.

// The while loop iterates from the end to the beginning of both arrays (nums1 and nums2). It compares the elements at the current positions (nums1[i] and nums2[j]) and puts the larger one in the last position of nums1 (nums1[k]). The pointers are then decremented accordingly.

// The time complexity is O(m + n) because the algorithm goes through each element in both arrays once. The loop stops when either nums1 or nums2 has been completely processed.

// This approach is more efficient than some other methods (like using .concat() and sorting) because it avoids unnecessary copying and sorting of the entire array. It leverages the fact that both input arrays are already sorted, allowing it to merge them in a single pass with a constant amount of space. The time complexity is optimal for this problem.

// 1. Three Pointers:

// i: It points to the current position in the nums1 array.
// j: It points to the current position in the nums2 array.
// k: It points to the position in the merged result (the end of the nums1 array).

// 2. Iterating from the End:

// The while loop starts from the end of both arrays (nums1 and nums2) and moves towards the beginning.
// It compares the elements at the current positions of nums1[i] and nums2[j].
// The larger element is placed in the last position of nums1 at index k.

// 3. Decrementing Pointers:

// After placing an element in the merged result, the respective pointer (i, j, or k) is decremented.
// This ensures that we move to the previous position in the arrays for the next comparison.

// 4. Time Complexity O(m + n):

// The algorithm goes through each element in both arrays once.
// The loop stops when either nums1 or nums2 has been completely processed.
// The time complexity is O(m + n), where m and n are the lengths of the two input arrays.

// 5. Efficiency:

// This approach is more efficient than some other methods like using .concat() and sorting.
// It avoids unnecessary copying and sorting of the entire array.
// It leverages the fact that both input arrays are already sorted, allowing it to merge them in a single pass.
// The space complexity is constant, as it doesn't require additional space proportional to the input sizes.
