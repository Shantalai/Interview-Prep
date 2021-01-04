//344. Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var temp;
    for(var i = 0, j= s.length-1; i<Math.floor(s.length/2); i++, j--){
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    return s;
};

//345. Reverse Vowels of a String
// can not index the Javascript string - have to convert to array. 
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var temp;
    var st = s.split('');
    var vow = ["a","e","i","o","u","A","E","I","O","U"];
    var pos = [];
    for(var i=0; i<st.length; i++){
          if(vow.indexOf(st[i]) !== -1){
              pos.push(i);
          } 
    }
    for(var i=0, j=pos.length-1; i<Math.floor(pos.length/2); i++, j--){
        temp = st[pos[i]];
        st[pos[i]] = st[pos[j]]
        st[pos[j]] = temp
    }
    
    return st.join('');
};
//349. Intersection of Two Arrays 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var number = [];
    if(nums1.length>=nums2.length){
        for(var i=0; i<nums2.length; i++){
            if(nums1.indexOf(nums2[i]) !== -1){
                if(number.indexOf(nums2[i]) === -1){
                    number.push(nums2[i]);
                }
            }
        }
    }else{
        for(var i=0; i<nums1.length; i++){
            if(nums2.indexOf(nums1[i]) !== -1){
                if(number.indexOf(nums1[i]) === -1){
                    number.push(nums1[i]);
                }
            }
        } 
    }
    return number;
};

//350. Intersection of Two Arrays II
//tunr arrays to Javascript maps and traverse by key
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var number = [];
    var count1={};
    var count2={};
    nums1.forEach(function(i){
        count1[i]=(count1[i]||0)+1;
    });
    nums2.forEach(function(i){
        count2[i]=(count2[i]||0)+1;
    });
    
    for(var key in count1){
        if(count2.hasOwnProperty(key)){
            if(number.indexOf(key) ===-1){
                if(count1[key]>count2[key]){
                    for(var i=count2[key]; i>0; i--){
                        number.push(key);
                    }
                }else{
                    for(var i=count1[key]; i>0; i--){
                        number.push(key);
                    }
                }
            }
        }
    }
    return number
};

/* LINKED LIST PROBLEMS
*****************************/

//21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  
    let l = new ListNode();
    let head = l;
    
    while(true){
    if(l1 == null){
        l.next=l2;
        break;
    }else if(l2 == null){
        l.next=l1
        break;
    }else{
        if(l1.val<=l2.val){
            l.next = new ListNode(l1.val, null);
            l = l.next;
            l1 = l1.next;
        }else{
            l.next = new ListNode(l2.val, null);
            l = l.next;
            l2 = l2.next;
        }
    }
    }
    return head.next;
};

//206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(head == null){
        return head;
    }
    let prev = head;
    let cur = head;
    let next = head.next;
    head.next = null;
    
    while(next != null){
    cur = next;
    next = next.next;
    cur.next = prev;
    head = cur;
    prev = head;  
    }
    
    return head;
};

//104. Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root==null){
        return 0;
    }
    
    var maxRight = maxDepth(root.right);
    var maxLeft = maxDepth(root.left);
    
    if(maxRight > maxLeft){
        return(maxRight+1);
    }else{
        return(maxLeft+1);
    }
};
