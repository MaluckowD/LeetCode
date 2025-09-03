/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left <= right){
        curr_sum = numbers[left] + numbers[right]
        if (curr_sum == target) return [left + 1, right + 1]
        else if (curr_sum < target) left++
        else right--
    }
};