// extracted backend operations here

import axios from 'axios'

// because backend and frontend will be in the same server, we just need additional part of url
const baseUrl = 'api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    // we no longer return the promise returned by axios directly,
    // instead assign promise to request variable, call then method
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// this module returns an object that has three functions 
// the functions directly return the promises returned by the axios methods
export default { 
    // label to the left of colon are keys of object, right of it are  variables 
    //getAll: getAll, 
    // since the name of the key and variable are same, write it in more compact syntax
    getAll,
    create,
    update
}