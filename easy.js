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
