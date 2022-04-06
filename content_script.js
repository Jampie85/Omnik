$(window).on('load', function() {

$( ".tab_2" ).show();
$( "#ip_d" ).parent().hide();
$( "#cn_d" ).parent().hide();
$( "#ds_d" ).parent().hide();
$( "#pt_d" ).parent().hide();


$('input,select').css("border","solid 1px #666").css("background-color","white");
$('#cn_d').parent().parent().before($('<div class="cl"></div><div class="cl"></div><div class="line3"></div>'));
$('.w_32.tc').after($('<div style="" class="tab_2"><input id="btn_t" onclick="server_setting_apply(\'a\')" type="button" value="Save settings"></div><div class="cl"></div>'));

});