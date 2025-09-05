/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count_0 = 0
    let count_1 = 0
    let count_2 = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0) count_0 ++
        if (nums[i] === 1) count_1 ++
        if (nums[i] === 2) count_2 ++
    }

    for (let i = 0; i < nums.length; i++){
        if (count_0 !== 0){
            nums[i] = 0
            count_0 -= 1
            continue
        }
            
        if (count_1 !== 0){
                nums[i] = 1
            count_1 -= 1
            continue
        }
            
        if (count_2 !== 0) {
            nums[i] = 2
            count_2 -= 1
            continue
        }
    }
        
    return nums
};