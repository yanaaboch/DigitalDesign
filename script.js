var date = new Date();
var date = new Date(2021, 10, 2);
var day = date.getDay();
var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
var months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
var month = date.getMonth() - 1;
var year = date.getFullYear();
var weekNumber = Math.ceil(date.getDate()/7);


function getDayInfo(date) {
    console.log(days[day] + ', ' + weekNumber + ' неделя ' + months[month] + ' ' + year + ' года');
}

getDayInfo(2021, 10, 2);