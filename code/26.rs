impl Solution {
  pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
      let mut k = 0;
      if nums.len() > 0 {
          for i in 1..nums.len(){
              if nums[i] != nums[k] {
                  k += 1;
                  nums[k] = nums[i]
              }
          }
          k += 1;
      }
      k as i32
  }
}
    
impl Solution {
  pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
          nums.dedup();
          nums.len() as i32
  }
}
