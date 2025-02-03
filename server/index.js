import express from 'express';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

let app = express();

let staticRoot = path.join(__dirname, '../frontend');
app.use('/', express.static(staticRoot))

console.log(staticRoot);

let htmxExamplesRoot = path.join(__dirname, '../htmx-examples');
app.use('/htmx-examples/', express.static(htmxExamplesRoot))
console.log(htmxExamplesRoot);

/* ---------------------------------------------------------------------- 
 * Routes for htmx examples
 * ---------------------------------------------------------------------- */

app.get('/clicked', (req, resp) => { 
  resp.send( /*html*/`
    <div id="status">You have sent a <code>GET</code> request to <code>/clicked</code></div>
    `);
});
app.post('/clicked', (req, resp) => { 
  resp.send( /*html*/`
    <div id="status">You have sent a <code>POST</code> request to <code>/clicked</code></div>
    `);
});
app.put('/clicked', (req, resp) => { 
  resp.send( /*html*/`
    <div id="status">You have sent a <code>PUT</code> request to <code>/clicked</code></div>
    `);
});
app.delete('/clicked', (req, resp) => { 
  resp.send( /*html*/`
    <div id="status">You have sent a <code>DELETE</code> request to <code>/clicked</code></div>
    `);
});

app.get('/test-replace/innerHTML', (req, resp) => { 
  resp.send( /*html*/`
    As you see, message have changed
    `);
});
app.get('/test-replace/outerHTML', (req, resp) => { 
  resp.send( /*html*/`
    <div>As you see, <code>&lt;button></code> element is now a <code>&lt;div></code>
    `);
});
app.get('/test-replace/delete', (req, resp) => { 
  resp.send( /*html*/`
    This response won't be shown...
    `);
});
app.get('/test-replace/none', (req, resp) => { 
  resp.send( /*html*/`
    This response won't be shown...
    `);
});

app.get('/trigger/5seconds', (req, resp) => { 
  resp.send( /*html*/`
    AJAX request received at ${(new Date()).toISOString().substring(11,19)}
    `);
});
app.get('/trigger/ctrlclick', (req, resp) => { 
  resp.send( /*html*/`
    AJAX request originated on a Ctrl + click event
    `);
});
app.get('/trigger/ctrlclickonce', (req, resp) => { 
  resp.send( /*html*/`
    AJAX request originated on the first Ctrl + click event
    `);
});
app.get('/trigger/:event', (req, resp) => { 
  resp.send( /*html*/`
    AJAX request originated on a ${req.params.event} event
    `);
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/slow-request', async (req, resp) => {
  await delay(5000);
  resp.send( /*html*/`
    This request was slow!
    `);
});


/* ---------------------------------------------------------------------- */


let server = app.listen(process.env.PORT || 8080, async function () {
  let addressInfo = server.address();
  let host = addressInfo.address;
  let port = addressInfo.port;
  console.log('Listening at http://%s:%s', host, port);
});