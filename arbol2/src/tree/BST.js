import Product from '../models/Product.js';
import Node from './Node.js';

class BST {
    constructor() {
        this.root = null;
    }

    insert(id, name, price) {
        const newProduct = new Product(id, name, price);
        const newNode = new Node(newProduct);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insert(this.root, newNode);
        }
    }

    _insert(node, newNode) {
        if (newNode.product.id < node.product.id) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insert(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insert(node.right, newNode);
            }
        }
    }

    search(id) {
        return this._search(this.root, id);
    }

    _search(node, id) {
        if (node === null || node.product.id === id) {
            return node;
        }
        if (id < node.product.id) {
            return this._search(node.left, id);
        } else {
            return this._search(node.right, id);
        }
    }

    getMinValueNode() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    getMaxValueNode() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current;
    }

    inOrderTraversal(callback) {
        this._inOrderTraversal(this.root, callback);
    }

    _inOrderTraversal(node, callback) {
        if (node !== null) {
            this._inOrderTraversal(node.left, callback);
            callback(node.product);
            this._inOrderTraversal(node.right, callback);
        }
    }
}

export default BST;
