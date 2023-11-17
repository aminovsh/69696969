//1 задание
let name = "Alex"
let account = 7777
let money = 10000   


let ask = prompt('введите ваше имя для снятия средств')
if(name.toLowerCase() == ask.toLowerCase()){
    let ac_pass = +prompt('введите ваш пин')
    if (ac_pass == account){
        let dengi = +prompt('какую сумму вы хотите снять')
        if (dengi < money){
            money = money - dengi
            console.log('сняли средств', dengi);
            console.log('остаток', money);
        }else{
            console.log('недостаточно средст');
        }
    }else{
        console.log('не верный пин');
    }
}else{
    console.log('иби ошибся');
}

//2 задание