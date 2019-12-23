const arvore = {
    value: 1,
    right: {
        value: 3,
        right: {
            value: 7
        },
        left: {
            value: 6
        }
    },
    left: {
        value: 2,
        right: {
            value: 5
        },
        left: {
            value: 4
        }
    }
}


const preOrder = (tree) => {
    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}

const inOrder = (tree) => {
    tree.left && inOrder(tree.left);
    console.log(tree.value);
    tree.right && inOrder(tree.right);
}

const posOrder = (tree) => {
    tree.left && posOrder(tree.left);
    tree.right && posOrder(tree.right);
    console.log(tree.value);
}


console.log('preOrder');
console.log(preOrder(arvore));
console.log('inOrder');
console.log(inOrder(arvore));
console.log('posOrder');
console.log(posOrder(arvore));