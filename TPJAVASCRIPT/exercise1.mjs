"use strict";

// non recursive
export function fiboIt(n) {
    let u_2 = 0;
    let u_1 = 1;
    if (n === 0){
        return(u_2)
    }
    if (n === 1){
        return(u_1)
    }
    else{
        let k = 1
        while (k < n){
            k++;
            let temp = u_1;
            u_1 = u_1 + u_2;
            u_2 = temp
        }
        return(u_1)
    }
    
}




// recursive function
export function fiboRec(n) {
    let result;
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else{
        return fiboRec(n-1) + fiboRec(n-2);
    }
}

// no map function
export function fiboArr(t) {
    var L = t.length;
    for (var i = 0; i < L; i++){
        t[i] = fiboRec(t[i]);
    }
    return t;
}

// use of map
export function fibonaMap(t) {
    return t.map(fiboRec);
}