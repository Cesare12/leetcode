/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    for(let i in nums){
        if(nums[i]){
            if(i !== index){
                [nums[i], nums[index]] = [nums[index], nums[i]];
                index++;
            } else {
                index++;
            }
        }
    }
};


var moveZeroes = function(nums) {
    let index = 0;
    for(let i in nums){
        if(nums[i]){
                [nums[i], nums[index]] = [nums[index], nums[i]];
                index++;
        }
    }
};
