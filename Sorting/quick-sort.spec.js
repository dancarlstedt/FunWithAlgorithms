describe('QuickSort', function () {

    it('1,2', function () {
        var arr = [1, 2];
        var result = sort(arr, 0, arr.length - 1);
        expect(result).toEqual([1, 2]);
    });


    it('2,1', function () {
        var arr = [2, 1];
        var result = sort(arr, 0, arr.length - 1);
        expect(result).toEqual([1, 2]);
    });

    it('3,6,1,7,9,34,2,8', function () {
        var arr = [3, 6, 1, 7, 9, 34, 2, 8];
        var result = sort(arr, 0, arr.length - 1);
        expect(result).toEqual([1, 2, 3, 6, 7, 8, 9, 34]);
    });

});

function sort(arr, start, end) {
    var leftIndex = start;
    var rightIndex = end;

    var pivot = arr[Math.floor((start + end) / 2)];
    while (leftIndex <= rightIndex) {
        while (arr[leftIndex] < pivot) {
            leftIndex++;
        }
        while (arr[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap(arr, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    } // pivot is in correct place

    if (leftIndex < end) {
        sort(arr, leftIndex, end);
    }

    if (rightIndex > start) {
        sort(arr, start, rightIndex);
    }

    // recurse qs on each half of the pivot
    return arr;
}

function swap(items, first, second) {
    var temp = items[first];
    items[first] = items[second];
    items[second] = temp;
}


