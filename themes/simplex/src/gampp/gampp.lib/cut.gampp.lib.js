/**
 * Cut a text by length.
 * @example Hello World -> 11 -> Hello...rld
 * @description This cut the text with the maxlength as the before example.
 * @param {string} text The text to cut
 * @param {number} maxLength The max length
 * @returns {string} The capitalized text.
 */
export const cut = (text, maxLength) => {
    const _cut = () => {
        let newText = [];
        let cont = true;
        text = text.split('');
        text.forEach((item, i) => {
            if (cont) {
                if (i + 1 <= maxLength - 6) {
                    newText.push(item);
                } else {
                    newText.push('...');
                    newText.push(text[text.length - 3]);
                    newText.push(text[text.length - 2]);
                    newText.push(text[text.length - 1]);
                    cont = false;
                }
            }
        });
        newText = newText.join('');
        return newText;
    }

    if (text.length > maxLength) {
        return _cut();
    } else {
        return text;
    }
}