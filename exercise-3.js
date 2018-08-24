function highestScore (students) {
  // Code disini
  var obj = {};
  //var proper = Object.values();
  for(var i = 0; i < students.length; i++){
    var kelas = students[i]['class']; //ambil nilai kelas yaitu fox/wolves
    if( typeof obj[kelas] == 'undefined'){ //untuk setting pertama, cek apakah tipe kelas sudah ada di object
        obj[kelas] = students[i];//students[i];
    } 
    else if( obj[kelas].score < students[i].score){
        obj[kelas] = students[i];//students[i];
    }
    delete obj[kelas].class

  }
  return obj;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 98,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// console.log(highestScore([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}