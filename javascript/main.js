document.querySelector('#btn').addEventListener('click', function(){
    const birthDate = document.querySelector('#birthDate').value;
    const birthMonth = document.querySelector('#birthMonth').value;
    const birthYear = document.querySelector('#birthYear').value;
    const todayDate = document.querySelector('#todayDate').value;
    const currentMonth = document.querySelector('#currentMonth').value;
    const currentYear = document.querySelector('#currentYear').value;
    userData(birthDate, birthMonth, birthYear, todayDate, currentMonth, currentYear);
})

function userData(birthDate, birthMonth, birthYear, todayDate, currentMonth, currentYear){
    if(birthDate > todayDate && birthMonth > currentMonth){
        todayDate = parseInt(todayDate) + 30;
        currentMonth = parseInt(currentMonth) + 11;
        currentYear = parseInt(currentYear) - 1;
    }
    if(birthDate > todayDate){
        todayDate = parseInt(todayDate) + 30;
        birthMonth = parseInt(birthMonth) + 1;
    }
    if(birthMonth > currentMonth){
        currentMonth = parseInt(currentMonth) + 12;
        currentYear = parseInt(currentYear) - 1;
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