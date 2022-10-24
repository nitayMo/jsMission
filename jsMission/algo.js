check = () => {
    let num = document.getElementById('num').value;
    const arrValue = num.split ('');
    const reveArrVal = arrValue.reverse();
    const revString = reveArrVal.join('');  
    if (num == revString) {
        document.getElementById('num').style.background = 'green';
    }
    else {
        document.getElementById('num').style.background = 'red';
    }
}

encrypt = () => {
    let str = document.getElementById('str').value;
    let num = document.getElementById('number').value;
    let strAsArr = str.split('');
    for(i = 0; i < strAsArr.length; i++) {
        for(j = 0; j < num; j ++) {
        strAsArr[i] = getNextChar(strAsArr[i]);
        }
    }
    document.getElementById('str').value = strAsArr.join('');
}

decrypt = () => {
    let str = document.getElementById('str').value;
    let num = document.getElementById('number').value;
    let strAsArr = str.split('');
    for(i = 0; i < strAsArr.length; i++) {
        for(j = 0; j < num; j ++) {
        strAsArr[i] = getPrevChar(strAsArr[i]);
        }
        if(strAsArr[i] > 122) {strAsArr[i] = strAsArr[i] - 122}
    }
    document.getElementById('str').value = strAsArr.join('');
}


function getNextChar(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }

  function getPrevChar(char) {
    return String.fromCharCode(char.charCodeAt(0) - 1);
  }