/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true
    let l = 0
    let r = num
    while ( r - l > 1) {
        let m = Math.floor((r + l) / 2)

        if (m * m == num) return true
        if (m * m > num) r = m
        else l = m
    }

    return false
};