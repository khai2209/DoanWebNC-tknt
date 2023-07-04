// load more

document.addEventListener('DOMContentLoaded', function () {
    var loadmoreBtn = document.getElementById('loadmoreBtn');
    var hiddenText = document.getElementById('hiddenText');
    var originText = loadmoreBtn.innerText;
    loadmoreBtn.addEventListener('click', function() {
        if(hiddenText.style.display == 'block'){
            hiddenText.style.display = 'none';
            loadmoreBtn.innerText = originText;
        } else {
            hiddenText.style.display = 'block';
            loadmoreBtn.innerText = 'Thu gọn';
        }
    });
});
