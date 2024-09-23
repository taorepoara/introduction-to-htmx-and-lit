import express from 'express';
import path from 'node:path';


function mainView() {
  return `
    <div id="app" class="container">
      <div id="todo-list"></div>
      <form
        id="addTask"
        hx-post="/add-task"
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

let server = app.listen(process.env.PORT || 8080, async function () {
  let addressInfo = server.address();
  let host = addressInfo.address;
  let port = addressInfo.port;
  console.log('Listening at http://%s:%s', host, port);
});