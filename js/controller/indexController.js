var loadTodoList = function(){
    var listTodoContainer = document.getElementById('list-todo-container');
    var todoItems = getTODOListFromStorage();
    for(i = 0;i <todoItems.length;i++){
        var todoListHtml = getHtmlTagForTodoList(i,todoItems[i]);
        listTodoContainer.insertAdjacentHTML('beforeend',todoListHtml);
    }
}

var loadTodoText = function(){
    var listTodoTextContainer = document.getElementById('text-todo-container');
    var todoTextLIsts = getTODOTextFromStorage();
    for(i = 0;i <todoTextLIsts.length;i++){
        var todoListHtml = generateHtmlTagForTextBox(i,todoTextLIsts[i]);
        listTodoTextContainer.insertAdjacentHTML('beforeend',todoListHtml);
    }
}

$('document').ready(function(){
    loadTodoList();
    loadTodoText();
});