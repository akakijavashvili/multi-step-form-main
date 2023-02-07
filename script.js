/* step-1 start  */

let totalcost = 0;


const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


const nameError = document.getElementById('name-eror');
const emailError = document.getElementById('email-eror');
const phoneError = document.getElementById('phone-eror');

const step1=document.getElementsByClassName('step-1');

const step2=document.getElementsByClassName('step-2');

const step3 = document.getElementById('step-3');
const totall = document.getElementById('totall');
function chekstep1(){
    if(Name.value.match(/[a-z]/) ||  Name.value.length > 6 ){
      
        nameError.style.display='none';
        Name.style.color='hsl(213, 96%, 18%)'
    }else{
        nameError.innerHTML='This filed is Recuired';
        nameError.style.color='red'
    }


    if(email.value.match(/[@]/) && email.value.length > 9){
        email.style.color='hsl(213, 96%, 18%)'
        emailError.style.display='none'
    }else{
        emailError.innerHTML='This filed is Recuired'
        emailError.style.color='red'
    }


    if(phone.value.length > 6 || phone.value.match(/[0-9]/)){
        phone.style.color='hsl(213, 96%, 18%)';
        phoneError.style.display='none';
    }else{
        phoneError.innerHTML='This filed is Recuired';
        phoneError.style.color='red'
    }


    if(Name.value.match(/[a-z]/) ||  Name.value.length > 6 && email.value.match(/[@]/) && email.value.length > 9 && phone.value.length > 6 || phone.value.match(/[0-9]/)){
        console.log('nice job');
        step1[0].style.display='none';
        step2[0].style.display='flex';
    }else{
        console.log('bad job')
    }

}
// step-1 end

//step-2 start
const nextbtn = document.getElementById('next3');
const changediv = document.getElementById('div');
const changediv2 = document.getElementById('div2');
const changediv3 = document.getElementById('div3');
const monthly =document.getElementById('free-months');
const monthly2 =document.getElementById('free-months2');
const monthly3 =document.getElementById('free-months3');
const circle = document.getElementById('circle');
const onof = document.getElementById('onof');
const infoprice = document.getElementById('info-price');
const infoprice2 = document.getElementById('info-price2');
const infoprice3 = document.getElementById('info-price3');
const pricefirst = document.getElementById('pricefirst');
const pricesecond = document.getElementById('pricesecond');
const pricethird = document.getElementById('pricethird');
let changenum = 0;
let changenum2 = 0;
let changenum3 = 0;

let onofnum = 0;
let storage22=document.getElementById('storage22')
let storage21=document.getElementById('storage21')
function onOff(){
    onofnum++;
    if(onofnum % 2 ===0){
        monthly.style.display='none';
        monthly2.style.display='none';
        monthly3.style.display='none';
        circle.style.marginLeft='0px';
        infoprice.innerHTML='$9/mo';
        infoprice2.innerHTML='$12/mo';
        infoprice3.innerHTML='$15/mo';
        pricefirst.innerHTML='+$1/mo';
        pricesecond.innerHTML='+$2/mo';
        pricethird.innerHTML='+$2/mo';
        storage21.innerHTML='+$1/mo';
        storage22.innerHTML='+$2/mo';
    }else{
        circle.style.marginLeft='40px'
        monthly.style.display='block'
        monthly2.style.display='block'
        monthly3.style.display='block'
        infoprice.innerHTML='$90/yr';
        infoprice2.innerHTML='$120/yr';
        infoprice3.innerHTML='$150/yr';
        pricefirst.innerHTML='+$10/yr';
        pricesecond.innerHTML='+$20/yr';
        pricethird.innerHTML='+$20/yr';
        storage21.innerHTML='+$10/yr';
        storage22.innerHTML='+$20/yr';
    }

}
let arcade = 0
function change(){
    changenum++;
    if(changenum % 2 ===0){
        changediv.style.backgroundColor='white'
    }else{
        changediv.style.backgroundColor= 'hsl(229, 24%, 87%)';
        changediv2.style.backgroundColor= 'white';
        changediv3.style.backgroundColor= 'white';
        totalcost = 9;
        arcade = 9;
    }
}
function change2(){
    changenum2++;
    if(changenum2 % 2 ===0){
        changediv2.style.backgroundColor='white'
    }else{
        changediv2.style.backgroundColor= 'hsl(229, 24%, 87%)'
        changediv.style.backgroundColor= 'white';
        changediv3.style.backgroundColor= 'white';
        totalcost = 12;
        arcade = 12;
    }
}function change3(){
    changenum3++;
    if(changenum3 % 2 ===0){
        changediv3.style.backgroundColor='white'
    }else{
        changediv3.style.backgroundColor= 'hsl(229, 24%, 87%)'
        totalcost = 15;
        changediv.style.backgroundColor= 'white';
        changediv2.style.backgroundColor= 'white';
        arcade = 15;
    }
}
function next3(){
    console.log(totalcost)
}

function backtostep1(){
    step1[0].style.display='flex';
    step2[0].style.display='none';
}
//step-2 end

//step-3 start
const stepp3 = document.getElementById('step-3');
let step3num1 = 0;
let step3num2 = 0;
let step3num3 = 0;
const step3item1 =document.getElementById('step-3-item');
const step3item2 =document.getElementById('step-3-item2');
const step3item3 =document.getElementById('step-3-item3');
const svg = document.getElementById('svg1');
const svg2 = document.getElementById('svg2')
const svg3 = document.getElementById('svg3')
const h3 = document.getElementById('h3');
const step4=document.getElementById('step-4');
function item3first (){
    step3num1 ++;
   if(step3num1 % 2 ===0){
    step3item1.style.backgroundColor='white';
    svg.style.display='none';
   }else{
    step3item1.style.backgroundColor='hsl(217, 100%, 97%)';
    svg.style.display='block';
    totalcost +=1;
   }
}
function item3second(){
    step3num2 ++;
   if(step3num2 % 2 ===0){
    step3item2.style.backgroundColor='white';
    svg2.style.display='none'
   }else{
    step3item2.style.backgroundColor='hsl(217, 100%, 97%)';
    svg2.style.display='block'
    totalcost +=2;
   }
}
function item3third (){
    step3num3 ++;
   if(step3num3 % 2 ===0){
    step3item3.style.backgroundColor='white';
    svg3.style.display='none'
   }else{
    step3item3.style.backgroundColor='hsl(217, 100%, 97%)';
    svg3.style.display='block';
    totalcost +=2;
   }
}
function next3(){
    step1[0].style.display='none';
    step2[0].style.display='none';
    step3.style.display='flex';
}
function totalcost2(){
    if(onofnum % 2 ===0){
        totall.innerHTML='+$'+totalcost + '/mo';
        h3.innerHTML='+$'+arcade + '/mo';
    }else{
        totall.innerHTML='+$'+totalcost+'0 ' + '/yr';
        h3.innerHTML='+$'+arcade+'0 ' + '/yr';
    }
    step4.style.display='flex';
    stepp3.style.display='none';
}
function backstep3(){
   stepp3.style.display='none';
   step2[0].style.display='flex';
}
function backstep4(){
    step4.style.display='none';
    stepp3.style.display='flex';
}
const step5=document.getElementById('step-5');
function confirm(){
    step5.style.display='flex';
    step4.style.display='none';
}
