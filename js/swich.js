$(function(){
    let Swich_index = "";
    $('.swich_btn').click(function(){
        let Swich_index = $(this).index()+1;
        let Swich_obj = document.querySelector('.sample_'+Swich_index);
        $('.img_cover_place').show();
        $(Swich_obj).show();
    });
    $('.img_cover_place').click(function(){
        $(this).hide();
        $('.img_cover_place img').hide();
    });
});