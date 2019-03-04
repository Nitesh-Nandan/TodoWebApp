const getTODOClasFromJsonString = (strObj)=>{
   if(strObj==null || strObj==undefined){
       return null;
   }
    const tempObj = new TODOList(strObj.title,strObj.deleted);
    const events = strObj.events;
    if(events!=null && events!=undefined){
       for(let i=0;i<events.length;i++){
            if(events[i]!=null && events[i]!=undefined){
                tempObj.addEvent(new items(events[i].task, events[i].checked, events[i].deleted));
            }
        }
    }
    return tempObj;
}


const getTODOListFromStorage = ()=>{
    const todoListString = window.localStorage.getItem('todolists');
    if(todoListString==null || todoListString == undefined){
        return [];
    }
    const todoObj = JSON.parse(todoListString);
    var resultArray = [];
    for(let i = 0;i<todoObj.length;i++){
        var x = getTODOClasFromJsonString(todoObj[i]);
        if(x!=null && x!= undefined){
            resultArray.push(x);
        }
    }
    return resultArray;
}


const saveTODOListToStorage = (todoListObj)=>{
    if(todoListObj == null || todoListObj == undefined){
        return null;
    }
    var pp = getTODOListFromStorage();
    if(pp==undefined || pp==null) {
        pp = [];
    }
    pp.push(todoListObj);
    let jsonStringObject  = JSON.stringify(pp);
    window.localStorage.removeItem("todolists");
    window.localStorage.setItem("todolists", jsonStringObject)
}

// Storage handler for todotext


const getTODOTextObjectFromJsonString = (strObj)=>{
    if(strObj==null || strObj==undefined){
        return null;
    }
    const tempObj = new TODOText(strObj.title,strObj.notes,strObj.deleted);
    return tempObj;
 }
 
 
 const getTODOTextFromStorage = ()=>{
     const todoTextString = window.localStorage.getItem('todotexts');
     if(todoTextString==null || todoTextString == undefined){
         return [];
     }
     const todoObj = JSON.parse(todoTextString);
     var resultArray = [];
     for(let i = 0;i<todoObj.length;i++){
         var x = getTODOTextObjectFromJsonString(todoObj[i]);
         if(x!=null && x!= undefined){
             resultArray.push(x);
         }
     }
     return resultArray;
 }
 
 
 const saveTODOTextToStorage = (todoListObj)=>{
     if(todoListObj == null || todoListObj == undefined){
         return null;
     }
     var pp = getTODOTextFromStorage();
     if(pp==undefined || pp==null) {
         pp = [];
     }
     pp.push(todoListObj);
     let jsonStringObject  = JSON.stringify(pp);
     window.localStorage.removeItem('todotexts');
     window.localStorage.setItem("todotexts", jsonStringObject)
 }



 // objects

 
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
    constructor(title){
        this.title = title;
        this.events = [];
        this.deleted = false;
    }

    addEvent(event){
        this.events.push(event);
    }

    save(){
        saveTODOListToStorage(this);
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


class TODOText{
    constructor(title,notes,deleted){
        this.title = title;
        this.notes = notes;
        this.deleted = deleted == undefined ? false: deleted;
    }

    setNotes(notes){
        this.notes = notes;
    }

    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }

    getNotes(){
        return this.notes;
    }

    setDeleted(deleteFlag){
        this.deleted = deleteFlag;
    }

    isDeleted(){
        return this.deleted;
    }

    appendNotes(notes){
        this.notes = this.notes + notes;
    }

    save(){
        saveTODOTextToStorage(this);
    }
};




// var py1 = new TODOList("Monday Plan");
// py1.addEvent(new items("Run"));
// py1.addEvent(new items("Go to Office"));
// py1.addEvent(new items("hello nitesh"));
// py1.save();

// var py2 = new TODOList("Monday Plan");
// py2.addEvent(new items("Run"));
// py2.addEvent(new items("Go to Office"));
// py2.addEvent(new items("hello nitesh"));
// py2.save();

// var py3 = new TODOList("Monday Plan");
// py3.addEvent(new items("Run"));
// py3.addEvent(new items("Go to Office"));
// py3.addEvent(new items("hello nitesh"));
// py3.save();

// var py4 = new TODOList("Monday End");
// py4.addEvent(new items("Run"));
// py4.addEvent(new items("Go to Office"));
// py4.addEvent(new items("hello nitesh",true,true));
// py4.save();


// //================================================================

// var text1 = new TODOText("Learn NodeJs");
// text1.setNotes("JavaScript is a very powerful language but it is weird.")
// text1.appendNotes(" This is nitesh here");
// text1.save();

// var text2 = new TODOText("Learn NodeJs");
// text2.setNotes("JavaScript is a very powerful language but it is weird.")
// text2.appendNotes(" This is nitesh here");
// text2.save();

// var text3 = new TODOText("Learn NodeJs");
// text3.setNotes("JavaScript is a very powerful language but it is weird.")
// text3.appendNotes(" This is nitesh here");
// text3.save();

// var text4 = new TODOText("Learn NodeJs");
// text4.setNotes("JavaScript is a very powerful language but it is weird.")
// text4.appendNotes(" This is nitesh here");
// text4.save();

// var text5 = new TODOText("Learn NodeJs");
// text5.setNotes("JavaScript is a very powerful language but it is weird.")
// text5.appendNotes(" This is nitesh here");
// text5.save();

// var text6 = new TODOText("Learn NodeJs");
// text6.setNotes("JavaScript is a very powerful language but it is weird.")
// text6.appendNotes(" This is nitesh here");
// text6.save();


