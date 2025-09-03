class Solution:
    def searchRange(self, nums, target):
        def find_first():
            left, right = 0, len(nums) - 1
            first = -1
            while left <= right:
                mid = (left + right) // 2
                if nums[mid] >= target:
                    if nums[mid] == target:
                        first = mid
                    right = mid - 1
                else:
                    left = mid + 1
            return first
        
        def find_last():
            left, right = 0, len(nums) - 1
            last = -1
            while left <= right:
                mid = (left + right) // 2
                if nums[mid] <= target:
                    if nums[mid] == target:
                        last = mid
                    left = mid + 1
                else:
                    right = mid - 1
            return last
        
        if not nums:
            return [-1, -1]
        
        first = find_first()
        last = find_last()
        
        return [first, last]
        

solution = Solution()
nums = [3,3,5]
target = 3
print(solution.searchRange(nums, target))