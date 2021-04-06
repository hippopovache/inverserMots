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
        $('#text').val('');
    } else if (isDot > 0) {
        text = text.replace('.', '');
        result = inverser(text) + '.';
        $('#text').val('');
    }
    if (result) $('#result').hide().html(result).fadeIn();
    else $('#result').hide().html('<div class="text-danger">format invalide...</div>').fadeIn();
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
