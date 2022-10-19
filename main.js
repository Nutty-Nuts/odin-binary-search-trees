class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/*
 * buildTree, takes an array of data and creates a balanced BinarySearchTree
 */

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

    print() {
        const node = this.root;
        function prettyPrint(node, prefix = "", isLeft = true) {
            if (node.right !== null) {
                prettyPrint(
                    node.right,
                    `${prefix}${isLeft ? "│   " : "    "}`,
                    false
                );
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
            if (node.left !== null) {
                prettyPrint(
                    node.left,
                    `${prefix}${isLeft ? "    " : "│   "}`,
                    true
                );
            }
        }
        prettyPrint(node);
    }

    buildTree(array) {
        for (let data of array) {
            const node = this.root;

            if (node === null) {
                this.root = new Node(data);
                continue;
            }

            function search(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) return search(node.left);
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) return search(node.right);
                } else {
                    return null;
                }
            }
            search(node);
        }
    }

    insert(data) {
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        }

        function search(node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) return search(node.left);
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                } else if (node.right !== null) return search(node.right);
            } else {
                return null;
            }
        }
        return search(node);
    }
}
let array = [10, 5, 15, 3, 7, 13, 17];
let tree = new BinarySearchTree();

tree.buildTree(array);
tree.print();

console.log(tree);
