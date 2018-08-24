function meleeRangedGrouping(str) {
    if(str === '') {
        return [];
    }
    else {
         var splitComa = str.split(','); //pisah coma
         //console.log(splitComa);

         var splitStrip = [];
         for(var i = 0; i < splitComa.length; i++){
            splitStrip.push(splitComa[i].split('-'))
         }
         console.log(splitStrip)
    }

        // GROUPING MELEE vs RANGED
    var finalResult = [[], []]; // ranged VS melee
    for (var k=0; k<splitStrip.length; k++) {
        // console.log(resultStrip[k][1]);
        if (splitStrip[k][1] === 'Ranged') {
            finalResult[0].push(splitStrip[k][0]);
        }
        else if (splitStrip[k][1] === 'Melee') {
            finalResult[1].push(splitStrip[k][0]);
        }
    }
    return finalResult;
}



// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []