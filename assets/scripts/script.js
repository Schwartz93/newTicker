(function startTicker() {
    setInterval(displayDateTime, 1000);

    function displayDateTime() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        document.querySelector(".updated_at").innerHTML = dd + "." + mm + "." + yyyy + "<br>" + time;
    }

    const output = {
        "messagesList": [
            {
                "id": "1",
                "title": "Wechsel bei Rapid",
                "text": "Letzter wechsel Rapid. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku.",
                "time": "23'"
            },
            {
                "id": "2",
                "title": "Gelbe Karte gegen Rapid und Austria",
                "text": "Nach einer Austria-Flanke liegt Stebinger am Boden.",
                "time": "35'"
            },
            {
                "id": "3",
                "title": "Wechsel bei Austria",
                "text": "Letzter wechsel Rapid. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku.",
                "time": "40'"
            },
            {
                "id": "4",
                "title": "Rot nach schwerem Foul",
                "text": "F. Klein mit Rettung abtransportiert.",
                "time": "42'"
            },
            {
                "id": "5",
                "title": "Tor für Rapid",
                "text": "Tor in der 50. Minute nach einer Ecke von Schwab.",
                "time": "49'"
            }
        ]
    };

    let messages = [];

    setInterval(getMessages, 3000);


    function getMessages() {
        for (let i = 0; i < output.messagesList.length; i++) {
            messages.push(output.messagesList[i]);
        }

        displayMessages();

        messages = [];
    }

    function displayMessages() {
        document.querySelector(".container").innerHTML += "<div class='tickerMessages'></div>";
        let display = "";

        for (let i = 0; i < messages.length; i++) {
            document.querySelector(".tickerMessages").innerHTML = display;
            display += "<div class='singleMessage'>"
                + "<h3>" + messages[i]["title"] + "</h3>"
                + "<p>" + messages[i]["text"] + "</p>"
                + "<span>" + messages[i]["time"] + "</span>"
                + "</div>";
        }
    }

}());