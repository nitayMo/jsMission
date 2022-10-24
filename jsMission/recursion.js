showNums = () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75); 

    let num = document.getElementById('number').value;
    let str = '';
    for(let i = 1; i < num; i++) {
        str += String(Fib(i)) + ',';
    }
    alert(str)
    
    
}

Fib = (num) => {
    if (num === 1){
    return 0
    }
    if (num === 2){
    return 1
    }
    else{
    return (Fib(num-1) + Fib(num-2))
    }

}