import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    //*Consumer component 이용해 색상(상태) 조회*
    <ColorContext.Consumer>
      {(
        value //Function as a child. 컴포넌트 childeren 있는 자리에 일반 jsx or 문자열이 아닌 함수 전달
      ) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
