import logo from './logo.svg';
import './App.css';
import SlotM from './SlotM';
import Ramadan from './Ramdan';
import Sdata from './Sdata';



function data(val){
  return(
    <SlotM
    x= {val.x}
    y= {val.y}
    z={val.z}
  />

 
  );
};
function App() {
  
  return (
    <>
      <div className='maincontainer'>
        <h1 className='heading'> 🎰 Slot Machine 🎰</h1>
        {/* <Ramadan /> */}
        {Sdata.map(data)}
      </div>
    </>
  );
}

export default App;
