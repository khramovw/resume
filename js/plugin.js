(function($) {
//preloader
    document.body.onload = function () {
        setTimeout(function () {
            $('#page-preloader').addClass('done');
        }, 1000);
        console.log('preloader');
    };
//select styler
    $(function() {
        $('select').styler({

        });
    });
})(jQuery);

// попап вход
$('#enter-popup').on('click', function(){
    $('#enter-form-id').bPopup({
        closeClass: 'close-modal-btn'
    });
});

//попап регистрация
$('#reg-popup').on('click', function(){
    $('#registration-form-id').bPopup({
        closeClass: 'close-modal-btn'
    });
});

//попап оплата
$('#mute').on('click', function(){
    $('#payment-form-id').bPopup({
        closeClass: 'close-modal-btn'
    });
});

//открыть фильтер
$('.btn-menu').on('click', function(){
    if($(this).hasClass('active')){
        $('.main-filter').removeClass('active');
    }else{
        $('.main-filter').addClass('active');
        var btnClose = '<div id="close_filter" class="close-modal-btn"><span></span><span></span></div>';
        $('.filter-list-head').find('.filter-title').append(btnClose);
    }
    $('.resume-item').height(0);
});

//закрыть фильтер
$('.filter-title').on('click', function cls_filter(){
    $('.main-filter').removeClass('active');
    $('#close_filter').remove();
    $('.resume-item').height('unset');
    console.log('cls');
});

//ресайз изображения когда h > w
function resizeImg( sizeImg=150 ) {
    $('.resume-img').each(function(index,elem){
        if( $(this).width() < 150 ){
            console.log('sizeImg value up',sizeImg);
            $(this).css({
                'top'       : '-15%',
                'left'      : '50%',
                'transform' : 'translateX(-50%)',
                'position'  : 'absolute',
                'height'    : 'unset'
            }).width(sizeImg);
            console.log('sizeImg value',sizeImg);
        }
    });
    console.log('sizeImg',sizeImg);
}

//перестройка гавной стр <@1023px
function swichToMobile() {
    $(".resume-item").each(function(index,elem) {
        //перенос заголовка
        var resumeHead  = $(this).find('.position-specialist').html();
        var resumeCoast = $(this).find('.wage').html();
        var headerBlock = `<div class="resume-head d-flex justify-content-between"><div class="position-specialist">${resumeHead}</div></div>`;
        $(this).find('.resume-row .resume-head').remove();
        $(this).append(headerBlock);
        
        //перенос фото
        var resumeFoto  = $(this).find('.resume-foto').html();
        var fotoBlock   = `<div class="resume-foto">${resumeFoto}</div>`;
        $(this).find('.resume-foto').remove();
        $(this).children('.resume-row').append(fotoBlock);

        //перенос времени и цены
        var resumeTime     = $(this).find('.visiting_time').html();
        var timeCoastBlock = `<div class="resume-foot d-flex justify-content-between align-items-start"><div class="visiting_time">${resumeTime}</div><div class="wage">${resumeCoast}</div></div>`;
        $(this).children('.resume-row').find('.visiting_time').remove();
        $(this).append(timeCoastBlock);
        console.log('mobile');
    })
}

//перестройка гавной стр >@1023px
function swichToDesctop() {
    $(".resume-item").each(function(index,elem) {

        //перенос заголовка и цены
        var resumeHeadDesctop  = $(this).find('.resume-head').html();
        var resumeCoastDesctop = $(this).children('.resume-foot').find('.wage');
        var headerBlockDesctop = `<div class="resume-head d-flex justify-content-between">${resumeHeadDesctop}</div>`;

        $(this).find('.resume-head').remove();
        $(this).children('.resume-row').append(headerBlockDesctop);

        var searchCoastBlock = $(this).children('.resume-row').children('.resume-head').hasClass('.wage');

        if(searchCoastBlock){
            $(this).children('.resume-row').children('.resume-head').find('.wage').remove();
            $(this).children('.resume-row').children('.resume-head').append(searchCoastBlock);
        }else{
            $(this).children('.resume-row').children('.resume-head').append(resumeCoastDesctop);
        }

        //перенос фото
        var resumeFotoDesctop  = $(this).find('.resume-foto').html();
        var fotoBlockDesctop   = `<div class="resume-foto">${resumeFotoDesctop}</div>`;

        $(this).children('.resume-row').find('.resume-foto').remove();
        $(this).find('.resume-foto').remove();
        $(this).append(fotoBlockDesctop);

        //перенос времени
        var resumeTimeDestop   = $(this).children('.resume-foot').find('.visiting_time');
        $(this).find('.resume-foot').remove();
        var searchBlock = $(this).children('.resume-row').hasClass('.visiting_time');
        if(searchBlock) {
            $(this).children('.resume-row').find('.visiting_time').remove();
            $(this).children('.resume-row').append(searchBlock);
        }else{
            $(this).children('.resume-row').append(resumeTimeDestop);
        }
        console.log('desctop');

    });
}

//перестройка стр резюме
function swichToMobileResume() {
    $('.resume-file').each(function(index,elem){
        var resumeSideBar = $('.resume-foto').removeClass('col-3');
        var resumeAdss    = $('.similar-ads');

        $('.resume-foto, .similar-ads').remove();
        $('.resume-row, .position-specialist').removeClass('col-9');
        $('.column-row').removeClass('col-8').removeClass('col-4');
        $(this).children('.resume-row').append('<!--RESUME FOTO MOVED START-->',resumeSideBar,'<!--RESUME FOTO MOVED END-->',resumeAdss);

    });
}

//перестройка стр резюме
function swichToDesctopResume() {
    $('.resume-file').each(function(index,elem){
        var resumeSideBar2 = $(this).children('.resume-row').find('.resume-foto');
        $(this).find('.resume-row .resume-foto').remove();
        $('.resume-row, .position-specialist').addClass('col-9');
        $('.column-row:first-child').addClass('col-8');
        $('.column-row:last-child').addClass('col-4');
        $(this).append(resumeSideBar2);

        console.log(resumeSideBar2);
    });
}

//перестойка футера
function footerMobile(){
    var footerWrap = $('.footer');
    var $headerNav = footerWrap.find('.header-nav').html();
    var $copyright = footerWrap.find('.copyright').html();

    var newFooter = `<div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="footer-wrap">
                                <div class="footer-row">
                                    <div class="logo">
                                        <img src="img/logo.png" alt="">
                                    </div>
                                    <div class="header-nav header-nav-footer">
                                        ${$headerNav}
                                    </div>
                                </div>
                                <div class="copyright">${$copyright}</div>
                            </div>
                        </div>
                    </div>`;
    $('.footer .container-fluid').remove();
    footerWrap.append(newFooter);
}

//свич
$(window).on('resize load',function () {
    var widthWin       = document.body.clientWidth,   // ширина
        heightWin      = document.body.clientHeight;  // высота
    var $container_desctop = $('.resume-container').hasClass('desctop-win');
    var $container_resume  = $('.resume').hasClass('desctop-win');

    if(widthWin <= 1023 ){

        if($container_desctop){
            $('.resume-container').removeClass('desctop-win');
            $('.resume-container').addClass('mobile-win');
            resizeImg(95);
            swichToMobile();
        }
        if($container_resume){
            $('.resume').removeClass('desctop-win');
            $('.resume').addClass('mobile-win');
            swichToMobileResume();
            footerMobile();
        }


        console.log('swich To Mobile ON', 'width:', widthWin,'height:',heightWin);

    } else if(widthWin >= 1024){

        if(!$container_desctop){
            $('.resume-container').removeClass('mobile-win');
            $('.resume-container').addClass('desctop-win');
            resizeImg(150);
            swichToDesctop();
        }
        if(!$container_resume){
            $('.resume').addClass('desctop-win');
            $('.resume').removeClass('mobile-win');
            swichToDesctopResume();
            resizeImg();
        }
        swichToDesctopResume();



        console.log('swich To Desctop ON', 'width:', widthWin,'height:',heightWin);
    }

    console.log('size: ', 'width:', widthWin,'height:',heightWin);
});


// function validateComments(input) {
//     if (input.value.length < 20) {
//         input.setCustomValidity("Дайте более развернутый ответ.");
//     }
//     else {
//         // Длина комментария отвечает требованию,
//         // поэтому очищаем сообщение об ошибке
//         input.setCustomValidity("");
//     }
// }
