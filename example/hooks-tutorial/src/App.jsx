import React, {useState, useEffect} from 'react';
import Counter from './componentWithReducer/counter';
import Info from './componentWithReducer/Info';
import Average from './component/Avarage';
const App = () => {
  const [visible, setVisible] = useState(false);
  return(
  <>
    <div>
      <button
        onClick={() => {
          setVisible(!visible)
        }}>
          {visible ? '숨기기':'보이기'}   {/*visible이 true라면 숨기기 텍스트 반환, 아니면 보이기 텍스트 반환*/}
      </button>
      <hr />
      {visible && <Counter />}    {/*visible이 true라면 <Counter> 컴포넌트를 보여줌 */}
    </div>
    <Info />
  </>
  );
};

export default App;
