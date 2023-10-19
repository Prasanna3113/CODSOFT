document.querySelector('#add').onclick = function(){
    if(document.querySelector('.mid input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#main #tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('.mid input').value}
                </span>
                <button class="delete">×</button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
