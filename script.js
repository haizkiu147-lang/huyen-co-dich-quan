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
//==============================
// BÁT QUÁI
//==============================

const BATQUAI = {

"111":{
ten:"Càn",
so:1
},

"110":{
ten:"Đoài",
so:2
},

"101":{
ten:"Ly",
so:3
},

"100":{
ten:"Chấn",
so:4
},

"011":{
ten:"Tốn",
so:5
},

"010":{
ten:"Khảm",
so:6
},

"001":{
ten:"Cấn",
so:7
},

"000":{
ten:"Khôn",
so:8
}

};

//==============================
// 64 QUẺ
//==============================

const HEXAGRAM = {

"Càn-Càn":"Thuần Càn",
"Khôn-Khôn":"Thuần Khôn",
"Khảm-Khảm":"Thuần Khảm",
"Ly-Ly":"Thuần Ly",
"Chấn-Chấn":"Thuần Chấn",
"Tốn-Tốn":"Thuần Tốn",
"Cấn-Cấn":"Thuần Cấn",
"Đoài-Đoài":"Thuần Đoài"

};

//==============================

function timTenQue(ds){

let binary=[];

for(let i=0;i<6;i++){

if(ds[i]==7||ds[i]==9){

binary.push(1);

}else{

binary.push(0);

}

}

let ha=

binary[0]+""+
binary[1]+""+
binary[2];

let thuong=

binary[3]+""+
binary[4]+""+
binary[5];

let haName=BATQUAI[ha].ten;

let thuongName=BATQUAI[thuong].ten;

let key=

thuongName+
"-"+
haName;

if(HEXAGRAM[key]){

return HEXAGRAM[key];

}

return key;

}
