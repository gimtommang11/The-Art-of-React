import React from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    //*Consumer component 이용해 색상(상태) 조회*
    <ColorConsumer>
      {(
        //Function as a child. 컴포넌트 childeren 있는 자리에 일반 jsx or 문자열이 아닌 함수 전달
        { state } //비구조화 할당을 이용해, value 조회 생략
      ) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
