class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.num = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        let c = this.num
        this.num = this.num + value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        let c = this.num
        this.num -= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        let c = this.num
        this.num = this.num * value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0){
            throw new Error("Division by zero is not allowed");
        }
        let c = this.num
        this.num = this.num / value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        let c = this.num
        this.num = Math.pow(this.num, value)
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.num
    }
}