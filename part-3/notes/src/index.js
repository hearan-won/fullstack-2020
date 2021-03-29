import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

//import axios from 'axios'

ReactDOM.render(<App />, document.getElementById('root'))

/* // promise fulfilled
const promise = axios.get('http://localhost:3001/notes')

// create an event handler (then) to get result of the promise 
promise.then(response => {
  // response object has all the data from HTTP GET request
  console.log(response)
}) */



// more common practice (then the above) to chain the then method call
/* axios
  .get("http://localhost:3001/notes")
  .then(response => {
    const notes = response.data
    console.log(notes)
  })
 */

// promise rejected (address not found)
//const promise2 = axios.get('http://localhost:3001/foobar')
//console.log(promise2)

/* 

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]
 */
// this is no longer needed 
// since app component is retrieving data from the server
//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//)

