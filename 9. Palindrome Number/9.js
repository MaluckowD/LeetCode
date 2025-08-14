function isPalindrome(x) {
    let a = x;
    if (a < 0) {
        return false;
    }
    if (a === 0) {
        return true;
    }
    let lst = [];
    while (x > 0) {
        lst.push(String(x % 10));
        x = Math.floor(x / 10);
    }
    let b = parseInt(lst.join(''));
    
    return a === b;
}