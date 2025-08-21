class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        l = 0
        r = len(arr) - 1
        while ( r - l ) > 1:
            m = ( r + l ) // 2
            if arr[m] > arr[m+1]: r = m
            else: l = m
        
        return r