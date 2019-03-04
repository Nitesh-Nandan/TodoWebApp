// function getTODOClasFromJsonString(strObj){

//     const tempObj = new TODOList(strObj.title,strObj.deleted);
//     const events = strObj.events;
//     for(let i=0;i<events.length;i++){
//         tempObj.addEvent(events[i].task, events[i].checked, events[i].deleted);
//     }
//     return tempObj;
// }

const getTODOClasFromJsonString = (strObj)=>{
    const tempObj = new TODOList(strObj.title,strObj.deleted);
    const events = strObj.events;
    for(let i=0;i<events.length;i++){
        tempObj.addEvent(events[i].task, events[i].checked, events[i].deleted);
    }
    return tempObj;
}


const getTODOListFromStorage = ()=>{
    const todoListString = window.localStorage.getItem('todolists');
    const todoObj = JSON.parse(todoListString);
    var resultArray = [];
    for(let i = 0;i<todoObj.length;i++){
        resultArray.push(getTODOClasFromJsonString(todoObj[i]));
    }
    return resultArray;
}


const saveTODOListToStorage = (todoListObj)=>{
    var pp = getTODOListFromStorage();
    if(pp==undefined) {
        pp = [];
    }
    pp.push(todoListObj);
    let jsonStringObject  = JSON.stringify(pp);
    window.localStorage.setItem("todolists", jsonStringObject);
}

// const addtodoList = (elem)=>{
//     todoLists.push(elem);
// }

// var addTdoText = function(elem){
//     todoTexts.push(elem);
// }


// var getTodoLists = function(){
//     return todoLists;
// }

// var getTodoTexts = function(){
//     return todoTexts;
// }
