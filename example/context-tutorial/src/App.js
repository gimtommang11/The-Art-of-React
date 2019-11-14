import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    //provider 사용해서 context value 변경. createContext 함수 사용할때는 넣어준 기본값은 provider 사용하지 않을 때만 사용됨
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
