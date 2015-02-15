describe('Permutations', function () {

    it('hat', function () {
        var arg = "hat";
        var result = permute(arg);
        expect(result).toEqual([ 'hat', 'hta', 'aht', 'ath', 'tha', 'tah' ]);
    });

    it('abcd', function(){
        var stringToPermute = 'abcd';
        var result = permute(stringToPermute);
        expect(result).toEqual([ 'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca',
                'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba']);
    });

    it('stef',function (){
        var stringToPermute = 'stef';
        var result = permute(stringToPermute);
        expect(result.length).toBe(24);
    });

    it('stefanie', function(){
        var stringToPermute = 'stefanie';
        var result = permute(stringToPermute);
        expect(result.length).toBe(40320)
    })

});

function permute(str) {
    var permutations = [];
    permuteInternal(str, '', permutations, str.length);
    return permutations;
}

function permuteInternal(str, result, permutations, totalLength) {
    if (result.length === totalLength) {
        permutations.push(result);
        return;
    }

    for (var i = 0; i < str.length; i++) {
        var currentCharacter = str[i];
        var otherCharacters = str.substr(0, i);
        otherCharacters += str.substr(i + 1);

        permuteInternal(otherCharacters, result + currentCharacter, permutations, totalLength);
    }
}
