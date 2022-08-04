module.exports = function reverse(n) {
    let numToStr = n.toString();
    let numToStrPositive = numToStr.replace(/[\-]/, '');
    console.log(numToStrPositive);

    let arr = numToStrPositive.split('').reverse();
    let str = arr.join('');

    console.log(str);

    return +(str);
}
