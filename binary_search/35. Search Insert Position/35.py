class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l = -1
        r = len(nums)
        while ((r - l ) > 1):
            m = ( r + l ) // 2
            if nums[m] == target: return m
            if nums[m] > target: r = m
            else: l = m
        
        return r