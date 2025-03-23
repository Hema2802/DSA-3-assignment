

// fibonacci approach

let n=3;

let climb=1;
let climb2=2;
let temp;
for(let i=3;i<=n;i++){
     temp=climb+climb2;
     climb=climb2;
     climb2=temp;
}
console.log("Number of ways to climb to the top is",climb2) ;