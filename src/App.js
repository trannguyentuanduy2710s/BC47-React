
import ShoeShop from './BTShoeShop/ShoeShop';

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
    
    <ShoeShop></ShoeShop>
    </div>
  );
}

export default App;
