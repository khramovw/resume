//нужно добавить клас .cropbox-box к .cropbox-img  = <div class="similar-box cropbox-box">
// и добавить класс на изоброжение с авито .cropbox-img

function cropboxIimg() {

    $('.cropbox-box a').each(function(index,elem){
        var findImg = $(this).find('.cropbox-img');
        var findImgSrc = $(this).find('.cropbox-img').attr('src'),
            newDiv = `<div class="newdiv" style="overflow: hidden; "><img class="cropbox-img" src="${findImgSrc}" alt=""></div>`;
        $(this).find('.cropbox-img').remove();
        $(this).prepend(newDiv);
        $('.newdiv').height($('.newdiv').width());
        console.log(findImg);
    });
    console.log('cropbox');

    $('.foto-wrap').css({
        'overflow':'hidden'
    });
    $('.cropbox-img').css({
        'transform':'translateX(5%) scale(1.2)'
    });
}

cropboxIimg();