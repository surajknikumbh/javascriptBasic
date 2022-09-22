/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
 
     for(let i=0; i<nums.length; i++){
         for(let j=1; j<nums.length; j++){
             if(nums[i]+nums[j]==target){
                 return [nums.indexOf(i),nums.indexOf(j)];
             }
         }
     }
     return false;
 }
 console.log(twoSum([2,7,11,15],9));