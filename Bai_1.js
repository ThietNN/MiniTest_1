let sample = [0,12,25,1998,"thiet","nn"];
function run(){
    let n = " ";
    let count = 0;
    for (let x=0;x<sample.length;x++){
        if (sample[x]%2===0){
            count++;
            n += sample[x] + ", ";
        }
    }
    document.getElementById("result").innerText= "Có " + count + " số chẵn trong mảng, đó là: " + n;
}