function loopwithRange(awal, akhir) {
    var arr = []
    for (i = awal; i <= akhir; i++) {
        arr.push(i);
    }
    console.log('Input Pertama : ' + awal);
    console.log('Input kedua : ' + akhir);
    console.log('Output di browser : ' + arr.join(','));
}

loopwithRange(4, 8);