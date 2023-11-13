/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// The second way

var twoSum = function (nums, target) {
  // use hashMap
  // we will go over the number and find the other half by
  // first num + unknown num = target

  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const numToFind = target - currentNum;

    if (map[numToFind] >= 0) {
      return [map[numToFind], i];
    } else {
      map[currentNum] = i;
    }
  }
};
