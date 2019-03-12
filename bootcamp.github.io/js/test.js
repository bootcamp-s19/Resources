var d = document.getElementById("body_main");

function makeBox(id_string){
    //console.log("in MakeBox");
    //var div = document.createElement("div");
    //d.appendChild(div);

    var string_to_add = "<div id=" + id_string + "></div>";
    d.innerHTML = string_to_add;
    //console.log("created div");
}

function putNumberInBox(num_i,id_string){
    var specific_box = document.getElementById(id_string);
    var string_to_insert = "";

    for (var i = 0; i<num_i;i++){
        string_to_insert += i + " ";
    }

    specific_box.innerHTML = string_to_insert;
    
    //console.log("in putNumberInBox");
    //console.log(num_i);
    //console.log(id_string);
}

function buttonClick(){
    alert("hi");
}

function start(){
    var num_i = 200;
    var id_string = 'box_hello';

    makeBox(id_string);
    putNumberInBox(num_i,id_string);


    
}