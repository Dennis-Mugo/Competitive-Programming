class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        res = -1
        while l < r:
            amount = (r - l) * min(height[l], height[r])
            res = max(res, amount)
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return res
