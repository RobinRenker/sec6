var names = ["#Section6","#Sec6"];
var i = -1;
function changeMute(){
    var el = document.getElementsByClassName('txt')[0];
    i++;
    if (i > names.length-1) i = 0;
    el.setAttribute('data',names[i]);
    el.innerText = names[i];
}
changeMute();
setInterval(changeMute,3000);

// event view

var eventsUrl = 'events.json';
eventsUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';

async function showEvents(eventsPromise) {
    var events = await eventsPromise;

    var eventsContainer = document.querySelector('#events');

    for (var i = 0; i < events.length; i++) {

        const iconDiv = document.createElement('div');
        iconDiv.setAttribute("class", "icon");

        const h2 = document.createElement('h2');
        h2.textContent = events[i].title;

        const date = document.createElement('p');
        date.textContent = events[i].date;

        const description = document.createElement('p');
        description.textContent = events[i].description;

        const contact = document.createElement('p');
        contact.textContent = events[i].contact;

        const contentDiv = document.createElement('div');
        contentDiv.setAttribute("class", "content");
        contentDiv.appendChild(h2);
        contentDiv.appendChild(date);
        contentDiv.appendChild(description);
        contentDiv.appendChild(contact);

        const newEvent = document.createElement('div');
        newEvent.setAttribute("class", "event");
        newEvent.appendChild(iconDiv);
        newEvent.appendChild(contentDiv);
        eventsContainer.appendChild(newEvent);
    }
}

fetch(eventsUrl)
    .then((response) => showEvents(response.json()))
    .then(() => console.warn("Failed to load events"));

