//서버를 위한 엔트리 파일

import React from "react";
import ReactDOMServer from "react-dom/server";
//서버에서 리액트 컴포넌트를 랜더링 할 때 사용하는 함수. 이 함수에 jsx를 넣어서 호출하면 랜더링 결과 문자열로 반환
import express from "express";
//이 컴포넌트는 주로 SSR용도로 사용됨.
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

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
  res.send(root); //클라이언트에게 결과물 응답
};

app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
