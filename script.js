function inverser(text) {
    const words = text.split(' ');
    console.log(words)
    const wordsRevesed = words.reverse();
    console.log(wordsRevesed)
    return wordsRevesed.join(' ');
}

function start() {
    let text = $('#text').val().trim();
    const isDot = text.indexOf('.');
    let result;
    if (text === '.') {
        result = '.';
    } else if (isDot > 0) {
        text = text.replace('.', '');
        result = inverser(text) + '.';
    }
    if (result) $('#result').html(result);
    else $('#result').html('<div class="text-danger">format invalide...</div>');
    $('#text').val('');
}

$(document).ready(function() {
    $(document).on("keyup", "input", function (e) {
        if(e.which == 13) {
            start();
        }
    });

    $(document).on('click', '#btn', function() {
        start();
    });
});
