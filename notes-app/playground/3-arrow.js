const tasks = {
    tasks: [{
        text: 'Groce ry shopping',
        completed: false    
    },
    {
        text: 'Clean the house',
        completed: true    
    },
    {
        text: 'Finish homework',
        completed: false
    }],
    getTasksToDo () {
        return this.tasks.filter((task) => {
            return !task.completed;
        }
        );
    },
    addTask(task) {
        this.tasks.push({
            text: task,
            completed: false
        });
    },
}

console.log(tasks.getTasksToDo());