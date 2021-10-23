const $ = document.querySelector.bind(document);

function showImage() {
    var breed = this.innerText;
    var priorSelected = $('.selected');

    if (priorSelected ) {
        priorSelected.className = '';
    }
    this.classList.add('selected');
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(r => r.json())
        .then(data => {
        $('#dog').src = data.message;

    });
}
function createButton(txt) {
    var btn = document.createElement('button');
    btn.innerText = txt;
    $('#button').appendChild(btn);
    btn.onclick = showImage;

}

window.onload = function () {

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
            Object.keys(data.message)
                .forEach(createButton);
        })

}

