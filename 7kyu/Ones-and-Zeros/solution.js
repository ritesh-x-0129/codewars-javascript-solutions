const binaryArrayToNumber = arr => {
  

// Convert array [1,0,1,0] into string "1010" 
let binary = arr.join('');      


// 2 means the string is in binary (base 2), so convert it to decimal
let decimal = parseInt(binary, 2);    

return decimal
 
};

console.log(binaryArrayToNumber([1, 0, 1, 0]))