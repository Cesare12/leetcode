给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:
输入: pattern = "abba", str = "dog cat cat dog"
输出: true

示例 2:
输入:pattern = "abba", str = "dog cat cat fish"
输出: false

示例 3:
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false

示例 4:
输入: pattern = "abba", str = "dog dog dog dog"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-pattern
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let s = str.split(' ');
  if (pattern.length !== s.length) return false;
  let record = new Map();
  
  for (let i = 0; i < s.length; i++) {
      if (record.has(pattern[i])) {
          if (record.get(pattern[i]) !== s[i]) {
              return false;
          }
      } else {
          record.set(pattern[i], s[i]);
          if ((new Set(record.values())).size !== record.size) return false;
      }
  }
  return true;
};

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let s = str.split(' ');
  if (s.length !== pattern.length) return false

  let record = new Map();
  for (let i = 0; i < s.length; i++) {
    if (record.has(pattern[i])) {
      if (record.get(pattern[i]) !== s[i])
        return false
    } else {
      for (let item of record.values()) {
        if (item === s[i])
          return false
      }
      record.set(pattern[i], s[i]);
    }
  }
  return true
};
