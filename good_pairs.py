class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        map = collections.Counter(nums)
        res = 0
        for num in map:
            pairs = map[num] * (map[num] - 1) // 2
            res += pairs
        return res
