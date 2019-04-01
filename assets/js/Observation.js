const Observation = function () {
  const apiRoot =  `${sessionStorage.apiProtocol}://${sessionStorage.apiURL}:${sessionStorage.apiPort}/api/v1`
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.authorization
  }

  let observation = null

  function init (data) {
    observation = data
  }

  function create (params = {}) {
    return fetch (`${apiRoot}/observations`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
    })
  }

  return {
    create
  }
}()