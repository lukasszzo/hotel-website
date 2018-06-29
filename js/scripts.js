document.addEventListener('DOMContentLoaded', function() {
    //------------------------------------------------------
    //nawigacja mobile - toggle
    //------------------------------------------------------
    let body = document.querySelector('body');
    document.querySelector('.toggle-nav').addEventListener('click', function() {
        body.classList.toggle('show-main-nav');
    });


    //------------------------------------------------------
    //glowny banner - zamiana tekstu na pojedyncze litery
    //ktore potem dostaja animacje w pliku .main-banner 29 linijka
    //------------------------------------------------------
    let mainTitle = document.querySelector('.main-title');
    let title = mainTitle.innerText;
    let newHTML = '<div>';
    for (let i=0; i<title.length; i++) {
        if (title[i] == ' ') {
            newHTML += '</div><div>';
        } else {
            newHTML += '<span class="letter-'+i+'">'+title[i]+'</span>';
        }
    }
    newHTML += '</div>';
    mainTitle.innerHTML = newHTML;


    let testHeader = function() {
        var top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
        if (top > 50) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    };

    let header = document.querySelector('.main-header');
    testHeader();
    window.addEventListener('scroll', function() {
        testHeader();
    })

    function initMap() {
        let point = {lat: 52.230898, lng: 20.988389};
        let map = new google.maps.Map(document.getElementById('mainMap'), {
            zoom: 16,
            center: point,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        });

    }});
