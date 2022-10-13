const LANGUAGE = document.getElementsByTagName("html")[0].getAttribute("lang"),
    URL = window.location.href;

localStorage.setItem("language", LANGUAGE);

function changeLanguage() {
    if (LANGUAGE === "en") {
        window.location.href = URL.replace("/en/", "/zh/");
    } else {
        window.location.href = URL.replace("/zh/", "/en/");
    }
}
