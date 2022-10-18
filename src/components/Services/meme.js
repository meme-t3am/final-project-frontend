import { post } from './request.js';

const BASE_URL = '/api/v1/imaggas';

export function insertMeme() {
  const res = {
    url: 'https://i.kym-cdn.com/photos/images/newsfeed/000/911/486/6bb.jpg',
    tags: [
      {
        tag: 'stringsasdf',
        confidence: 1,
      },
    ],
  };
  return res;
}

// will need to write a new endpoint POST /userImages, so when we post to front
// it'll POST to /userImages

export async function postToApi() {
  const res = await post(`${BASE_URL}`);
  return res;
}
