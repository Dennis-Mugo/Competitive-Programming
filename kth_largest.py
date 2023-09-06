class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        nums = sorted([int(num) for num in nums])
        return str(nums[-k])
