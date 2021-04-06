function invert(text) {
    const words = text.split(' ');
    console.log(words)
    const wordsRevesed = words.reverse();
    console.log(wordsRevesed)
    return wordsRevesed.join(' ');
}

let count = 0;
function start() {
    $('#error').html();
    let text = $('#text').val().trim();
    const isDot = text.indexOf('.');
    let result, source = $('#text').val();

    text = text.replace('.', '');
    if ((isDot | text.split(' ').length > 0) && source.length > 0) result = invert(text) + '.';

    if (result) {
        count++;
        $('#text').val('');
        const div = $('div');
        $('#result').append(`<tr><td class="text-right px-3">${source}</td><td>${result}</td></tr>`);
        $('#result div:last').hide().fadeIn();
    }
    else $('#result').append(`<tr><td class="text-danger text-right px-3">${source}</td><td class="text-danger">format invalide...</tr><td>`);

    $('#selenium').html(`${count} tests effectués avec succès.`).css({ opacity: 0 }).animate(({ opacity: 1 }));
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
