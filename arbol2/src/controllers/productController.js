import BST from '../tree/BST.js';
const bst = new BST();

export function insertProduct(id, name, price) {
    bst.insert(id, name, price);
}

export function searchProduct(id) {
    const node = bst.search(id);
    if (node !== null) {
        return node.product;
    } else {
        return null;
    }
}
export function getMinValueProduct() {
    let minValueProduct = null;

    const findMinValue = (node) => {
        if (node === null) return;
        
        if (minValueProduct === null || node.product.price < minValueProduct.product.price) {
            minValueProduct = node;
        }

        findMinValue(node.left);
        findMinValue(node.right);
    };

    findMinValue(bst.root);
    
    if (minValueProduct !== null) {
        return minValueProduct.product;
    } else {
        return null;
    }
}

export function getMaxValueProduct() {
    let maxValueProduct = null;

    const findMaxValue = (node) => {
        if (node === null) return;
        
        if (maxValueProduct === null || node.product.price > maxValueProduct.product.price) {
            maxValueProduct = node;
        }

        findMaxValue(node.left);
        findMaxValue(node.right);
    };

    findMaxValue(bst.root);
    
    if (maxValueProduct !== null) {
        return maxValueProduct.product;
    } else {
        return null;
    }
}


export function printProducts(callback) {
    bst.inOrderTraversal(callback);
}
