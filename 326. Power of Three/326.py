class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 1: 
            return True
        if (n % 3 == 0):
            n = n // 3
            self.isPowerOfThree(n)
        else:
            return False


n = int(input())
solution = Solution()
print(solution.isPowerOfThree(n))        