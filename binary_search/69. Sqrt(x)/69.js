/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1) return x
        let l = 0
        let r = x
        while ( (r - l) > 1){
            m = Math.floor((r + l) / 2)
            if (m ** 2 == x) return m
            if (m ** 2 > x) r = m
            if (m ** 2 < x) l = m
        }

        return l
};