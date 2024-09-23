import express from 'express';
import path from 'node:path';


function mainView() {
  return /*html*/`
    ${headerFragment()}
    <div id="app" class="container">
      <h1>To-Do List</h1>
      <div 
        id="todo-list" 
        hx-get="/tasks"
        hx-trigger="load"
      ></div>
      <form
        id="addTask"
        hx-post="/task"
        hx-trigger="submit"
        hx-target="#todo-list"
      >
        <input type="text" name="task" required />
        <input type="submit" value="addTask" />
      </form>
    </div>    
  `;
}

function editView(task, index) {
  return /*html*/`
    ${headerFragment()}
    <div id="app" class="container">
      <h1>Edit Task</h1>
      <form id="editTask" hx-put="/task" hx-target="#app">
        <input type="text" name="task" required="" value="${task}" />
        <input type="hidden" name="index" value="${index}" />
        <input type="submit" value="edit" />
      </form>
    </div>    
  `;
}

function headerFragment() {
  return /*html*/`
    <script type="module" src="https://unpkg.com/htmx.org@2.0.2"></script>
    <style>
      #todo-list {
        margin-bottom: 1rem;
        display: flex;
        flex-flow: column;
        gap: 1rem;
      }
      .task {
        display: flex;
        flex-flow: row;
        gap: 1rem;
      }
      .task-edit {
        cursor: pointer;
      }
    </style>
  `;
}

function taskFragment(task,index) {
  return /*html*/`
    <div class="task">
      <span class="task-name">${task}</span>
      <span 
        class="task-edit"
        hx-get="/edit/${index}"
        hx-target="#app"
      >📝</span>
    </div> 
  `;
}

const __dirname = new URL('.', import.meta.url).pathname;

let app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
  resp.send(`${mainView()}`);
});

app.get('/edit/:index', (req, resp) => {
  resp.send(`${editView(tasks[req.params.index], req.params.index)}`);
});

let tasks=[];

app.get('/tasks', (req, resp) => {
  resp.send(tasks.map((t,i) => taskFragment(t,i)).join("\n"));
});

app.post('/task', (req, resp) => { 
  let task = req.body.task;
  tasks.push(task)  
  resp.send(tasks.map((t,i) => taskFragment(t,i)).join("\n"));
});


app.put('/task', (req, resp) => { 
  let task = req.body.task;
  let index = req.body.index;
  tasks[index]= task;  
  resp.send(mainView());
});

let server = app.listen(process.env.PORT || 8080, async function () {
  let addressInfo = server.address();
  let host = addressInfo.address;
  let port = addressInfo.port;
  console.log('Listening at http://%s:%s', host, port);
});