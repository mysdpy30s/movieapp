import fetch from "node-fetch";

const { APIKEY } = process.env;

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body);
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`;
  const res = await fetch(url); // node.js에서는 fetch를 사용하지 못함. 그래서 node-fetch 패키지를 설치해야함
  const json = await res.json();
  response.status(200).json(json);
}
