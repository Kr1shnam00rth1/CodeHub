# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorder(self,node,result):
        if not node:
            return
        result+=str(node.val)
        if (node.right and not node.left):
            result+="()"
        if node.left:
            result+="("
            result=self.preorder(node.left,result)
        if node.right:
            result+="("
            result=self.preorder(node.right,result)
        result+=")"
        return result

    def tree2str(self, root: Optional[TreeNode]) -> str:
        result=self.preorder(root,"")
        return result[0:len(result)-1]
