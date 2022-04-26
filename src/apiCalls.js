const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if (response.status === 400){
        throw new Error("404:Not Found")
      } else if (response.status === 500){
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
}

const postUrls = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUrl)
  })
  .then(response => {
    if (response.status === 400){
      throw new Error("404:Not Found")
    } else if (response.status === 500){
      throw new Error("500: Server is having issues")
    }
    return response.json()
  })
}


export { getUrls, postUrls }