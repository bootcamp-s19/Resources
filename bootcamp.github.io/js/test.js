
function addValue(placeholder){
    console.log(placeholder);
    var symbol = "";

    if (count %2 == 0){

        symbol = "X";
    }
    else{
        symbol = "O";
    }



    return;

}


function myFunction() {

    var str = "";
    var obj = document.getElementById("main_container");

    for (var i = 0; i < 3; i++) {

        str += "<div class='row' id='test_row'> ";
        var str2 = "";

        for (var j = 0; j < 3; j++) {
            
            var key_ = "index"+ String(i) + String(j);
            
            console.log(key_);

            str2 += "<div ";

            str2 += "class='col-xs-2' ";

            str2 += "id='test_col " + key_ + "'";

            str2 += "> ";

            str2 += "<button onclick=addValue( '" + key_ + "' )>click me</button>";
            //console.log(str2);

            str2 += "</div>";
            //col

        }

        str += str2;
        str += "</div>";
        //row

    }

    obj.innerHTML = str;
}
