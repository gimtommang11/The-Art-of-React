//서버를 위한 엔트리 파일

import React from "react";
import ReactDOMServer from "react-dom/server";
//서버에서 리액트 컴포넌트를 랜더링 할 때 사용하는 함수. 이 함수에 jsx를 넣어서 호출하면 랜더링 결과 문자열로 반환
import express from "express";
//이 컴포넌트는 주로 SSR용도로 사용됨.
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import path from "path";
import fs from "fs"; // flie system

// asset-manifest.json에서 파일 경로들을 조회합니다.
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
  .map((key) => `<script src="${manifest[key]}"></script>`) // 스크립트 태그로 변환하고
  .join(""); // 합침

function createPage(root) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    <link href="${manifest["main.css"]}" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      ${root}
    </div>
    <script src="${manifest["runtime~main.js"]}"></script>
    ${chunks}
    <script src="${manifest["main.js"]}"></script>
  </body>
  </html>
    `;
}
const app = express();

//서버사이드 렌더링을 처리할 헨들러 함수
const serverRender = (req, res, next) => {
  //404가 떠야 하는  상황에 404 안띄우고 SSR 해주는 함수
  const context = {};
  const jsx = (
    // props로 넣어주는 location값에 따라 라우팅 해줌.
    // context props를 이용해 나중에 렌더링 한 컴포넌트 따라 http 상태 코드 지정 가능
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx); //랜더링 진행
  res.send(createPage(root)); //클라이언트에게 결과물 응답
};
//static 미들웨어 이용해 서버를 통해 build에 있는 js.Css 정적 일들에 접근할 수 있도록 함.
const serve = express.static(path.resolve("./build"), {
  index: false, //"/"경로에서 index.html을 보여쥐 않도록 설정
});

app.use(serve); // ServerRender전에 위치해야 함
app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
