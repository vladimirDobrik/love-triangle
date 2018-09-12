/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {

    var loveTrianglesCounter = 0;

    for (var i = 0; i < preferences.length; i++) {

        var lover = preferences[i] - 1;
        var nextLover = preferences[lover] - 1;
        var nextNextLover = preferences[nextLover] - 1;

        if (nextNextLover == i) loveTrianglesCounter++;
    }

    if (loveTrianglesCounter % 3) {
        return Math.floor(loveTrianglesCounter / 3);
    } else {
        return loveTrianglesCounter / 3;
    }
};