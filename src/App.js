import BTComponent from './BTComponent/BTComponent';
import BindingData from './BindingData/BindingData';
import RenderWithCondition from './RenderWithCondition/RenderWithCondition';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleComponent from './StyleComponent/StyleComponent';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoState from './State/DemoState';
import DemoProps from './Props/DemoProps';
import BaiTapCar from './State/BaiTapCar';

// component lớn nhất trong dự án
// 2 loại component
    // + class component (stateful) -- Lifecycle
    // + function component (stateless)

// 1 component chỉ trả về 1 thẻ JSX duy nhất
// attribute: viết theo quy tắc camelcase
// JSXJ Javascript XML => giúp viết HTML trong javascript

function App() {
  return (
    <div className="App">
      <BTComponent ></BTComponent>
    <BindingData></BindingData>
    <RenderWithCondition></RenderWithCondition>
    <HandleEvent></HandleEvent>
    <StyleComponent></StyleComponent>
    <RenderWithMap></RenderWithMap>
    <DemoState></DemoState>
    <DemoProps></DemoProps>
    </div>
  );
}

export default App;
