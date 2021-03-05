import './App.css';
import HomeVideo from './components/HomeVideo'
import ActualEvents from './components/ActualEvents'
import PastEvents from './components/PastEvents'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import InstaFeed from './components/InstaFeed'
function App() {
  
  return (<>
   {/* <Cube className="absolute top-0 left-0"/> */}
  <div class="progress position-static"></div>
    <div>  <HomeVideo /> </div>
    {/* <div className='w-20 h-20'><ScrollDown /></div> */}
    <div>  <ActualEvents /> </div>
    <div>  <PastEvents /> </div>
    <div>  <Gallery /> </div>
    <div>  <Footer /> </div>
    <div>  <InstaFeed /> </div>
    </>
  )
};

export default App;
