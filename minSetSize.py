class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        hashmap = collections.Counter(arr)
        freq = list(hashmap.values())
        n = len(arr)
        res = 0
        freq.sort(reverse=True)
        summ = 0
        for f in freq:
            if (summ >= ceil(n / 2)):
                return res
            summ += f
            res += 1
        return res
