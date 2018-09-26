/**
 * @name 递归
 */

 const recursion = (num) => {
     if(num === 1) return num
     return num * recursion(num - 1)
 }