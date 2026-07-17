// ===============================
// HUYỀN CƠ DỊCH QUÁN
// Version 0.1
// ===============================

const castBtn = document.getElementById("castBtn");
const hexagram = document.getElementById("hexagram");
const hexagramName = document.getElementById("hexagramName");
const analysis = document.getElementById("analysis");

castBtn.addEventListener("click", gieoQue);

function gieoQue(){

    hexagram.innerHTML="";
    analysis.innerHTML="";

    let hao=[];

    for(let i=0;i<6;i++){

        let tong=0;

        for(let j=0;j<3;j++){

            tong += Math.random()<0.5 ? 2 : 3;

        }

        hao.push(tong);

    }

    veQue(hao);

}

function veQue(ds){

    hexagram.innerHTML="";

    for(let i=5;i>=0;i--){

        let line=document.createElement("div");

        if(ds[i]==6 || ds[i]==8){

            line.className="line yin";

        }else{

            line.className="line";

        }

        hexagram.appendChild(line);

    }

    const ten=timTenQue(ds);

    hexagramName.innerHTML=ten;

    analysis.innerHTML="Đã lập quẻ thành công.";

}

function timTenQue(ds){

    return "Đang xây dựng dữ liệu 64 quẻ";

}
