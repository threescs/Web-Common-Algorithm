/**
 * @name 斐波那契数列:
 * @description 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... 求第n个数是多少
 */

//  第n个数 就是 第n个数 第前两个数之和 通过递归就算出来
    const fibonacci = (number) => {
        if(number <= 2 ){
            return 1;
        }
        return fibonacci(number - 1 ) + fibonacci(number - 2);
    }
console.log(fibonacci(5));
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(30));