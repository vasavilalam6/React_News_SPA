import './App.css';
import Titlesection from './Titlesection';
import Headnews from './Headnews';
import TopNews from './TopNews';
import Business from './Business';
function App() {
  return (
    <div >
        <div className='background'><Titlesection /></div>
        <div><Headnews /></div>
        <div className='Top-News'><TopNews /></div>
        <div><Business /></div>
    </div>
  );
}

export default App;
