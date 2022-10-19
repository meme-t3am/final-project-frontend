import { post } from './request.js';

// const BASE_URL = '/api/v1/imaggas';
const USER_IMAGES = '/api/v1/userimages';
//async
export function insertMeme() {
  // mock what the fetch returns, status, body, etc
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

export async function userImagePost() {
  const res = await post(`${USER_IMAGES}`);
  return res;
}
