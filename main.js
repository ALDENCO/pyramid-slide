
var slide = new Vue({
    el: 'main',
    data: function() {
        return {
            heightStr: '5',
            // height: 5,
            //error: null
        };
    },
    computed: {
        height: function () {
            return parseInt(this.heightStr);
        },
        rows: function() {
            return pyramidRows(this.height);
            // TODO 5
            // Fill out this computed property by calling
            // pyramidRows on this.height.
   
        },
        // TODO 4 (and two other places: search for "TODO 4")
        // Make a new computed property 'error'.
        // It should be the result of calling checkForErrors on this.heightStr.
        // (Delete the error key from data once this is done)

    },
});


function pyramidRows(height) {

    var rowStrings = [];
    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        rowStrings.push(rowStr);
    }
    return rowStrings;

}