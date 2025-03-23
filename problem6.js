

let x=2.000;
let n=10;

if(n==0){
    return 1;
}else if(n<0){
    x=1/x;
    n=-n;
}
    let result=1;
    while (n > 0) {
        if (n % 2 !== 0) { 
            result *= x;
        }
        x = x*x; 
        n = Math.floor(n / 2); 
    }
    
    console.log("Ans of x power n is ",result) ;


