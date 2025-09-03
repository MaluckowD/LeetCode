/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args)
    let time = setInterval( () => {
        fn(...args)
    }, t)


    return () => {
        setTimeout( () => {
            clearInterval(time)
        })
    }
};