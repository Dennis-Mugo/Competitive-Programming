class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        def check_arithmetic(arr):
          arr.sort()
          diff = arr[1] - arr[0]
          for i in range(1, len(arr)):
            if arr[i] - arr[i - 1] != diff:
              return False
          return True
        res = []
        m = len(l)
        for i in range(m):
          left, right = l[i], r[i]
          res.append(check_arithmetic(nums[left:right+1]))
        return res
