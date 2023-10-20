class Solution:
    def hIndex(self, citations: List[int]) -> int:
        c = citations
        c.sort(reverse=True)
        if len(c)==1 and c[0]>0:
            return 1
        if c[-1]>=len(c):
            return len(c)
        for i in range(len(c)):
            if c[i]<i+1:
                return i
        return 0
