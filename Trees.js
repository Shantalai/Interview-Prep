
//Binary Tree Level Order Traversal (first dumb solution)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root==null){
        return []
    }
    let st1 = []
    let st2 = []
    let m = []
    
    st1.push(root);
    while(st1.length>0||st2.length>0){
    if(st1.length>0){
        let l = []
        for(var i=0;i<st1.length; i++){
          l.push(st1[i].val);
        }
        m.push(l)
    }
    while(st1.length >0){
        
        var node = st1.shift();
        if(node.left!=null){
            st2.push(node.left);
        }
        if(node.right!=null){
            st2.push(node.right);
        } 
    }
    if(st2.length>0){
        let l =[]
        for(var i=0;i<st2.length; i++){
          l.push(st2[i].val);
        }
        m.push(l)
    }
    while(st2.length>0){
        
        var node = st2.shift();
        if(node.left!=null){
            st1.push(node.left);
        }
        if(node.right!=null){
            st1.push(node.right);
        } 
        }
    }
    return m;
};
