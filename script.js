function invert(text) {
    const words = text.split(' ');
    console.log(words)
    const wordsRevesed = words.reverse();
    console.log(wordsRevesed)
    return wordsRevesed.join(' ');
}

function start() {
    $('#error').html();
    let text = $('#text').val().trim();
    const isDot = text.indexOf('.');
    let result, source = $('#text').val();
    if (text === '.') {
        result = '.';
    } else if (isDot > 0) {
        text = text.replace('.', '');
        result = invert(text) + '.';
    }

    if (result) {
        $('#text').val('');
        const div = $('div');
        $('#result').append(`<div>${source}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${result}</div>`);
        $('#result div:last').hide().fadeIn();
    }
    else $('#error').hide().html('format invalide...').fadeIn();
}

$(document).ready(function() {
    $(document).on("keyup", "#text", function (e) {
        if(e.which == 13) {
            start();
        }
    });

    $(document).on('click', '#btn', function() {
        start();
    });
});
