 // 给定一个整数数组nums 和一个目标值 target,请你在该数组中找到和为目标值的那两个整数，
 // 并返回他们的数组下标
 // 例：nums=[2,7,11,15],target = 9;
 // 因为 nums[0]+nums[1] = 2+7 = 9
 // 所以返回[0,1]

 var twoSum = function(nums, target) {
     for (var i = 0; i < nums.length; i++) {
         for (var j = i + 1; j < nums.length; j++) {

             if (nums[i] + nums[j] == target) {
                 console.log([i, j])
                 return [i, j]

             }
         }
     }

 }

 twoSum([4, 2, 22, 10], 12)