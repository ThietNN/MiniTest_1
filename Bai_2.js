let sample = [0,12,25,1998,19,98,12,25];
function run(){
    let input = parseInt(document.getElementById("input").value);
    let count =0;
    let x;
    for(x=0;x<sample.length;x++){
        if(input===sample[x]){
            count++;
        }
    }
    if (count>0){
        document.getElementById("result").innerText= "Có " + count + " phần tử " + input + " trong chuỗi sample"
    }else{
        document.getElementById("result").innerText= "Không tìm thấy phần tử " + input + " trong chuỗi sample"
    }
}