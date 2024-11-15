class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack=[]
        j=0
        for i in range(len(pushed)):
            stack.append(pushed[i])
            while len(stack)!=0 and stack[-1]==popped[j]:
                stack.pop()
                j+=1
        if len(stack)==0:
            return True
        return False
