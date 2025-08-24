class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l = -1
        r = len(matrix)
        index = -1
        while (r - l > 1):
            m = ( r + l) // 2
            if matrix[m][0] <= target and matrix[m][-1] >= target:
                index = m
                break
            if target < matrix[m][0]: r = m
            if target > matrix[m][-1]: l = m
        
        left = -1
        right = len(matrix[index])
        while (right - left > 1):
            m = ( right + left ) // 2
            if matrix[index][m] == target: return True
            if matrix[index][m] < target: left = m
            else: right = m
        return False 
        
        