/* eslint-disable max-len */
import { post } from './request.js';

// const BASE_URL = '/api/v1/imaggas';
const USER_IMAGES_URL = '/api/v1/userimages';
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

export async function memeResponseArray() {
  // const res = await post(`${USER_IMAGES_URL}`, url);
  const mockRes = [
    7777,
    // eslint-disable-next-line max-len
    'https://i.pinimg.com/originals/20/e4/8a/20e48a7750f4d322d9d01efab27e3071.jpg',
  ];
  return mockRes;
}

export async function memeResponseArrayOfArrays(meme) {
  const url = {
    url: meme,
  };
  const res = await post(`${USER_IMAGES_URL}/data`, url);
  // const mockRes = [
  //   [
  //     1.
  //     // eslint-disable-next-line max-len, max-len
  //     'https://i.pinimg.com/originals/20/e4/8a/20e48a7750f4d322d9d01efab27e3071.jpg',
  //   ],
  //   [300, 'https://i.kym-cdn.com/photos/images/newsfeed/000/911/486/6bb.jpg'],
  //   [
  //     7.2,
  //     'https://i.kym-cdn.com/entries/icons/original/000/000/143/493654d6ef.jpg',
  //   ],
  // ];
  console.log('resdata', res.data);
  return res.data;
}
