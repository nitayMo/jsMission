showCards = () => {
    let cards = document.getElementById('cards')
    cards.innerHTML = '';
    cardsArr.forEach((card) => {
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    let b = document.createElement('button');
    b.classList.add('exitB');
    b.textContent = 'X'
    b.id = cardsArr.length + 1;
    b.onclick= () => {
        let index = cardsArr.findIndex(card => {
            return card.id === b.id;
        })
        cardsArr.splice(index, 1)
        showCards();
        localStorage.clear()
        localStorage.setItem('arr', JSON.stringify(cardsArr));
    }
    newCard.textContent = 'name = ' + card.name + 
    ' \n profession = ' + card.profession + ' \n email = ' + card.email;
    newCard.appendChild(b);
    cards.appendChild(newCard)
    })
   
}

submitForm = () => {
    let name = document.getElementById('name').value;
    if(!validateName(name)) {alert('name must have at least 2 chars')}
    else{
    let email = validateAndAlterMail(document.getElementById('email').value);
    let profession = deletePakidIfExists(document.getElementById('profession').value);
    let cardToArr = {"name": name, "profession": profession, "email": email, "id": (cardsArr.length + 1)};
    cardsArr.push(cardToArr);
    showCards();
    localStorage.clear()
    localStorage.setItem('arr', JSON.stringify(cardsArr));
    }
}

validateName = (name) => {
    if(name.length >= 2) {
        return true;
    }
    return false
}

deletePakidIfExists = (profession) => {
    profession = profession.replace('פקיד', '')
    return profession;
}

validateAndAlterMail = (email) => {
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    if(!regexExp.test(email)) {
        return "valid@email.com";
    }
    return email;
}


onload = () => {
    arr = localStorage.getItem('arr');
    console.log(arr);
    cardsArr = [];
    if(arr!== null) {cardsArr = JSON.parse(arr)}
    showCards();
}