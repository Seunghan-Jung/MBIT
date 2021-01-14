const facebookShare = document.querySelector('.facebook_share');
const copyBtn = document.querySelector('.copy_btn');

$(function() {
    let url = window.location.href;
    let img = $('.result_img img').attr('src');
    $("meta[property='og\\:url']").attr("content", url);
    $("meta[property='og\\:image']").attr("content", img);

    console.log(img);
});

function sharefacebook() {
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

function copyUrl() {
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

facebookShare.addEventListener('click', sharefacebook);
copyBtn.addEventListener('click', copyUrl);