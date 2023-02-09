module.exports = function reverse (n) {
  let str = String(n)
    let i = 0;
  let result = ''

if (str[0] === '-') {
    i = 1
} else  i = 0;

  while(i < str.length) {
    result = str[i] + result
    i = i + 1
}
let res = Number.result
return result
}
