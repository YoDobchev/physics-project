var browser = (function (agent) {
    switch (true) {
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
        case agent.indexOf("firefox") > -1: return "firefox";
        default: return "other";
    }
})(window.navigator.userAgent.toLowerCase());
// if (browser == "firefox") {
//     window.location.replace("https://youtu.be/dQw4w9WgXcQ");
// }
function load() {
    txtEff("contributor", "Направено от: Йоан Добчев и Явор петров");
}
function txtEff(id, txt) {
    var i = 0;
    function eff() {
        if (i < txt.length) {
            document.getElementById(id).innerHTML += txt.charAt(i);
            i++;
            setTimeout(eff, 40);
        }
    }
    eff();
}