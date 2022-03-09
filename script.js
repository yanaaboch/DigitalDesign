let date = new Date(2021, 10, 2);
const day = date.getDay();
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const month = date.getMonth() - 1;
const year = date.getFullYear();
const weekNumber = Math.ceil(date.getDate()/7);


function getDayInfo(date) {
    console.log(days[day] + ', ' + weekNumber + ' неделя ' + months[month] + ' ' + year + ' года');
}

getDayInfo(2021, 10, 2);