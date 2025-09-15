class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        for i in range(len(nums)-1, -1, -1):
            k = -10
            if nums[i] == 0:
                k = i
                for j in range(k, len(nums) - 1):
                    nums[j], nums[j + 1] = nums[j + 1], nums[j]