let errorMsg = document.querySelector('.error-msg');

export const fetchDataFor = (dataType) => { 
    return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(response => {
    if (!response.ok) {
        throw new Error('Error with requesting information.');
      } else {
       return response.json();
      }
    }).catch(error => {
        error = 'TypeError: Failed to fetch' ? errorMsg.innerText = 'Server is not currently running' : 
        errorMsg.innerText = 'Error encountered. See console.'
        console.warn(error)
    })
}

export const postData = (dataType, content) => {
    fetch(`http://localhost:3001/api/v1/${dataType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error('Something went wrong, please try again.')
        } else {
            return response.json()
        }
    })
    .catch(error => {
        errorMsg.innerText = 'Something went wrong. See console for details.'
        console.warn(error)
    })
}