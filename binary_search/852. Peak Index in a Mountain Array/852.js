/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0
    let r = len(arr) - 1
    while (( r - l ) > 1) {
        let m = Math.floor( r + l ) / 2
        if (arr[m] > arr[m+1])  r = m
        else l = m
    }
        
    return r
};