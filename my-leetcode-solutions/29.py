class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        res=(dividend/divisor)
        if res>2**31 -1 or res< -2**31:
            if res>0:
                return 2**31-1
            return -2**31
        if res>0:
            return math.floor(dividend/divisor)
        return math.ceil(dividend/divisor)
