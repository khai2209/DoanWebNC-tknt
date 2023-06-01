document.addEventListener('DOMContentLoaded', function () {
    var loadmoreBtn = document.getElementById('loadmoreBtn');
    var hidenText = document.getElementById('hidenText');
    var originText = loadmoreBtn.innerText;
    loadmoreBtn.addEventListener('click', function() {
        if(hidenText.style.display == 'block'){
            hidenText.style.display = 'none';
            loadmoreBtn.innerText = originText;
        } else {
            hidenText.style.display = 'block';
            loadmoreBtn.innerText = 'Thu gọn';
        }
    });
});