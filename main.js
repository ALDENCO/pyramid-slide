//document.getElementById("pyramidRows").innerHTML = "selected"


var slide = new Vue({
    el: 'main',
    data: function() {
        return {
            heightStr: '',
            selected: this.value,
            // height: 5,
            //error: null
        };
    },
    computed: {
        height: function () {
            return parseInt(this.heightStr);
        },
        rows: function() {
            console.log('recalculating', this.height, this.selected);
            return pyramidRows(this.height, this.selected);
        },
    },
});


function pyramidRows(height, blockChar) {

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
            rowStr += blockChar;
        }

        rowStrings.push(rowStr);
    }
    
    return rowStrings;

    
    
}