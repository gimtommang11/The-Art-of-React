import React, { createContext, useState } from "react";

//context의 value에 함수를 전닿래줄 수 있음.
const ColorContext = createContext({
  state: { color: "blue", subcolor: "red" }, //상태 기본값, 실제 provider에 넣는 객체의 형태와 일치시켜주는게 좋다
  actions: {
    //업데이트 함수
    setColor: () => {},
    setSubColor: () => {}
  }
});

//실제 provider value에 넣는 객체
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("blue");
  const [subcolor, setSubColor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
//const ColorConsumer = colorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
