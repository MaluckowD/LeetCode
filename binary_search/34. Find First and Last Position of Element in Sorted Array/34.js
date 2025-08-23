/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function find_first() {
        let left = 0
        let right = nums.length - 1
        let first = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] >= target){
                if (nums[mid] === target) first = mid
                right = mid - 1
            }
            else (left = mid + 1)
                    

        }
        return first
    }

    function find_last() {
        let left = 0
        let right = nums.length - 1
        let last = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] <= target){
                if (nums[mid] == target) last = mid
                left = mid + 1
            }
            else (right = mid - 1)

        }
        return last
    }

    if (nums.length === 0) return [-1, -1]

    let first = find_first()
    let last = find_last()
        
    return [first, last]

};