function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();

    if (hour >= 22 || hour <= 5) {
        return "go the fuck to sleep";
    } else {
        return (
            "" +
            (hour < 10 ? "0" + hour : hour) +
            ":" +
            (min < 10 ? "0" + min : min) +
            ":" +
            (sec < 10 ? "0" + sec : sec)
        );
    }
}

function getMOTD() {
    var motds = ["hello world!", "what does static do java", "spigotmc", "the sun corp", "google dot com",
        "idiots being stupid", "youtube", "bing", "how to unstatic all fields intellij", "coding with swastik",
        "pics of potatoes","snippyware","sigma deleter","qqbackdoor","github","red it","VAPE V4 CRACK (NO VIRUS WORKING 2021)",
        "tokenlogger example code","wikipedia","test","pihack","meteor client","wurst","p","w+3"]
    return motds[Math.floor(Math.random() * motds.length)];;
}

function search(e) {
    if (e.keyCode == 13) {
        var val = document.getElementById("search").value;
        window.open("https://google.com/search?q=" + val,"_self");
    }
}

function loadMenus(x) {
    var menuList = [document.getElementById("table-main"),
                    document.getElementById("table-sch"),
                    document.getElementById("table-games")]

    for (let i = 0; i <= menuList.length; i++) {
        if (i == x) {
            menuList[i].style = "margin-left: auto; margin-right: auto; display: unset;"
        } else {
            menuList[i].style = "margin-left: auto; margin-right: auto; display: none;"
        }
    }
}

window.onload = () => {

    // create a motd to set as search
    document.getElementById("search").placeholder = getMOTD();

    // clock
    document.getElementById("clock").innerHTML = `<h2 style="font-size: 45px; margin: 10px;">the time now is ${getTime()}</h2>`;
    setInterval(() => {
        document.getElementById("clock").innerHTML = `<h2 style="font-size: 45px; margin: 10px;">the time now is ${getTime()}</h2>`;
    }, 100);
}