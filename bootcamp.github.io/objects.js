var array_test = [1, 4, 2, 6, 8, 4, 0, 2, 4, 1, 5, 3, 6, 5, 7];

//var second = "second";
var object_test = {
    first_item: "hello",
    second: "next",
    third_item_here: 17,
    joe: true,
    howdy: "hello",
    listObject: ["hello there", "goodbye", "see you next time"],
    yeeeee: "yee",
    numbers: [1, 2, 3, 4, 7, 5, 4, 3, 2, 1],
    lastOne: "see you next time",
    onemore: "sike",
    5634532: "yes we can get a number"
};
function main() {
    console.log("array_test line 17:", array_test);

    console.log("array_test[0] line 19:", array_test[0]);

    var x = 0;
    console.log("array_test[x] line 22:", array_test[x]);

    x = 3;
    console.log("array_test[x] line 25:", array_test[x]);

    console.log("array_test[array_test.length-1] line 27:", array_test[array_test.length - 1]);

    console.log('line 29 first loop');
    for (var i = 0; i < array_test.length; i++) {
        console.log("i line 31, in loop:", i);

        console.log("array_test[i] line 33, in loop:", array_test[i]);
    }

    console.log('line 36 second loop');
    for (j in array_test) {
        console.log("j line 38, in loop:", j);

        console.log("array_test[j] line 40, in loop:", array_test[j]);
    }


    ////////////


    console.log("object_test line 47:", object_test);

    console.log("object_test[0] line 49:", object_test[0]);

    var x = 0;
    console.log("object_test[x] line 52:", object_test[x]);

    x = 3;
    "x"
    console.log("object_test[x] line 55", object_test[x]);
    console.log("object_test[object_test.length-1] line 56", object_test[object_test.length - 1]);
    console.log("object_test['second'] line 57:", object_test["second"]);
    console.log("object_test.joe line 58:", object_test.joe);
    console.log('line 59 first loop');

    console.log("object_test.length line 61:", object_test.length);

    console.log("Object.keys(object_test) line 63:", Object.keys(object_test));

    console.log("Object.keys(object_test).length line 65:", Object.keys(object_test).length);

    for (var i = 0; i < object_test.length; i++) {
        console.log("i line 68, in loop:", i);

        console.log("object_test[i] line 70, in loop:", object_test[i]);
    }
    console.log('line 72 second loop');
    var array_keys = Object.keys(object_test);
    for (var i = 0; i < array_keys.length; i++) {
        console.log("i line 74, in loop:", i);
        console.log(" array_keys[i] line 75, in loop:", array_keys[i]);
        console.log("object_test[i] line 76, in loop:", object_test[ array_keys[i] ]);
    }

    console.log('line 79 second loop');
    for (var key in object_test) {
        console.log("key line 81, in loop:", key);

        console.log("object_test[key] line 83, in loop:", object_test[key]);
        //var key = "second";
        //console.log(array_keys[0]);
        console.log("object_test.key line 85, in loop:", object_test.key);
    }
    console.log("end of examples line 87");
}