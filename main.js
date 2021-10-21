
onload = function () {
    fetch('https://dog.ceo/api/breeds/list/all', {
        method: ' GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ breed: this.value })
    })
        .then(res => res.json())
        .then(data => console.log(data));

}

