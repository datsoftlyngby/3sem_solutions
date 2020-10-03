function makeOptions(http_method, body) {
  const options = {
    method: http_method,
    headers: {
      "Content-type": "application/json",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return options;
}
function fetchWithErrorCheck(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }
  
export {makeOptions,fetchWithErrorCheck};
