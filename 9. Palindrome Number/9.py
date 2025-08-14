class Solution:
    def isPalindrome(self, x: int) -> bool:
        a = x
        if a < 0:
            return False
        if a == 0:
            return True
        lst = []
        while x > 0:
            lst.append(str(x % 10))
            x = x // 10
        b = int("".join(lst))

        if a == b:
            return True
        else:
            return False
