class TreeNode {
    val: number;
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val ?? 0)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function preorderTraversal(root: TreeNode | null): number[] {
    let result: number [] = [];
    if (root == null) {
        return result
    }
    let stack: TreeNode[] = []
    stack.push(root);
    while (stack.length !== 0) {
        let current = stack.pop();
        if (current !== undefined) {
            result.push(current.val)
            if (current.left !== null && current.right !== undefined) stack.push(current.left)
            if (current.right !== null && current.right !== undefined) stack.push(current.right)

        }
    }
    return result
};
console.log(preorderTraversal(new TreeNode(0, new TreeNode(1), new TreeNode(2, new TreeNode(3)))))
