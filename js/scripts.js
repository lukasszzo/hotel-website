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
});
