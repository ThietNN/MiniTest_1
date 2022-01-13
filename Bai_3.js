let sample = [0,12,25,1998,"thietnn","a","b","c",2,3,5];
let x;
let total = 0;
for(x=0;x<sample.length;x++) {
    if (Number.isInteger(sample[x])) {
        if(sample[x]===2){
            total += sample[x];
        }
        else if(sample[x]>2) {
            if (checkPrime(sample[x])) {
                total += sample[x];
            }
        }
        else {
        }
    }
}
function checkPrime() {
    let n;
    let check = true
    for (n = 2; n <= Math.sqrt(sample[x]); n++) {
        if (sample[x] % n == 0) {
            check = false;
            break;
        }
    }
    return check;
}
document.getElementById("result").innerText = "Tổng các số nguyên tố trong mảng là:" + total
