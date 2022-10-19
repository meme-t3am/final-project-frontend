// dynamic handling of HTTP routes/endpoints

async function doFetch(url, method, body) {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  const resBody = await res.json();
  const error = res.ok ? null : resBody;
  console.log('error', error);
  const data = res.ok ? resBody : null;
  return { data, error };
}

export const get = (url) => doFetch(url, 'GET');

export const post = (url, body) => doFetch(url, 'POST', body);

export const del = (url) => doFetch(url, 'DELETE');
