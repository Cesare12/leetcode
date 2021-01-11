给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-anagram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let len_s = s.length;
  let len_t = t.length;

  if (len_s !== len_t) return false;

  let record = new Map();
  for (let c of s) {
    let num = record.get(c);
    if (num) {
      record.set(c, ++num);
    } else {
      record.set(c, 1);
    }
  }

  for (let c of t) {
    let num = record.get(c);
    if (!num) {
      return false
    }else{
        record.set(c, --num);
    }
  }
  return true
};
