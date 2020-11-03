345. 反转字符串中的元音字母
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1：
输入："hello"
输出："holle"

示例 2：
输入："leetcode"
输出："leotcede"

提示：
元音字母不包含字母 "y" 。

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let [i, j] = [0, s.length - 1];
    let arr = s.split('');
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    while ( i < j ) {
        if (vowel.indexOf(arr[i]) === -1 ) i++;
        if (vowel.indexOf(arr[j]) === -1 ) j--;
        if ( vowel.indexOf(arr[i]) !== -1 && vowel.indexOf(arr[j]) !== -1) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return arr.join('')
};
