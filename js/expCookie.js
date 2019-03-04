var todoLists = [];
var todoTexts = [];

var items = function(task, checked, deleted){

    this.task = task;
    this.checked = checked == undefined ? false : checked;
    this.deleted = deleted == undefined ? false : deleted;

    this.isChecked = function(){
        return this.checked;
    }

    this.isDeleted = function(){
        return this.deleted;
    }

    this.getTask  = function(){
        return this.task;
    }
};

class TODOList{
    constructor(title,deleted,events){
        this.title = title;
        this.events = [];
        this.deleted = false;
    }

    addEvent(event){
        this.events.push(event);
    }

    save(){
        todoLists.push(this);
    }

    isDeleted(){
        return this.deleted;
    }

    getEvents(){
        return this.events;
    }

    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }
};


var py1 = new TODOList("Monday Plan");
py1.addEvent(new items("Run"));
py1.addEvent(new items("Go to Office"));
py1.addEvent(new items("hello nitesh"));
py1.save();

var py2 = new TODOList("Tuesday Plan");
py2.addEvent(new items("Run"));
py2.addEvent(new items("Go to Office"));
py2.addEvent(new items("hello nitesh"));
py2.save();

var py3 = new TODOList("Monday Plan");
py3.addEvent(new items("Run"));
py3.addEvent(new items("Go to Office"));
py3.addEvent(new items("hello nitesh"));
py3.save();


var jsonString = JSON.stringify(todoLists);

// console.log(jsonString);

// window.localStorage.setItem("todolists", jsonString);

function getTODOClasFromJsonString(strObj){

    var tempObj = new TODOList(strObj.title,strObj.deleted);
    var events = strObj.events;
    for(let i=0;i<events.length;i++){
        tempObj.addEvent(events[i].task, events[i].checked, events[i].deleted);
    }
    return tempObj;
}


function getTODOListFromStorage(){
    var todoListString = window.localStorage.getItem('todolists');
    var todoObj = JSON.parse(todoListString);
    console.log(typeof todoObj);
    var resultArray = [];
    for(i = 0;i<todoObj.length;i++){
        resultArray.push(getTODOClasFromJsonString(todoObj[i]));
    }
    return resultArray;
}

function saveTODOListToStorage(todoListObj){
    const todoListObjects = getTODOListFromStorage();
    todoListObjects.push(todoListObj);
    let jsonStringObject  = JSON.stringify(todoListObjects);
    window.localStorage.setItem("todolists", jsonStringObject)
}

getTODOListFromStorage();