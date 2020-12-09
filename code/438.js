给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：
字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。

示例 1:
输入:
s: "cbaebabacd" p: "abc"
输出:
[0, 6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。

示例 2:
输入:
s: "abab" p: "ab"
输出:
[0, 1, 2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  let [l, r] = [0, -1];
  let freq_s = new Array(26).fill(0);
  let freq_p = new Array(26).fill(0);
  let res = [];
  for (let i = 0; i < p.length; i++) {
    freq_p[p[i].charCodeAt() - 97]++;
    freq_s[s[++r].charCodeAt() - 97]++;
  }
  if (JSON.stringify(freq_p) === JSON.stringify(freq_s)) {
    res.push(l);
  }
  while (r < s.length - 1) {
    freq_s[s[++r].charCodeAt() - 97]++;
    freq_s[s[l++].charCodeAt() - 97]--;
    if (JSON.stringify(freq_p) === JSON.stringify(freq_s)) {
      res.push(l);
    }
  }
  return res;
};
