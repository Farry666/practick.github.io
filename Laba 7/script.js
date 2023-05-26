let menu_ssp = ["Камень","Ножницы","Бумага"];
let user_select;
let computer_select;
let index;
let answer;
function Stone() {
	index = 0;
    let user_selection = document.querySelector('p');
    user_selection.textContent = 'Камень';
}
function Scissors() {
	index = 1;
    let user_selection = document.querySelector('p');
    user_selection.textContent = 'Ножницы';
}
function Paper() {
	index = 2;
    let user_selection = document.querySelector('p');
    user_selection.textContent = 'Бумага';
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

computer_select = menu_ssp[getRandomInt(3)];

function result(){

    user_select = menu_ssp[index];
   if(user_select == computer_select){
    answer = "Ничья";
}
else{
if(user_select == "Камень"){
if(computer_select == "Бумага"){answer = "Проигрыш";}
else answer = "Победа";
}
if(user_select == "Ножницы"){
    if(computer_select == "Камень"){answer = "Проигрыш";}
    else answer = "Победа";
    }
    if(user_select == "Бумага"){
        if(computer_select == "Ножницы"){answer = "Проигрыш";}
        else answer = "Победа";
        }
}
alert(user_select + "< Ваш выбор |"+ answer +"| Выбор компьютера >" + computer_select); 
location.reload();
}






