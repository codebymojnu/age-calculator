document.querySelector('#btn').addEventListener('click', function(){
    let birthDate = document.querySelector('#birthDate').value;
    let birthMonth = document.querySelector('#birthMonth').value;
    let birthYear = document.querySelector('#birthYear').value;
    let todayDate = document.querySelector('#todayDate').value;
    let currentMonth = document.querySelector('#currentMonth').value;
    let currentYear = document.querySelector('#currentYear').value;
    userData(birthDate, birthMonth, birthYear, todayDate, currentMonth, currentYear);
})

function userData(birthDate, birthMonth, birthYear, todayDate, currentMonth, currentYear){
    birthDate = parseInt(birthDate);
    birthMonth = parseInt(birthMonth);
    birthYear = parseInt(birthYear);
    todayDate = parseInt(todayDate);
    currentMonth = parseInt(currentMonth);
    currentYear = parseInt(currentYear);
    
    if(birthDate > todayDate && birthMonth > currentMonth){
        todayDate = todayDate + 30;
        currentMonth = currentMonth + 11;
        currentYear = currentYear - 1;
    }
    if(birthDate > todayDate){
        todayDate = todayDate + 30;
        birthMonth = birthMonth + 1;
    }
    if(birthMonth > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }
    subtraction(birthDate, birthMonth, birthYear, todayDate, currentMonth, currentYear);
}

function subtraction(birthDate, birthMonth, birthYear, todayDate, currentMonth, currentYear){
    const day = (todayDate - birthDate) + 1;
    const month = currentMonth - birthMonth;
    const year = currentYear - birthYear;
    const para = document.createElement('p');
    document.querySelector('#showAge').appendChild(para);
    document.querySelector('p').innerHTML = `<span>Result</span><br/> ${year} years ${month} months ${day} days`
}