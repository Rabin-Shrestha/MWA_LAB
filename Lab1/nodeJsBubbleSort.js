/**
 * Created by Rabin Shrestha on 6/27/2017.
 */
Array.prototype.bubbleSort = function () {
    var items = this;

    for (let i = 0; i < items.length; i++) {
        let flag = true;
        for (let j = 0; j < items.length - i - 1; j++)
        {
            if (items[j] > items[j + 1]) {
                flag = false;
                let temp = items[j + 1];
                items[j + 1] = items[j];
                items[j] = temp;
            }
        }
        // No Swapping happened, array is sorted
        if (flag) {
            return items;
        }
    }

}
console.log("Before sorting " + [6,4,0, 3,-2,1]);
console.log("After sorting " + [6,4,0,3,-2,1].bubbleSort());