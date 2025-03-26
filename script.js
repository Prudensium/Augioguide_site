$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 20){

            $('nav').addClass('sticky');
        }else{

            $('nav').removeClass('sticky');
        }

        if (this.scrollY > 300) {

            $('.scroll-up-btn').addClass('show');
        }else{

            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.menu-btn').click(function(){
        $('nav .nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })

});

const svcBtn = document.querySelector('.service__btn');

svcBtn.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    // ripples.style.top = y + 'px';
    
    this.appendChild(ripples);
    
    setTimeout(() => {
        ripples.remove()
    },500);
});

const ap = new APlayer({

    container: document.getElementById('aplayer'),
    listFolded: true,
    theme: '#660628',
    listMaxHeight: 120,

    audio: [
    {
        name: 'Красная площадь',
        artist: 'Елкин Михаил',
        url: 'music/Red_square.mp3',
        cover: 'https://i.ibb.co/m5ztvPvf/545-1.jpg'
    },
    {
        name: 'Большой театр',
        artist: 'Елкин Михаил',
        url: 'music/Bolshoi_theatr.mp3',
        cover: 'https://i.ibb.co/5X1Ycqzs/bolshoi-theater-moscow-1.jpg'
    },
    {
        name: 'Третьяковская галерея',
        artist: 'Елкин Михаил',
        url: 'music/Tretyakovskaya_gallery.mp3',
        cover: 'https://i.ibb.co/kVjppJvY/aaa1763225645852e096fa5d9a37188e.jpg'
    },
    ]
})

// aplayer click

$('.card').on('click', function(e){

    var dataSwitchId = $(this).attr('data-switch');

    ap.list.switch(dataSwitchId);

    ap.play();
    $('#aplayer').addClass('show');

    $('.scroll-up-btn').addClass('showTop');
});
$('.aplayer-icon.aplayer-icon-menu').click(function(){

    $('.scroll-up-btn').toggleClass('showTp')
});

var type = new Typed(".logo__text", {
    strings: ["Москва в кармане"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true 
});

const boxes = document.querySelectorAll('.box');
let width = window.screen.availWidth

boxes.forEach(box => {

    box.classList.remove('carousel-item');
    
    if (width <= 768) {
        
        box.classList.add('carousel-item');
        console.log(width);
    }
});