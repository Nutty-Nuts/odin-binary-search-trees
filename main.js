class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/*
 * BinarySearchTree Data Methods
 *
 * insert, insert a node based on value
 * delete, delete a node based on value
 * find, find a node based on value
 */

/*
 * BinarySearchTree Search Traversal Methods
 *
 * levelOrder, travesrses via breadth-first levelOrder
 * inorder, preorder, postorder, traverses via respective depth-first order
 */

/*
 * BinarySearchTree Length Methods
 *
 * height, returns the height of a node
 * depth, returns the depth of a node
 */

/*
 * BinarySearchTree Balancing Methods
 *
 * isBalanced, checks if BinarySearchTree is isBalanced
 * reBalance, reBalance a unbalanced BinarySearchTree
 */

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}
