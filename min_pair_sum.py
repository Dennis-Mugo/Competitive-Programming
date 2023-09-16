class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()
        min_pair_sum = 0
        l, r = 0, len(nums) - 1
        while l < r:
            pair_sum = nums[l] + nums[r]
            min_pair_sum = max(min_pair_sum, pair_sum)
            l += 1
            r -= 1
        return min_pair_sum
