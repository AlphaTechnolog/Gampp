/**
 * Capitalize a text.
 * @example Text: hEllo, woRLd -> 1 -> Hello, world
 * @example Text: hELlo, woRLd -> 2 -> Hello, World
 * @description This capitalize the text, with two options, 1 -> capitalize
 *              word, 2 -> capitalize all words.
 * @param {string} text The text to capitalize.
 * @param {string} type The capitalization type.
 * @returns {string}
 */
export class Capitalization {
    text
    type
    capitalized

    constructor(text, type) {
        this.text = text;
        this.type = type;
        this.capitalized = this._capitalize()
    }

    _validateType() {
        return !(this.type !== 2 &&
                this.type !== 1) // this check if the `this.type` is in the range `1` - `2`.
    }

    _callMethods() {
        switch (this.type) {
            case 1:
                return this._capitalizeOneWord()
            case 2:
                return this._capitalizeAllWords()
            default:
                break
        }
    }

    _capitalizeOneWord() {
        return this.text.charAt(0).toUpperCase() + this.text.slice(1).toLowerCase();
    }

    _capitalizeAllWords() {
        return this.text
                    .split(' ')
                    .map((word) => {
                        return word
                                .charAt(0)
                                .toUpperCase() + word.slice(1).toLowerCase()
                    })
                    .join(' ');
    }

    _capitalize() {
        const ok = this._validateType();
        if (ok) {
            return this._callMethods();
        }
    }
}

/**
 * Capitaqlize a text
 * @description Shortcut for new Capitalization(text, type).capitalized
 * @param {string} text The text to capitalize
 * @param {number} type The capitalization type
 */
export const cap = (text, type) => {
    const { capitalized } = new Capitalization(text, type);
    return capitalized;
}
