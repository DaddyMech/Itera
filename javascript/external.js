function updateTime() {
    var d = new Date();
    var d1 = new Date().toDateString();
    var t1 = ("0" + d.getHours()).substr(-2);
    var t2 = ("0" + d.getMinutes()).substr(-2);
    var t3 = ("0" + d.getSeconds()).substr(-2);
    document.getElementById("datetime").innerHTML = ("The date and time is: " + d1 + "\n" + t1 + ":" + t2 + ":" + t3 + "\n");
    setTimeout(updateTime,1000);
}

function copyright() {
    var year = new Date();
    document.getElementById("footer1").innerHTML = ("Copyright &copy " + year.getFullYear());
       
}