describe('Combinations', function () {

    it('ab', function () {
        var str = 'ab';
        var result = getCombos(str);
        expect(result).toEqual(['a', 'ab', 'b']);
    });

    it('abc', function () {
        var str = 'abc';
        var result = getCombos(str);
        expect(result).toEqual(['a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']);
    });

});


function getCombos(str) {
    var combinations = [];
    var populateCombos = function (str, previousCombo, combinations) {
        for (var i = 0; i < str.length; i++) {

            var currentLetter = str[i];
            var currentCombo = previousCombo + currentLetter;

            combinations.push(currentCombo);

            if (i < str.length - 1) {
                populateCombos(str.substr(i + 1), currentCombo, combinations);
            }
        }
    };

    populateCombos(str, '', combinations);
    return combinations;
}