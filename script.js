let size=20;
let check=[];

for(let i=0;i<size;i++){
    check.push([])
    for(let j=0;j<size;j++){
        check[i].push(1);
    }
}

document.getElementById("main").style.gridTemplateColumns="repeat("+size+","+70/size+"vw)";
document.getElementById("main").style.gridTemplateRows="repeat("+size+","+70/size+"vw)";

for(let i=0;i<size*size;i++){
    document.getElementById("main").innerHTML+='<div class="block red" id="'+i+'">'+i+'</div>'
}

let mines=[];
for(let i=0;i<size;i++){
    let num=Math.floor(Math.random()*size*size);
    if(num){
        num=size*size;
    }
    mines.push(num);
}

let arr=[];

const isexist = (num)=>{
    if(num>=0 && num<size*size){
        return 1;
    }
    else{
        return 0;
    }
}

for(let i=0;i<size*size;i++){
    document.getElementById(i.toString()).addEventListener('onclick',()=>{
        
    })
}