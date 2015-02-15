describe('PhoneCombos', function () {

    it('23', function () {
        var phoneNumber = [2, 3];
        var words = new Phone(phoneNumber).getWords();
        expect(words).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    });

    it('234', function () {
        var phoneNumber = [2, 3, 4];
        var words = new Phone(phoneNumber).getWords();
        expect(words).toEqual(['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi',
            'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi']);
    });

    it('12', function () {
        var phoneNumber = [1, 2];
        var words = new Phone(phoneNumber).getWords();
        expect(words).toEqual(['a', 'b', 'c']);
    });

    it('01', function () {
        var phoneNumber = [0, 1];
        var words = new Phone(phoneNumber).getWords();
        expect(words).toEqual([]);
    })
});


function Phone(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.phoneNumberLength = phoneNumber.length;
};

Phone.prototype.getWords = function () {
    var words = [];
    populateWords(this.phoneNumber, '', words, this.phoneNumberLength, 1);

    return words;

    function populateWords(phoneNumber, word, words, phoneNumberLength, level) {
        for (var i = 0; i < phoneNumber.length; i++) {
            var number = phoneNumber[i];
            if (number == 0 || number == 1) {
                level++;
                continue;
            }

            for (var j = 0; j < 3; j++) {
                var letter = getCharacter(number, j);
                var currentWord = word + letter;

                if (level !== phoneNumberLength) {
                    populateWords(phoneNumber.slice(i + 1), currentWord, words, phoneNumberLength, level + 1)
                }
                else {
                    words.push(currentWord);
                }
            }
        }

        function getCharacter(number, position) {

            var letters = [];
            switch (number) {
                case 2:
                    letters = ['a', 'b', 'c'];
                    break;
                case 3:
                    letters = ['d', 'e', 'f'];
                    break;
                case 4 :
                    letters = ['g', 'h', 'i'];
                    break;
                default:
                    letters = [];
                    break;
            }

            return letters.length > 1 ? letters[position] : '';
        }

    }
}