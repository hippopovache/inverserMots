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

    text = text.replace('.', '');
    if (text.split(' ').length > 0 ) result = invert(text) + '.';

    if (result) {
        $('#text').val('');
        const div = $('div');
        $('#result').append(`<div>${source}<span class="px-5">|</span>${result}</div>`);
        $('#result div:last').hide().fadeIn();
    }
    else $('#result').append(`<div class="text-danger">${source}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;format invalide...</div>`);
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
