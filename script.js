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
//========================================
// QUẺ BIẾN
//========================================

function taoQueBien(ds){

    let bien=[];

    for(let i=0;i<6;i++){

        switch(ds[i]){

            case 6:
                bien.push(7);
                break;

            case 9:
                bien.push(8);
                break;

            default:
                bien.push(ds[i]);

        }

    }

    return bien;

}

//========================================
// HÀO ĐỘNG
//========================================

function haoDong(ds){

    let list=[];

    for(let i=0;i<6;i++){

        if(ds[i]==6||ds[i]==9){

            list.push(i+1);

        }

    }

    return list;

}

//========================================
// VẼ QUẺ CHỦ & QUẺ BIẾN
//========================================

function veQue(ds){

    hexagram.innerHTML="";

    for(let i=5;i>=0;i--){

        let line=document.createElement("div");

        if(ds[i]==6||ds[i]==8){

            line.className="line yin";

        }else{

            line.className="line";

        }

        if(ds[i]==6||ds[i]==9){

            line.style.background="red";

        }

        hexagram.appendChild(line);

    }

    let tenChu=timTenQue(ds);

    let queBien=taoQueBien(ds);

    let tenBien=timTenQue(queBien);

    let dong=haoDong(ds);

    hexagramName.innerHTML=
    "Quẻ chủ: "
    +tenChu+
    "<br><br>Quẻ biến: "
    +tenBien;

    analysis.innerHTML=
    "<b>Hào động:</b> "
    +(dong.length?dong.join(", "):"Không có");

}
//========================================
// 64 QUẺ KINH DỊCH (PHẦN 1)
//========================================

Object.assign(HEXAGRAM,{

"Càn-Đoài":"Thiên Trạch Lý",
"Càn-Ly":"Thiên Hỏa Đồng Nhân",
"Càn-Chấn":"Thiên Lôi Vô Vọng",
"Càn-Tốn":"Thiên Phong Cấu",
"Càn-Khảm":"Thiên Thủy Tụng",
"Càn-Cấn":"Thiên Sơn Độn",
"Càn-Khôn":"Thiên Địa Bĩ",

"Đoài-Càn":"Trạch Thiên Quải",
"Đoài-Ly":"Trạch Hỏa Cách",
"Đoài-Chấn":"Trạch Lôi Tùy",
"Đoài-Tốn":"Trạch Phong Đại Quá",
"Đoài-Khảm":"Trạch Thủy Khốn",
"Đoài-Cấn":"Trạch Sơn Hàm",
"Đoài-Khôn":"Trạch Địa Tụy",

"Ly-Càn":"Hỏa Thiên Đại Hữu",
"Ly-Đoài":"Hỏa Trạch Khuê",
"Ly-Chấn":"Hỏa Lôi Phệ Hạp",
"Ly-Tốn":"Hỏa Phong Đỉnh",
"Ly-Khảm":"Hỏa Thủy Vị Tế",
"Ly-Cấn":"Hỏa Sơn Lữ",
"Ly-Khôn":"Hỏa Địa Tấn"

});
