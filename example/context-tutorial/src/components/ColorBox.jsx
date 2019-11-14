import React, { useContext } from "react"; //useContext hooks
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext); //creatContext함수를 그대로 파라미터로 넘겨주어야 함
  return (
    //*Consumer component 이용해 색상(상태) 조회*
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
  );
};

export default ColorBox;
