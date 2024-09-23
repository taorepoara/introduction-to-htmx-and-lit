import express from 'express';
import path from 'node:path';


function mainView() {
  return /*html*/`
    <script type="module" src="https://unpkg.com/htmx.org@2.0.2"></script>
    <div id="app" class="container">
      <div id="todo-list"></div>
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

function editView() {
  return `
    
  `;
}

const __dirname = new URL('.', import.meta.url).pathname;

let app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
  resp.send(`${mainView()}`);
});

app.post('/task', (req, resp) => { 
  let task = req.body.task;  
  resp.send(task);
});

let server = app.listen(process.env.PORT || 8080, async function () {
  let addressInfo = server.address();
  let host = addressInfo.address;
  let port = addressInfo.port;
  console.log('Listening at http://%s:%s', host, port);
});