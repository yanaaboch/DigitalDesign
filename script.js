let date = new Date(2021, 10, 2);
let day = date.getDay();
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let month = date.getMonth() - 1;
let year = date.getFullYear();
let weekNumber = Math.ceil(date.getDate()/7);


function getDayInfo(date) {
    console.log(days[day] + ', ' + weekNumber + ' неделя ' + months[month] + ' ' + year + ' года');
}

getDayInfo(2021, 10, 2);