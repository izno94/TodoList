const toDoList = [];

class TodoClass {
    constructor(item){
        this.ulElement = item;
    }
    add(){
        const todoInput = document.querySelector("#addList").value;
        if(todoInput == "") {
            alert("Vide !!!")
        } else {
            const toDoObject = {
                id : toDoList.length,
                todoText : todoInput,
                isDone : false,
            }
            toDoList.unshift(toDoObject);
            this.display();
            document.querySelector("#addList").value = '';
        }
    }
    doneUndone(x){

        const selectedTodoIndex = toDoList.findIndex((item)=> item.id == x);
        console.log(toDoList[selectedTodoIndex].isDone);
        toDoList[selectedTodoIndex].isDone == false ? toDoList[
            selectedTodoIndex].isDone = true : toDoList[selectedTodoIndex].isDone = false;
            this.display();

    }
    deletedElement(z){

        const selectedDelIndex = toDoList.findIndex((item)=> item.id == z);
        toDoList.splice(selectedDelIndex,1);
        this.display();

    }
    display(){
        this.ulElement.innerHTML = "";

        toDoList.forEach((object_item)=>{

        const liElement = document.createElement("li");
        const delBtn = document.createElement("i")

        liElement.innerText = object_item.todoText;
        liElement.setAttribute("data-id", object_item.id);

        delBtn.setAttribute("data-id", object_item.id);
        delBtn.classList.add("far","far-trash-alt") //ajouter des class

        liElement.appendChild(delBtn)

        delBtn.addEventListener("click", function(e) {
            const deleteId = e.target.getAttribute("data-id");
            myTodoList.deleteElement(deleteId)
        })
        liElement.addEventListener("click",function(e){
            const selectedID = e.target.getAttribute("data-id");
            myTodoList.doneUndone(selectedID);
        })
        if (object_item.isDone) {
            liElement.classList.add("")//ajouter des class
            
        }
        this.ulElement.appendChild(liElement)
    })
    }
}
// création d'un nouvelle élément
const listSection = document.querySelector("#ulList")

myTodoList = new TodoClass(listSection);
document.querySelector(".addBtn").addEventListener("click",function(){
    myTodoList.add()
})

document.querySelector("#addList").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        myTodoList.add()
    }
})