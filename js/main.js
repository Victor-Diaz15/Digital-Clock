//arrow function, show the hour in realtime
const showClock = () => {
    //creating a new object of date
    let date = new Date();
    let hour = formatHour(date.getHours());
    let minute = formatHour(date.getMinutes());
    let second = formatHour(date.getSeconds());

    document.getElementById('hour').innerHTML = `${hour}:${minute}:${second}`;

    //lines of code to show the date 
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let textDate = `${day}/${month}/${year}`;

    document.getElementById('date').innerHTML = textDate;

    //working in the background of the page with the specif time in the moment.
    let body = document.getElementById('body');
    let textColor = document.getElementById('container');
    if (hour >= 5 & hour <= 7) {
        body.classList.add('morning');
    } else if (hour >= 8 & hour <= 17) {
        textColor.style.color = 'green';
        body.classList.add('afternoon');
    } else {
        body.classList.add('night');
    }
}

//format of hour 
const formatHour = (hour) => {
    if (hour < 10) {
        hour = '0' + hour;
    }
    return hour;
}
setInterval(showClock, 1000);