class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if (num == 1): return True
        
        l = 0
        r = num
        while r - l > 1:
            
            m = (r + l) // 2
            if (m ** 2 == num): return True
            if (m ** 2 > num):
                r = m
            else:
                l = m
        return False