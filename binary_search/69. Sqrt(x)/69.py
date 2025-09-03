class Solution:
    def mySqrt(self, x: int) -> int:
        if (x == 1): return x
        l = 0
        r = x
        while ( (r - l) > 1):
            m = (r + l) // 2
            if (m ** 2 == x): return m
            if m ** 2 > x: r = m
            if (m ** 2 < x): l = m

        return l