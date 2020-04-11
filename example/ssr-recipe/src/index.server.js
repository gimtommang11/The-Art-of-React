//서버를 위한 엔트리 파일

import React from "react";
import ReactDOMServer from "react-dom/server";
//서버에서 리액트 컴포넌트를 랜더링 할 때 사용하는 함수. 이 함수에 jsx를 넣어서 호출하면 랜더링 결과 문자열로 반환

const html = ReactDOMServer.renderToString(
  <div> Hello Server Side Randering </div>
);

console.log(html);
