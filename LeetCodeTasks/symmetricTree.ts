class TreeNode {
      val: number | null
      left: TreeNode | null
      right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


function isSymmetric(root: TreeNode | null): boolean {
    function symmetric(left:TreeNode,right: TreeNode){
        if(!left&&!right){
            return true
        }
        if(!left&&!right){
            return false
        }
        return left.val === right.val && symmetric(left.left, right.right) && symmetric(left.right, right.left);
    }
    if (!root) {
        return true;
    }
    return symmetric(root.left, root.right);
}
isSymmetric(new TreeNode(3, new TreeNode(4), new TreeNode(2, new TreeNode(5))))
