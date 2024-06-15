// Create a reverse count down from 30 to 0

function countDown(i) {
    for(let i = 30; i>=0; i--){
    setInterval(function () {
      console.log(i)
    }, 1000);
}
}

countDown(30);
