const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response.json())
}

const postUrls = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUrl)
  })
    .then(response => {
      (console.log(response))
      return response.json()})
}


export { getUrls, postUrls }