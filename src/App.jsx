import './App.css'
import Squares from './components/Squares'
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import Avatar from './assets/avatar.svg';
import Icon from "./assets/bg.svg";

function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Zosa_CV.pdf';
    link.download = 'Zosa_CV.pdf';
    link.click();
  };
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.5}
            squareSize={40}
            direction='diagonal'
            borderColor='#271e37'
            hoverFillColor='#22222'
          />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Left side */}
          <div className="flex flex-col z-10">
            <Card
              background="bg-black"
              image={Avatar}
              imageStyle="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] z-0 md:z-0 md:top-5 md:left-[60px] md:translate-x-0 lg:hidden mt-10 md:mt-0"
              contentStyle='md:mt-30 lg:mt-0 xl:mt-0 p-3'
              title={<>Hello <br />I'm <span className=''>Kaleb</span></>}
              titleStyle="text-center sm:text-center md:text-start mb-55 md:mb-0 lg:mb-0 xl:mb-0 text-6xl relative lg:text-7xl md:text-5xl font-bold"
              description={"A passionate web developer with a love for creating beautiful and functional websites."}
              badge={<><div className="md:hidden z-50  py-5 rounded-full text-white text-sm font-medium border border-green-500 bg-green-500/5 backdrop-blur-md shadow-[0_0_8px_#22c55e] text-center w-[200px] mx-auto">Open for full time work</div></>}
              pills={["JavaScript", "React", "CSS", "HTML", "Node.js", "MySQL", "Tailwind CSS", "PHP", "Laravel", "GIT", "Bootstrap"]}
            >

              <div className="flex gap-3 items-center justify-center p-1">
                <button className='font-semibold bg-white text-black border rounded-full text-xl w-full md:w-2/4 p-3 hover:bg-black hover:text-white transition-colors duration-300'>
                  Contact Me
                </button>
                <button onClick={handleDownload} className='font-semibold border rounded-full text-xl w-1/4 p-3 hover:bg-white hover:text-black transition-colors duration-300'>
                  CV
                </button>
              </div>
            </Card>
            <Card>
              <iframe className='rounded-3xl' title="Google Map"
                src="https://www.google.com/maps/d/u/3/embed?mid=1Re6sFurELVTmByK7U_tGvSLdjt1mPAI&ehbc=2E312F&noprof=1"
                width="100%" height="150"></iframe>
            </Card>

          </div>
          {/* Profile Card with responsive visibility */}
          <div className="absolute inset-0 md:hidden lg:flex items-center justify-center">
            <ProfileCard
              className='z-20'
              name="Kaleb Dion Francis Zosa"
              title="Full Stack Developer"
              handle="kalebdionfrancisz@gmail.com"
              status='Open for full time work'
              iconUrl={Icon}
              avatarUrl={Avatar}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col lg:items-end z-10">
            <Card
              title={"Experience"}
              titleStyle='text-lg p-2 font-semibold'
            />
            <Card
              title="Latest Projects"
              titleStyle='text-lg p-2 font-semibold'
            />
          </div>
        </div>


      </div>
    </>
  );
}

export default App
