var getHtmlTagforEvents = function (pid, id, event) {

    if (event.isDeleted()) {
        return '';
    }
    else if (event.isChecked()) {

    }
    else {
        return `<li id="event-${pid}-${id}">
                <input type="checkbox" id="ckbox-${pid}-${id}" class="check-box"></input>
                <text>${event.getTask()}</text>
                </li>`;
    }
}


var getHtmlTagForTodoList = function (id, todoItem) {

    this.title = todoItem.getTitle();

    this.hdr = `<div class = "todo-${id}">
                <div class = "tl">
                ${title}
                </div>
                <div class "event">
                <ul>`;

    this.footter = `</ul></div>`

    var events = todoItem.getEvents();
    for (l = 0; l < events.length; l++) {
        htmlTag = getHtmlTagforEvents(id, l, events[l]);
        this.hdr = this.hdr + htmlTag;
    }

    this.hdr = this.hdr + this.footter;

    return this.hdr;

}

var generateHtmlTagForTextBox = function(id, todoTextElem){
    if(todoTextElem.isDeleted()){
        return '';
    }
    else{
        return `<div class = "textbox">
        <div class = "textBox-tl" id ="textBox-${id}"> ${todoTextElem.getTitle()} </div><hr>
        <div class "text-box-content" id ="textBox-content-${id}"> ${todoTextElem.getNotes()}</div>
        </div>` ; 
    }
}



