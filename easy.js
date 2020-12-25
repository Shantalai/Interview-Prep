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
