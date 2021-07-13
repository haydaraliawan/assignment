let r = 17;
function isPrime(n){
    for(let i=2; i<n ; i++){
        if(n%i == 0){
            return 0;
        }else{
            return 1;    
        }
    }
}

let valueCheck = isPrime(r);
if(valueCheck==1){
    console.log('Given number is prime');
}else console.log('Given number is not prime');