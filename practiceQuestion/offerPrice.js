let items = [250,645,300,900,50];
let finalPrice;

for(let i = 0; i<items.length;i++){
    let offer = items[i] / 10;
    finalPrice = items[i] - offer;
    console.log(finalPrice)
}

