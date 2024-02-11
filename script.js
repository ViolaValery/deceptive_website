function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    openTab('home');
});

/**
 * Cookie Banner
 */
function toggleCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    banner.style.display = 'block';
}

document.getElementById('accept-cookies').onclick = function() {
    document.getElementById('cookie-banner').style.display = 'none';
};

document.getElementById('deny-cookies').onclick = function() {
    document.getElementById('cookie-banner').style.display = 'none';
};

