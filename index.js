//Bài tập 1


document.getElementById('btnSapXep').onclick = function() {
    var a = Number(document.getElementById('soThu1').value);
    var b = Number(document.getElementById('soThu2').value);
    var c = Number(document.getElementById('soThu3').value);
    var ketQua = '' ;
     
    if (a > b && b > c){
        ketQua = `${a} > ${b} > ${c}`; 
    } else if (a > c && c > b){
        ketQua = `${a} > ${c} > ${b}` ;
    } else if (b > a && a > c){
        ketQua = `${b} > ${a} > ${c}`;
    } else if (b > c  && c > a){
        ketQua = `${b} > ${c} > ${a}`;
    } else if (c > a && a > b){
        ketQua = `${c} > ${a} > ${b}`;
    } else {
        ketQua = `${c} > ${b} > ${a}`;
    }

    document.getElementById('ketQua_b1').innerHTML = ketQua;
}


//Bài tập 2

document.getElementById('btnGuiChao').onclick = function () {
    var thanhVien = document.getElementById('nhapTen').value;
    var ketQua = '';
    
    switch(thanhVien) {
        case 'B':{
            ketQua = 'Xin Chào Bố!';
        } ;break;
        case 'M':{
            ketQua = 'Xin Chào Mẹ!';
        } ;break;
        case 'A': {
            ketQua = 'Xin Chào Anh Trai!';
        } ;break;
        case 'E': {
            ketQua = 'Xin Chào Em trai!';
        } ;break;
        default : {
            ketQua = 'Xin Chào người lạ!';
        }  
    }
    document.getElementById('ketQua_b2').innerHTML = ketQua;
}

//Bài tập 3
document.getElementById('btnDemSo').onclick = function () {
    var soThuNhat = Number(document.getElementById('soThuNhat').value);
    var soThuHai = Number(document.getElementById('soThuHai').value);
    var soThuBa = Number(document.getElementById('soThuBa').value);
    var soChan = 0;
    var soLe = 0;
    if (soThuNhat % 2 === 0) {
        soChan = soChan + 1;
    }
    if (soThuHai % 2 === 0) {
        soChan = soChan + 1;
    }
    if (soThuBa % 2 === 0) {
        soChan = soChan + 1;
    }
    soLe = 3 - soChan;
    document.getElementById('ketQua_b3').innerHTML = 'Kết quả là: ' + soChan + ' Số chẵn. ' + soLe + ' Số lẻ';
}
//Bài tập 4

document.getElementById('btnDuDoan').onclick = function () {
    var canhDai1 = Number(document.getElementById('canhDai1').value);
    var canhDai2 = Number(document.getElementById('canhDai2').value);
    var canhDai3 = Number(document.getElementById('canhDai3').value);
    var ketQua = '';

    if (canhDai1 === canhDai2 && canhDai1 === canhDai3) {
        ketQua = 'Tam giác đều'
    }else if (canhDai1 === canhDai2 && canhDai1 !== canhDai3) {
        ketQua = 'Tam giác cân'
    }else if (canhDai1 === canhDai3 && canhDai1 !== canhDai2) {
        ketQua = 'Tam giác cân'
    }else if (canhDai2 === canhDai3 && canhDai2 !== canhDai1) {
        ketQua = 'Tam giác cân'
    }else if (canhDai1 * canhDai1 == canhDai2 * canhDai2 + canhDai3 * canhDai3) {
        ketQua = 'Tam giá vuông'
    }else if (canhDai2 * canhDai2 == canhDai1 * canhDai1 + canhDai3 * canhDai3) {
        ketQua = 'Tam giá vuông'
    }else if (canhDai3 * canhDai3 == canhDai2 * canhDai2 + canhDai1 * canhDai1) {
        ketQua = 'Tam giá vuông'
    } else {
        ketQua = 'Tam giác khác' 
    }
    document.getElementById('ketQua_b4').innerHTML = ketQua;
}
