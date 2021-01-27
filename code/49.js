给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} strs
 * @return {string[][]}
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
        } else {
            record.set(c, --num);
        }
    }
    return true
};
var groupAnagrams = function (strs) {
    if(strs.length <= 0) return []
    let res = [[strs[0]]];
    for (let i = 1; i < strs.length; i++) {
        let flag = 1;
        for (let item of res) {
            if (isAnagram(item[0], strs[i])) {
                item.push(strs[i]);
                flag = 0;
                break;
            }
        }
        if (flag) {
            res.push([strs[i]])
        }
    }
    return res
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};
