
import './App.css'
import DarkVeil from './components/DarkVeil'
import NavBar from './layouts/NavBar'
import Content from './components/Content'

function App() {
  return (
    <>
        <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      {/* <div className="fixed top-5 left-0 right-0 z-10 flex justify-center items-center">
        <NavBar />
      </div> */}

      <div className="relative z-0 flex justify-center items-center min-h-screen">
        <Content />
      </div>
   
    </div>
    </>
    



  );
}

export default App
