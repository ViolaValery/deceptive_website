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

document.addEventListener("DOMContentLoaded", setupCookieBannerHandlers);

/**
 * Cookie Banner
 */
function setupCookieBannerHandlers() {
    // Look for all buttons that trigger the different cookie banners
    var enableButtons = document.querySelectorAll('[id^="enable-cookie-banner_"]');
    enableButtons.forEach(function(button) {
        button.onclick = function() {
            // Get Banner-ID (using the Button-ID)
            var bannerId = 'cookie-banner_' + this.id.split('_')[1];
            var banner = document.getElementById(bannerId);
            if (banner) {
                // Display of the corresponding Cookie-Banner
                banner.style.display = 'block';
                // Hide all other Cookie Banners
                var allBanners = document.querySelectorAll('[id^="cookie-banner_"]');
                allBanners.forEach(function(otherBanner) {
                    if (otherBanner.id !== bannerId) {
                        otherBanner.style.display = 'none';
                    }
                });
            }
        };
    });

    // Logic for closing the Cookie Banners
    var closeButtons = document.querySelectorAll('[id^="cookie-banner_"] .close');
    closeButtons.forEach(function(button) {
        button.onclick = function() {
            this.parentElement.style.display = 'none';
        };
    });
}

/**
 * Logic for both buttons on the Cookie Banner
*/ 
document.getElementById('accept-cookies_uc').onclick = function() {
    document.getElementById('cookie-banner_uc').style.display = 'none';
};

document.getElementById('deny-cookies_uc').onclick = function() {
    document.getElementById('cookie-banner_uc').style.display = 'none';
};

document.getElementById('accept-cookies_he').onclick = function() {
    document.getElementById('cookie-banner_he').style.display = 'none';
};

document.getElementById('deny-cookies_he').onclick = function() {
    document.getElementById('cookie-banner_he').style.display = 'none';
};

document.getElementById('accept-cookies_ll').onclick = function() {
    document.getElementById('cookie-banner_ll').style.display = 'none';
};

document.getElementById('deny-cookies_ll').onclick = function() {
    document.getElementById('cookie-banner_ll').style.display = 'none';
};

document.getElementById('accept-cookies_s').onclick = function() {
    document.getElementById('cookie-banner_s').style.display = 'none';
};

document.getElementById('deny-cookies_s').onclick = function() {
    document.getElementById('cookie-banner_s').style.display = 'none';
};


