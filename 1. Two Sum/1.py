class Solution:
    def twoSum(self, nums, target):
        nums1 = sorted(nums)
        n = len(nums1)
        a_val = 0
        b_val = 0
        found = False
        
        for i in range(n):
            a1 = nums1[i]
            a2 = target - a1
            l, r = i + 1, len(nums1) - 1
    
            while l <= r:
                middle = (l + r) // 2
                if nums1[middle] == a2:
                    a_val = nums1[i]
                    b_val = nums1[middle]
                    found = True
                    break
                elif nums1[middle] < a2:
                    l = middle + 1
                else:
                    r = middle - 1
            if found:
                break
                
        result = []
        for i in range(len(nums)):
            if nums[i] == a_val or nums[i] == b_val:
                result.append(i)
                if len(result) == 2:
                    break
                    
        return result
    
solution = Solution()
nums = [2,7,11,15]
target = 9
print(solution.twoSum(nums, target))