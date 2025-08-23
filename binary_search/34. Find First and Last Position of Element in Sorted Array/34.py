class Solution:
    def searchRange(self, nums, target):
        if len(nums) == 0: return [-1, -1]
        if len(nums) == 1 and nums[0] == target: return [0, 0] 
        l = -1
        r = len(nums)
        r1 = -1
        isLeft = -1
        while (r - l >= 2):
            m = (r + l) // 2
            if nums[m] < target: l = m
            else:
                r1 = r
                r = m
        if r == len(nums): return [-1, -1]
        if nums[r] != target: return [-1, -1]
        if r == len(nums) - 1 and nums[r] == target: return [r, r]
        if nums[r] == nums[r+1]: return [r, r + 1]
        if nums[r]  != nums[r+1]: return [r, r]
        

solution = Solution()
nums = [3,3,5]
target = 3
print(solution.searchRange(nums, target))