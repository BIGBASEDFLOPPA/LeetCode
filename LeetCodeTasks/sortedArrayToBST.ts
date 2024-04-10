
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


function sortedArrayToBST(nums: number[]): TreeNode | null {
    const buildTree = (left, right) => {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = buildTree(left, mid - 1);
        node.right = buildTree(mid + 1, right);

        return node;
    };

    return buildTree(0, nums.length - 1);
};
  const inorderTraversal = (root) => {
      const result = [];

      const traverse = (node) => {
          if (node === null) {
              return;
          }

          traverse(node.left);
          result.push(node.val);
          traverse(node.right);
      };

      traverse(root);

      return result;
  };

  const nums = [-10, -3, 0, 5, 9];
  const root = sortedArrayToBST(nums);
  const inorder = inorderTraversal(root);
  console.log(inorder);

