
/* 一次遍历，使用index记录 值为零的元素位置，遇到 非零元素，将当前元素和index位置元素交换，index向后移动 */
void moveZeroes(int* nums, int numsSize) {
  int index = 0;
  for (int i = 0; i < numsSize; i++) {
    if (nums[i] != 0) {
      int tmp = nums[i];
      nums[i] = nums[index];
      nums[index] = tmp;
      index++;
    }
  }
}

/* 两次遍历，index记录值为0元素位置，遇到非零元素，将index位置元素替换成当前元素，index向后移动一个位置。第二次遍历，将index后面元素置0。*/
void moveZeroes(int* nums, int numsSize) {
  int index = 0;
  for (int i = 0; i < numsSize; i++) {
    if (nums[i] != 0) {
      nums[index++] = nums[i];
    }
  }

  while (index < numsSize) {
    nums[index++] = 0;
  }
}
