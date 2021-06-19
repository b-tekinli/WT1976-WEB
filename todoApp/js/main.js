let todos = [];
let todosdate = [];



// EVENTS
// NEW TODO
$("#frmTodo").submit(function(event) {
 
    var dateObject =new Date() 
    var date = dateObject.getDate() + "." + (dateObject.getMonth()+1) + "." + dateObject.getFullYear() + "-" + dateObject.getHours()+":"+dateObject.getMinutes()+":"+dateObject.getSeconds();

    event.preventDefault();

    let todo = {
        id: maxId() + 1,
        task: $("#inputTask").val().trim(),
        isDone: false,
        datetime: date
    }

    todos.push(todo);
    saveData();
    this.reset();
    listTodos();
});

// DONE/UNDONE
$("body").on("change", "input[type='checkbox'][data-id]", function() {
    let id = $(this).data("id");

    let todo = getTodoById(id);
    saveData();
    listTodos();
});

// DELETE
$("body").on("dblclick", "li", function() {
    if (!confirm("Are you sure to delete the todo item?"))
        return;
    let id = $(this).data("id");
    deleteById(id);
    saveData();
    listTodos();
});


// FUNCTIONS
function saveData() {
    localStorage["data"] = JSON.stringify(todos);
}

function loadData() {
    try {
        todos = JSON.parse(localStorage["data"]);
    }
    catch {
        todos = [];
    }
}

function deleteById(id) {
    let index;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            index = i;
            break;
        }
    }
    todos.splice(index, 1);
}

function getTodoById(id) {
    for (const todo of todos) {
        if (todo.id == id)
            return todo;
    }
    return null;
}

function maxId() {
    let max = 0;

    for (const todo of todos) {
        if (todo.id > max)
            max = todo.id;
    }

    return max;
}

function listTodos() {
    $("ul#todos").html("");
    let sortedTodos = todos.sort((a,b) => a.isDone - b.isDone);
    $.each(sortedTodos, function(index, todo) {
        let li = $("<li/>")
            .attr("id", todo.id);
        let cb = $("<i><i/>")
                    .attr("data-id", todo.id)
                    .addClass("fas fa-star")
                    .attr("onclick","stars("+todo.id+")")

        if (todo.isDone) {
            cb.css("color","yellow")
        
        }
        else
        {
            cb.css("color","black")

        }
       
        li.append(cb);
        li.append(" " + todo.task);
        li.append("<br/>"+"<p style='font-size:12px;color:gray;'>"+todo.datetime+"</p>")
        $("ul#todos").append(li);
    });
}

$("#datechanger").on("change",
function datefilter(){
todosDate.splice(0,todosDate.length);
var dateval =($(this).val())
var select = dateval.split("-");
var selectDay = select[2];
var selectMonth = select[1].slice(1);

    for(var i=0;i<todos.length;i++)
    {
      var gun = todos[i].datetime.split(".",1);
      var ay1 = todos[i].datetime.split(".",2);
    var ay = ay1[1];
      if (gun == selectDay && ay == selectMonth)
      {
        
        todosDate.push(todos[i]);
      }
    }
    $("ul#todos").html("");
    $.each(todosDate, function(index, todo) {
        let li = $("<li/>")
            .attr("data-id", todo.id);
        let cb = $("<i><i/>")
        .attr("id", todo.id)
        .addClass("fas fa-star")
        .attr("onclick","stars("+todo.id+")")


if (todo.isDone) {
cb.css("color","yellow")

}
else
{
    cb.css("color","black")

}


        li.append(cb);
        li.append(" " + todo.task);
        li.append("<br/>"+"<p style='font-size: 12px; color: gray;'>"+todo.datetime+"</p>")
        $("ul#todos").append(li);
    });
})

$("#find").on("keypress",function(){
var val = $(this).val();

todosDate.splice(0, todosDate.length);

for (var i =0; i < todos.length; i++)
{
    if (todos[i].task.includes(val))
    {
        todosDate.push(todos[i]);
    }
}
$("ul#todos").html("");
$.each(todosDate, function(index, todo) {
    let li = $("<li/>")
        .attr("data-id", todo.id);
    let cb = $("<i><i/>")
    .attr("id", todo.id)
    .addClass("fas fa-star")
    .attr("onclick","stars("+ todo.id + ")")

if (todo.isDone) {
cb.css("color", "yellow")
}
else
{
    cb.css("color","black")

}

    li.append(cb);
    li.append(" " + todo.task);
    li.append("<br/>" + "<p style='font-size:12px; color:gray;'>" + todo.datetime + "</p>")
    $("ul#todos").append(li);
});

});

function stars(id){

    var todo = todos.find(function (todo1) {
        if (todo1.id === id) {
          
            if (todo1.isDone == false)
            todo1.isDone = true;
            else
            todo1.isDone = false;

        }
    })
    $("#yildizgoster").prop('checked', false);
    saveData();
    listTodos();
}

$("#yildizgoster").change( function(){
    if( $(this).is(':checked') ) {
        todosDate.splice(0, todosDate.length);

        for(var i = 0; i < todos.length; i++)
        {
            if(todos[i].isDone)
            {
                todosDate.push(todos[i]);
            }
        }
        $("ul#todos").html("");
        $.each(todosDate, function(index, todo) {
            let li = $("<li/>")
                .attr("data-id", todo.id);
            let cb = $("<i><i/>")
            .attr("id", todo.id)
            .addClass("fas fa-star")
            .attr("onclick", "stars("+todo.id+")")
        
        if (todo.isDone) {
        cb.css("color", "yellow")
        }
        else
        {
            cb.css("color", "black")
        
        }
        
            li.append(cb);
            li.append(" " + todo.task);
            li.append("<br/>"+"<p style='font-size: 12px; color: gray;'>"+todo.datetime+"</p>")
            $("ul#todos").append(li);
        });



     }
     else{
        listTodos();
    }
 });

loadData();
listTodos();
