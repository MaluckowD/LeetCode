/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = -1
    let r = nums.length
    while (r - l > 1) {
        let m = Math.floor( (r + l) / 2 )
        if (nums[m] === target) return m
        if (nums[m] > target) r = m
        else l = m
    } 
    return r
};