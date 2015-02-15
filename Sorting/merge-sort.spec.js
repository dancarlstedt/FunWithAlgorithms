describe('MergSort', function () {

    it('1,2', function () {
        var arr = [1, 2];
        var result = mergeSort(arr);
        expect(result).toEqual([1, 2]);
    });

    it('2,1', function () {
        var arr = [2, 1];
        var result = mergeSort(arr);
        expect(result).toEqual([1, 2]);
    });

    it('9, 2,2', function () {
        var arr = [9, 2, 2];
        var result = mergeSort(arr);
        expect(result).toEqual([2, 2, 9]);
    });

    it('3,6,1,7,9,34,2,8,9', function () {
        var arr = [3, 6, 1, 7, 9, 9, 34, 2, 8];
        var result = mergeSort(arr);
        expect(result).toEqual([1, 2, 3, 6, 7, 8, 9, 9, 34]);
    });

});

// stable sorting algorithm (just like insertion sort) that is O(n log n)
function mergeSort(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }

    var mid = Math.floor(numbers.length / 2);

    // splice will modify the array and remove the number of items from the second argument
    var left = numbers.splice(0, mid);
    var right = numbers.splice(0);

    return merge(mergeSort(left), mergeSort(right));

    function merge(left, right) {
        var indexLeft = 0,
            indexRight = 0,
            merged = [];

        while (indexLeft < left.length && indexRight < right.length) {

            if (left[indexLeft] <= right[indexRight]) {
                merged.push(left[indexLeft]);
                indexLeft++;
            } else {

                merged.push(right[indexRight]);
                indexRight++;
            }
        }

        // return with concat to get remaining items from either list if one of the list has finished
        return merged.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }
}




