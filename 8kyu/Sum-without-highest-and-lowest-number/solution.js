function sumArray(arr) {
    
    let result = 0;
    
    if(arr == null || arr.length < 2) {
        return 0
    }

    let highest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > highest) {
            highest = arr[i]
        }
    }
    
    
     let lowest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < lowest) {
            lowest = arr[i]
        }
    }
     
     let sum = 0;
     for(let i = 0; i < arr.length; i++) {
         sum += arr[i]
     }
     
     result = sum - highest - lowest 
     
     return result
}



