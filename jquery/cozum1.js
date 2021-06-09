$(document).ready(function () {

<<<<<<< HEAD
    // task 1
=======
    // görev 1
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev1 > button").click(function () {
        var headings = Array.from($("h2:lt(3)"));
        headings.forEach(head => {
            $("#gorev1 > ul").append("<li>" + head.textContent + "</li>");
        });
    });



<<<<<<< HEAD
    // task 2
=======
    // görev 2
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev2 > button").click(function () {
        var headings = Array.from($("h2"));
        var piece = headings.length;
        $("#gorev2 > input[type = text]").val(piece);
    });



<<<<<<< HEAD
    // task 3
=======
    // görev 3
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev3 > button").click(function () {
        var text = $("article > h1").text();
        $("#gorev3 > input[type = text]").val(text);

    });



<<<<<<< HEAD
    // task 4
=======
    // görev 4
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev4 > button").click(function () {
        var a = Array.from($("p"));
        var b = Array.from($("h2"));
        for (let i = 0; i < a.length; i++) {
            b[i].append(" ( " + a[i].textContent.length + " karakterdir. )")

        }
    });



<<<<<<< HEAD
    // task 5
=======
    // görev 5
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev5 > button").click(function () {
        $("h2:odd").css("color", "blue");
        $("h2:even").css("color", "orange");
        $("h1").css("color", "red");
    });



<<<<<<< HEAD
    // task 6
=======
    // görev 6
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev6").click(function () {
        $("p:eq(0)").fadeOut("slow");
    });



<<<<<<< HEAD
    // task 7 
=======
    // görev 7
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev7 > button").click(function () {
        var headings = Array.from($("h2:contains('can')"));
        headings.forEach(head => {
            $("#gorev7 > ul").append("<li>" + head.textContent + "</li>")
        });

    });



<<<<<<< HEAD
    // task 8
=======
    // görev 8
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev8").click(function () {
        var head = $("<h2>");
        head.html("Lorem");
        $("h1").append(head);
        var text = $("<p>");
        text.addClass("txt")
        $("h1").after(txt);
        $.ajax({
            url: "lorem.html",
            type: get,
            succes: function (data) {
                for (var ad of data) {
                    $(".txt").load("lorem.html")
                }
            }
        });
    });



<<<<<<< HEAD
    // task 9
=======
    // görev 9
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("h2,h1").mouseenter(function () {
        var text = $(this).hover().text();
        $("#gorev9 > input[type = text]").val(text);
    });



<<<<<<< HEAD
    // task 10
=======
    // görev 10
>>>>>>> 77c2f25b3647a876b8cc9d61b2bf1b2d1541c4c5
    $("#gorev10 > button").click(function () {
        var newDiv = $("<div>");
        $("footer").append(newDiv);
        newDiv.addClass("imgDiv");
        $('.imgDiv').prepend('<img class = ".imgDiv" src = "check.png" width="100" height="100" style="position: fixed; bottom: 350px; right: 30px;">');

    });
});