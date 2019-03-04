$('document').ready(function(){
    $('form').bind("keypress", function(e){
        if(e.keyCode == 13){
            e.preventDefault();
            return false;
        }
    });
   
    var id = 1;
    
    var listContainer = document.getElementById('list-container');
    var listHeader = document.getElementById('list-Header');
    listHeader.addEventListener('keydown', addTodoList);
    
    function addTodoList(event){
        if(event.which==13){
            if(this.value==""){
                alert("Enter something to add in the list");
                return;
            }
            else{
                var text = this.value;
                this.value="";
                var item = `<li id="listItem-${id}"> ${text}</li>`;
               
                listContainer.insertAdjacentHTML('beforeend',item);
                id++;
            }
        }
    }
});