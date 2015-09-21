function updateTime() {
    var d = new Date();
    var d1 = new Date().toDateString();
    var t1 = d.getHours();
    var t2 = d.getMinutes();
    var t3 = d.getSeconds();
    document.getElementById("datetime").innerHTML = (d1 + "\n" + t1 + ":" + t2 + "\n");

    setTimeout(updateTime,1000);
}