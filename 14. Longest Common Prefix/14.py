class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        
        mn = min(len(s) for s in strs)
        if mn == 0:
            return ""
        
        for k in range(mn):
            current_char = strs[0][k]
            for s in strs:
                if s[k] != current_char:
                    return strs[0][:k]
        
        return strs[0][:mn]