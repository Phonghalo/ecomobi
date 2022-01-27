import './App.css';
import Banners from './Ecomobi/Banners';
import Profile from './Ecomobi/Profile';
import Story from './Ecomobi/Story';
import MyChoice from './Ecomobi/MyChoice';
import 'boxicons'
import 'bootstrap';
function App() {


  return (
    <div className='container'>
      <Banners />
      <Profile />
      <Story />
      <MyChoice />
    </div>
  )
}

export default App;
