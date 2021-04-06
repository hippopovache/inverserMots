function inverser(text) {
    const words = text.split(' ');
    if (words.length <= 2) {
        console.log(words)
        const wordsRevesed = words.reverse();
        console.log(wordsRevesed)
        return wordsRevesed.join(' ');
    }
    return null;
}

$(document).ready(function() {
    $(document).on('click', '#btn', function() {
        let text = $('#text').val().trim();
        const isDot = text.indexOf('.');
        let result;
        if (isDot > 0) {
            text = text.replace('.', '');
            result = inverser(text);
        }
        if (result) $('#result').html(result + '.');
        else $('#result').html('<div class="text-danger">format invalide...</div>');
    });
});
