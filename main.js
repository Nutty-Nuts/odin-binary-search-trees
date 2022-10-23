class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/*
 *  NOTE: buildTree, takes an array of data and creates a balanced BinarySearchTree
 *
 */

/*
 * BinarySearchTree Data Methods
 *
 *  NOTE: insert, insert a node based on value
 *  NOTE: delete, delete a node based on value
 *  NOTE: find, find a node based on value
 *
 */

/*
 * BinarySearchTree Search Traversal Methods
 *
 *  NOTE: levelOrder, travesrses via breadth-first levelOrder
 *  NOTE: inorder, preorder, postorder, traverses via respective depth-first order
 *
 */

/*
 * BinarySearchTree Length Methods
 *
 *  NOTE: height, returns the height of a node
 *  NOTE: depth, returns the depth of a node
 *
 */

/*
 * BinarySearchTree Balancing Methods
 *
 *  TODO: isBalanced, checks if BinarySearchTree is isBalanced
 *  TODO: reBalance, reBalance a unbalanced BinarySearchTree
 *
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

    min() {
        let current = this.root;

        while (current.left !== null) current = current.left;

        return current.data;
    }

    max() {
        let current = this.root;

        while (current.right !== null) current = current.right;

        return current.data;
    }

    find(data) {
        let current = this.root;

        while (current.data !== data) {
            if (data < current.data) current = current.left;
            else if (data > current.data) current = current.right;
            else return null;
        }

        return current;
    }

    remove(data) {
        function removeNode(node, data) {
            if (node == null) return null;

            if (data == node.data) {
                if (node.left == null && node.right == null) return null;
                if (node.left == null) return node.right;
                if (node.right == null) return node.left;

                let temp = node.right;
                while (temp.left !== null) temp = temp.left;

                node.data = temp.data;
                node.right = removeNode(node.right, temp.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    height(data) {
        let current = this.root;

        while (current.data !== data) {
            if (data > current.data) current = current.right;
            else if (data < current.data) current = current.left;
            else return null;
        }

        function findHeight(node, height = 0) {
            if (node == null) return height;

            let lowestLeftNode = findHeight(node.left, height + 1);
            let lowestRightNode = findHeight(node.right, height + 1);

            return lowestLeftNode > lowestRightNode
                ? lowestLeftNode
                : lowestRightNode;
        }

        return findHeight(current);
    }

    depth(data) {
        let current = this.root;
        let depth = 1;

        while (current.data !== data) {
            depth++;
            if (data > current.data) current = current.right;
            else if (data < current.data) current = current.left;
            else return null;
        }
        return depth;
    }

    levelOrder() {
        let root = this.root;
        let current = this.root;

        let queue = [];
        let data = [];
        queue.push(root);

        while (queue.length !== 0) {
            data.push(current.data);
            if (current.left !== null) queue.push(current.left.data);
            if (current.right !== null) queue.push(current.right.data);
            queue.shift();

            current = this.root;
            while (current.data !== queue[0] && queue.length !== 0) {
                if (queue[0] < current.data) current = current.left;
                else if (queue[0] > current.data) current = current.right;
            }
        }
        return data;
    }

    inorder() {
        // inorder traversal method
        let array = [];
        let root = this.root;

        function traverse(node) {
            if (node === null) return;

            traverse(node.left);
            array.push(node.data);
            traverse(node.right);
        }

        traverse(root);

        return array;
    }

    preorder() {
        // preorder traversal method

        let array = [];
        let root = this.root;

        function traverse(node) {
            if (node === null) return;

            array.push(node.data);

            traverse(node.left);
            traverse(node.right);
        }

        traverse(root);

        return array;
    }

    postorder() {
        // postorder traversal method

        let array = [];
        let root = this.root;

        function traverse(node) {
            if (node === null) return;

            traverse(node.left);
            traverse(node.right);

            array.push(node.data);
        }

        traverse(root);

        return array;
    }
}

let array = [10, 5, 15, 3, 7, 13, 17, 16];
let tree = new BinarySearchTree();

tree.buildTree(array);
tree.print();

console.log(tree);
console.log(tree.min());
console.log(tree.max());
console.log(tree.find(15));

tree.remove(15);
tree.print();

tree.print();

tree.insert(6);
tree.insert(8);
tree.insert(9);
tree.insert(10);
tree.insert(10);

tree.print();

console.log(tree.depth(3));
console.log(tree.height(10));

console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
