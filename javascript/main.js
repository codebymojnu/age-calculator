const date = new Date();

// for date option

for(let i=1; i < 32; i++){
    const option = document.createElement('option');
    option.innerText = i;
    option.setAttribute('value', i);
    document.querySelector('#date').appendChild(option);
}

// for month option

for(let i=1; i < 13; i++){
    const option = document.createElement('option');
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    option.innerText = months[i-1];
    option.setAttribute('value', i);
    document.querySelector('#month').appendChild(option);
}

// আজ তারিখের জন্য 

for(let i=1; i < 32; i++){
    const option = document.createElement('option');
    option.innerText = i;
    option.setAttribute('value', i);
    if(i == date.getDate()){
        option.setAttribute('selected', 'selected');
    }
    document.querySelector('#ajDate').appendChild(option);
}

for(let i=1; i < 13; i++){
    const option = document.createElement('option');
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    option.innerText = months[i-1];
    option.setAttribute('value', i);
    if(i-1 == date.getMonth()){
        option.setAttribute('selected', 'selected');
    }
    document.querySelector('#ajMonth').appendChild(option);
}

// hit calculate Btn
document.querySelector('#calculateBtn').addEventListener('click', function(){
    let jonmoDate = document.querySelector('#date').value;
    let jonmoMonth = document.querySelector('#month').value;
    let jonmoYear = document.querySelector('#year').value;
    let todayDate = document.querySelector('#ajDate').value;
    let todayMonth = document.querySelector('#ajMonth').value;
    let todayYear = document.querySelector('#ajYear').value;

    if(!todayYear){
        todayYear = date.getFullYear();
    }

    const todayYearStr = '' + todayYear;
    const jonmoYearStr = '' + jonmoYear;

    if(todayYearStr.length !== 4 || jonmoYearStr.length !== 4){
        alert("4 ডিজিটের একটি সাল দাও।");
    }
    else if(jonmoYear > todayYear){
        alert("যে সালে তোমার বয়স বের করতে চাও, জন্ম সাল সেই সাল থেকে বড় হতে পারে না!") ;
    }
    else{
        calculateAge(+jonmoDate, +jonmoMonth, jonmoYear, +todayDate, +todayMonth, todayYear);
    }
})

// calculate age function

function calculateAge(jonmoDate, jonmoMonth, jonmoYear, todayDate, todayMonth, todayYear) {
    if(jonmoDate > todayDate){
        todayDate = todayDate + 30;
        jonmoMonth = jonmoMonth + 1;
    }

    if(jonmoMonth > todayMonth){
        todayMonth = todayMonth + 12;
        todayYear = todayYear - 1;
    }

    const day = todayDate - jonmoDate;
    const month = todayMonth - jonmoMonth;
    const year = todayYear - jonmoYear;
    showAgeUi(day, month, year);
}

// function show age ui
function showAgeUi(day, month, year){
    const result = document.querySelector('#result');
    result.innerHTML = `<p>${year} বছর, ${month} মাস, ${day} দিন</p>`
}