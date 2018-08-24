function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var hasil = [];
    var obj = {};
    for (var i = 0; i < arrPenumpang.length; i++) {
        obj = {};
        for (var j = 0; j < arrPenumpang[i].length; j++) {
            obj.penumpang = arrPenumpang[i][0];
            obj.naikDari = arrPenumpang[i][1];
            obj.tujuan = arrPenumpang[i][2];
            var tempNaik = '';
            var tempTujuan = '';

            for (var k = 0; k < rute.length; k++) {
                if (rute[k] === arrPenumpang[i][1]) {
                    tempNaik = k;
                }
                for (var l = 0; l < rute.length; l++) {
                    if (rute[l] === arrPenumpang[i][2]) {
                        tempTujuan = l;
                    }
                }
            }
            obj.bayar = (tempTujuan - tempNaik)*2000;
        }
        hasil.push(obj);
    }
    
    return hasil;
}
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]