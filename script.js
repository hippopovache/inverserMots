function inverser(text) {
    const words = text.split(' ');
    const wordsRevesed = words.reverse();
    return wordsRevesed.join(' ');
}

$(document).ready(function() {
    $(document).on('click', '#btn', function() {
        const text = $('#text').val().trim();
        const isDot = text.indexOf('.');
        let result;
        if (isDot > 0) {
            text.replace('.', '');
            result = inverser(text);
        }
        $('#result').html(result);
    });
});