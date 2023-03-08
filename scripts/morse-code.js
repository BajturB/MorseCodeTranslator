export class MorseCodeDic {
    toMorse;
    toStr;
    constructor() {
        [this.toMorse, this.toStr] = MorseCodeDic.initMaps();
    }
    convertMorseToText(morse) {
        let text = '';
        // TODO!
        return text;
    }
    convertTextToMorse(text) {
        text = text.toUpperCase();
        const morse = [];
        for (let c of text) {
            if (!this.toMorse.has(c)) {
                throw new Error('unknown symbol');
            }
            morse.push(this.toMorse.get(c));
        }
        return morse;
    }
    static initMaps() {
        const short = Sign.Short;
        const long = Sign.Long;
        const toMorse = new Map([
            ['A', new MorseCode([short, long])],
            ['B', new MorseCode([long, short, short, short])],
            ['C', new MorseCode([long, short, long, short])],
            ['D', new MorseCode([long, short, short])],
            ['E', new MorseCode([short])],
            ['F', new MorseCode([short, short, long, short])],
            ['G', new MorseCode([long, long, short])],
            ['H', new MorseCode([short, short, short, short])],
            ['I', new MorseCode([short, short])],
            ['J', new MorseCode([short, long, long, long])],
            ['K', new MorseCode([long, short, long])],
            ['L', new MorseCode([short, long, short, short])],
            ['M', new MorseCode([long, long])],
            ['N', new MorseCode([long, short])],
            ['O', new MorseCode([long, long, long])],
            ['P', new MorseCode([short, long, long, short])],
            ['Q', new MorseCode([long, long, short, long])],
            ['R', new MorseCode([short, long, short])],
            ['S', new MorseCode([short, short, short])],
            ['T', new MorseCode([long])],
            ['U', new MorseCode([short, short, long])],
            ['V', new MorseCode([short, short, short, long])],
            ['W', new MorseCode([short, long, long])],
            ['X', new MorseCode([long, short, short, long])],
            ['Y', new MorseCode([long, short, long, long])],
            ['Z', new MorseCode([long, long, short, short])],
            ['0', new MorseCode([long, long, long, long, long])],
            ['1', new MorseCode([short, long, long, long, long])],
            ['2', new MorseCode([short, short, long, long, long])],
            ['3', new MorseCode([short, short, short, long, long])],
            ['4', new MorseCode([short, short, short, short, long])],
            ['5', new MorseCode([short, short, short, short, short])],
            ['6', new MorseCode([long, short, short, short, short])],
            ['7', new MorseCode([long, long, short, short, short])],
            ['8', new MorseCode([long, long, long, short, short])],
            ['9', new MorseCode([long, long, long, long, short])],
            [' ', new MorseCode([Sign.Pause])]
        ]);
        const toStr = new Map();
        for (let [k, v] of toMorse) {
            const key = v.getKey();
            toStr.set(key, k);
        }
        if (toMorse.size !== toStr.size) {
            throw new Error('Conversion error');
        }
        return [toMorse, toStr];
    }
}
export class MorseCode {
    constructor(signs) {
        if (signs.length === 0) {
            throw new Error('Invalid number of signs');
        }
        this.signs = signs;
    }
    getKey() {
        let keyStr = '';
        for (let s of this.signs) {
            switch (s) {
                case Sign.Short:
                    keyStr += '1';
                    break;
                case Sign.Long:
                    keyStr += '2';
                    break;
                case Sign.Pause:
                    keyStr += '0';
                    break;
                default:
                    throw new Error('cannot occur within one character');
            }
        }
        return parseInt(keyStr);
    }
    toString() {
        let str = '';
        for (let s of this.signs) {
            let c;
            switch (s) {
                case Sign.Short:
                    c = '•';
                    break;
                case Sign.Long:
                    c = '—';
                    break;
                case Sign.Pause:
                    c = ' | ';
                    break;
                default:
                    throw new Error('cannot occur within one character');
            }
            str += ` ${c} `;
        }
        return str;
    }
}
export const Sign = Object.freeze({
    Short: Symbol('short'),
    Long: Symbol('long'),
    Pause: Symbol('pause')
})