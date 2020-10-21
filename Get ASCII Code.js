var type = document.getElementById('type')
var result = document.getElementById('result');

document.addEventListener('keydown', function (e) {
    var key = e.keyCode;
    if (key == 32) {
        type.textContent = 'Space: ' + key;
    }
    else if (key == 13) {
        type.textContent = 'Enter: ' + key;
    }
    else {
        type.textContent = String.fromCharCode(key) + ': ' + key;
    }
})

for (let i = 0; i < 255; i++) {
    var number = String.fromCharCode(i);
    result.innerHTML += i + ': ' + number + '<br>';
}