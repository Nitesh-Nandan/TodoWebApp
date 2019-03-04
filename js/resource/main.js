$('document').ready(function(){
var id = 1;
var listContainer  = document.getElementById('todoListContainer');

var todoList = document.getElementById('todo-list');
todoList.addEventListener('keydown', addTodoList);

function addTodoList(event){
    if(event.which==40){
        if(this.value==""){
            alert("Enter something to add in the list");
            return;
        }
        else{
            var text = this.value;
            this.value="";
            var item = `<li class="item-list" id="li-${id}"> <text class="seperator">${text}</text><input id="box-${id}" class="chekcboxes" type="checkbox"></li>`;
           
            listContainer.insertAdjacentHTML('beforeend',item);
            id++;
        }
    }
}

// striking through to list

todoListContainer.addEventListener("click", boxChecked);

function boxChecked(event){
    const element = event.target;
    if(element.type === "checkbox"){
        console.log(this.value);
        element.parentNode.style.textDecoration = 'line-through';
    }
}

// Event listner for text box..........

var tid = 1;
var textBoxContainer = document.getElementById('todoListContainer-textBox');
var textContainer = document.getElementById('todo-textBox');
textContainer.addEventListener('keydown', addTextBox);

var pre=-1;

function addTextBox(event){

    var keyCode = event.which;
    if(pre==13 && keyCode==13){
        if(this.value==""){
            alert("Enter something to add in the list");
            return;
        }
        else{
            var text = this.value;
            this.value="";
            var titem = `<li> <div class="text-box" id="tex-box-${tid}"><p> ${text} </p></div> </li>` 

            textBoxContainer.insertAdjacentHTML('beforeend',titem);
            tid++;
        }
    }

    pre = keyCode;
}

});


