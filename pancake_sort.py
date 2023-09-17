class Solution:
    def pancakeSort(self, arr: List[int]) -> List[int]:
        def get_k(lst):
            maxx = 0
            for i in range(len(lst)):
                maxx = i if lst[i] > lst[maxx] else maxx
            return maxx

        k_arr = []
        n = len(arr)
        for i in range(n):
            k = get_k(arr[0: n-i])
            if (k != 0):
                k_arr.append(k+1)
                arr[0:k+1] = list(reversed(arr[0:k+1]))
            arr[0:n-i] = list(reversed(arr[0:n-i]))
            k_arr.append(n-i)
        return k_arr
