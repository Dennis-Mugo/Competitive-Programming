class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        n = len(nums)
        res = n + 1
        curr_sum = [0]
        for num in nums:
            curr_sum.append(curr_sum[-1] + num)
        queue = collections.deque()
        for i, num in enumerate(curr_sum):
            while queue and curr_sum[queue[-1]] >= num:
                queue.pop()
            while queue and curr_sum[i] - curr_sum[queue[0]] >= k:
                res = min(res, i - queue.popleft())
                
            queue.append(i)
        return res if res < n + 1 else -1
