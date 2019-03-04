var handleTodoList = function () {
    var todoListObj = new TODOList();
    var id = 0;
    var listContainer = document.getElementById('list-container');
    listContainer.addEventListener("click", boxChecked);
    var saveButton = document.getElementById('todo-list-save');
    var listHeader = document.getElementById('todo-fields-list');

    saveButton.addEventListener('click', saveTodo);
    listHeader.addEventListener('keydown', addTodoList);

    function addTodoList(event) {
        if (event.which == 13) {
            if (this.value == "") {
                alert("Enter something to add in the list");
                return;
            }
            else {
                var text = this.value;
                this.value = "";
                var item = `<li id="addTodo-list-${id}">
                <input type="checkbox" id="addTodo-ckbox-${id}" class="check-box"></input>
                <text>${text}</text>`

                todoListObj.addEvent(new items(text));

                listContainer.insertAdjacentHTML('beforeend', item);
                id++;
            }
        }
    }

    function saveTodo(){
        todoListObj.setTitle(document.getElementById('todo-fields-title').value);
        document.getElementById('todo-fields-title').value = '';
        while(listContainer.firstChild){
            listContainer.removeChild(listContainer.firstChild);
        }
        todoListObj.save();
    }

   

    function boxChecked(event){
        const element = event.target;
        if(element.type === "checkbox"){
            console.log(this.value);
            element.nextElementSibling.style.textDecoration = 'line-through';
            let id = element.id;
            let index = id.split('-')[2];
            todoListObj.events[index].deleted = true;
        }
    }
};

var handleTodoText = () => {

    var todoListTextObj = new TODOText();
    var saveButton = document.getElementById('todo-text-save');

    saveButton.addEventListener('click', saveTodoText);

    function saveTodoText(){
        var title = document.getElementById('todo-text-title').value;
        var textContent = document.getElementById('todo-text-note').value;
        todoListTextObj.setTitle(title);
        todoListTextObj.setNotes(textContent);
        
        if(isEmpty(title) && isEmpty(textContent)){
            alert("Can't save: both can't be empty");
        }
        else{
            document.getElementById('todo-text-title').value = '';
            document.getElementById('todo-text-note').value = '';
            todoListTextObj.save();
        }
        
    }

};

$('document').ready(function () {
    handleTodoList();
    handleTodoText();
});