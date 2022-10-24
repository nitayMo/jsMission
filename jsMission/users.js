const usersArray = [
    {
        age: 16,
        name: 'yossi',
        admin: true,
        grades: [20, 23, 50, 30],
        address: {
            city: 'ashdod',
            houseNumber: 12
        }
    },
    {
        age: 25,
        name: 'yael',
        admin: false,
        grades: [50, 16, 100, 78],
        address: {
            city: 'ashdod',
            houseNumber: 8
        }
    },
    {
        age: 22,
        name: 'idan',
        admin: false,
        grades: [100, 100, 100, 30],
        address: {
            city: 'tel aviv',
            houseNumber: 40
        }
    },
    {
        age: 29,
        name: 'yarden king',
        admin: true,
        grades: [99, 99, 99, 99],
        address: {
            city: 'kfar bialik',
            houseNumber: 1
        }
    },
    {
        age: 34,
        name: 'banu',
        admin: true,
        grades: [100, 100, 100, 100],
        address: {
            city: 'ashdod',
            houseNumber: 16
        }
    },
    {
        age: 57,
        name: 'nabetjs',
        admin: false,
        grades: [3, 16, 0, 30],
        address: {
            city: 'tel aviv',
            houseNumber: 12
        }
    },
    {
        age: 15,
        name: 'rongular',
        admin: true,
        grades: [92, 87, 69, 84],
        address: {
            city: 'yafo',
            houseNumber: 12
        }
    },
    {
        age: 10,
        name: 'david',
        admin: false,
        grades: [20, 23, 50, 30],
        address: {
            city: 'ashdod',
            houseNumber: 12
        }
    },
    {
        age: 66,
        name: 'liad',
        admin: false,
        grades: [92, 76, 77, 82],
        address: {
            city: 'beit dagan',
            houseNumber: 112
        }
    },
    {
        age: 34,
        name: 'happy',
        admin: true,
        grades: [54, 23, 100, 30],
        address: {
            city: 'beit dagan',
            houseNumber: 112
        }
    },
]


searchCards = () => {
    let parameter = document.querySelector('input[name="band"]:checked').value;
    let value = document.getElementById('value').value
    switch(parameter) {
        case 'age':
          currUsersArray = usersArray.filter((user) => {
            return user.age > value
          })
          break;
        case 'name':
            currUsersArray = usersArray.filter((user) => {
                return user.name.includes(value);
              })
          break;
          case 'admin':
            let bool;
            if(value.toLowerCase() === 'true') {bool = true}
            if(value.toLowerCase() === 'false') {bool = false}
            currUsersArray = usersArray.filter((user) => {
                return user.admin === bool;
              })
          break;
          case 'grades':
            currUsersArray = usersArray.filter((user) => {
                return avg(user.grades) > value;
              })
              
          break;
          case 'address':
            let key = value.slice(0, value.indexOf('.'))
            let val = value.slice(value.indexOf('.') + 1)
            console.log(key)
            console.log(val)
            if(key === 'city') {
            currUsersArray = usersArray.filter((user) => {
                return user.address.city === val;
              })
            }
            else if(key === 'houseNumber') {
                currUsersArray = usersArray.filter((user) => {
                    return user.address.houseNumber === Number(val);
                  })
            }
          break;
        default:
          // code block
      }
      showCards(false);
}
showCards = (addAge) => {
    let cards = document.getElementById('cards');
    cards.innerHTML = '';
    currUsersArray.forEach((user) => {
        let newUser = document.createElement('div')
        newUser.classList.add('card')
        if(addAge) {
            newUser.textContent = 'age ' + (Number(user.age) + 15) + ' \nname = ' + user.name + ' \nadmin = ' + user.admin + ' \ngrades = ' + user.grades + ' \n city = ' + user.address.city + ' \nhouseNumber = ' + user.address.houseNumber
        }
        else {
            newUser.textContent = 'age ' + user.age + ' \nname = ' + user.name + ' \nadmin = ' + user.admin + ' \ngrades = ' + user.grades + ' \n city = ' + user.address.city + ' \nhouseNumber = ' + user.address.houseNumber
        }
        cards.appendChild(newUser)
    })

   
}
onload = () => {
    console.log('load');
    currUsersArray = usersArray;
    showCards(false);
}

avg = (arr) => {
    let sum = 0
    arr.forEach((element) => {
        sum += element; 
    })
    console.log(sum)
    return sum / arr.length
}
showButtons = () => {
    let buttons = document.getElementById('buttons');
    buttons.style.display = "block"
}

hideButtons = () => {
    let buttons = document.getElementById('buttons');
    buttons.style.display = "none"
}

searchAll = () => {
    let value = document.getElementById('value').value
    currUsersArray = usersArray.filter((user) => {
            return allGreater(user.grades, value)
      })
      showCards(false);
}
allGreater = (grades, val) => {
    let flag = true;
    grades.forEach((grade) => {
        if(grade < val) {flag = false}
    })
    return flag;
}

searchSome = () => {
    let value = document.getElementById('value').value
    currUsersArray = usersArray.filter((user) => {
            return someGreater(user.grades, value)
      })
      showCards(false);
}
someGreater = (grades, val) => {
    let flag = false;
    grades.forEach((grade) => {
        if(grade > val) {flag = true}
    })
    return flag;
}

searchFuck = () => {
    let value = document.getElementById('value').value
    currUsersArray = usersArray.filter((user) => {
            return avg(user.grades) < value && user.address.houseNumber > value
      })
      showCards(true);
}