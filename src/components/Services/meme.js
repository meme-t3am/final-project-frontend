/* eslint-disable max-len */
import { post } from './request.js';

const USER_IMAGES_URL = '/api/v1/userimages';

// Mock function for fetching data IF it is an OBJECT (probably won't ever use)
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

// Mock function for fetching a SINGLE array IF that's what the backend returns
// (probably won't ever use)
// If the backend handled .sort() - but we do that on frontend
export async function memeResponseArray() {
  // const res = await post(`${USER_IMAGES_URL}`, url);
  const mockRes = [
    7777,
    // eslint-disable-next-line max-len
    'https://i.pinimg.com/originals/20/e4/8a/20e48a7750f4d322d9d01efab27e3071.jpg',
  ];
  return mockRes;
}

// Bread winner
// Actual function for fetching an ARRAY OF ARRAYS from the backend
// from the userimages controller .post('/data')
export async function memeResponseArrayOfArrays(meme) {
  // const url shapes the data of the res
  const url = {
    url: meme,
  };
  const res = await post(`${USER_IMAGES_URL}/data`, url);
  //   [300, 'https://i.kym-cdn.com/photos/images/newsfeed/000/911/486/6bb.jpg']
  return res.data;
}
