/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return ""
    }
    const mn = Math.min(...strs.map(s => s.length))

    for ( let k = 0; k < mn; k++){
        current_char = strs[0][k]
        for (const s = 0; s < strs.length; s++){
            if (s[k] != current_char){
                return strs[0].substring(0, k)
            }
        }
    }

    return strs[0].substring(0, mn)
};