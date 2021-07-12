import logo from './logo.svg';

import FirstItem from './FirstItem';
import './App.css';
import SecondItem from './Seconditem';
import ThirdItem from './Thirditem';
import FourthItem from './Fourthitem';



const jsx = <h2>JSX</h2>
const statement4 = <p>Statically typed designed to run on modern browsers.</p>


function App() {
  return (
    <>
    <div className="container"> 
     
      <img className="ironhacklogo" src="ironhack-logo.svg" alt="ironhack logo"/>
      
      <img className="menutop" src="menu-top.svg" alt="menu top"/>
      

      <h1 className="title"> Say hello</h1>
      <h1 className="title">To ReactJs</h1>
      <p className="subtitle">You will learn to use the most popular forntend libary, 
      and become a super ninja developper.</p>
      <button className="button">Awesome!</button>

    </div>

<div className="fourItems">
      <FirstItem />
      <SecondItem/>
      <ThirdItem/>
      <FourthItem/>

     </div>

      
    </>
  );
}

export default App;
