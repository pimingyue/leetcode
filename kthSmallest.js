 //     给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
 // 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。

 //  例子：
 // matrix = [
 // [ 1,  5,  9],
 // [10, 11, 13],
 // [12, 13, 15]
 // ],
 // k = 8,

 // 返回 13。


 var kthSmallest = function(matrix, k) {
     var nums = [];
     var temp = 0;
     console.log(matrix);
     for (var i = 0; i < matrix.length; i++) {
         for (var j = 0; j < matrix[i].length; j++) {
             nums.push(matrix[i][j])
         }
     }

     for (var i = 0; i < nums.length; i++) {
         for (var j = i + 1; j < nums.length; j++) {
             if (nums[i] > nums[j]) {
                 temp = nums[i];
                 nums[i] = nums[j];
                 nums[j] = temp
             }
         }
     }
     console.log(nums)
     return (nums[k - 1])

 }

 var matrix = [
     [1, 5, 9],
     [10, 11, 13, 19],
     [12, 13, 15, ]
 ]

 kthSmallest(matrix, 9)