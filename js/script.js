function trxClick(val){
    $('.control_output span').eq(0).text(val);
}
function trxReset(val){
    $('.control_output span').eq(0).text(val);
}
function navLink(val){
    $('[data-nav-link]').removeClass('active')
    let has_class = $(val).hasClass('active');
    if(!has_class){
        $(val).addClass('active')
    }
}