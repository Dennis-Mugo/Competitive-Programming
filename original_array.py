class Solution:
    def findOriginalArray(self, changed: List[int]) -> List[int]:
        res = []
        if (len(changed) % 2):
            return []
        counter = Counter(changed)
        changed.sort()
        for num in changed:
            if num == 0 and counter[num] > 1:
                counter[num] -= 2
                res.append(num)
            elif num > 0 and counter[num] and counter[num * 2]:
                counter[num] -= 1
                counter[num * 2] -= 1
                res.append(num)
        return res if len(res) == len(changed) // 2 else []
