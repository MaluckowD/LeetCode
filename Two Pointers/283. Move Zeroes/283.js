/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            // Перемещаем ноль в конец, сдвигая элементы
            for (let j = i; j < nums.length - 1; j++) {
                // Меняем местами текущий элемент со следующим
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
};