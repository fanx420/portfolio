import './App.css'
import Squares from './components/Squares'
import NavBar from './layouts/NavBar'
import Content from './components/Content'
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import avatar from './assets/avatar.svg';

function App() {
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

        {/* Main content wrapper with grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Left side */}
          <div className="flex flex-col z-10">
            <Card
              title={"Hello! I'm Kaleb"}
              descriptiion={"A passionate web developer with a love for creating beautiful and functional websites."}
              pills={["JavaScript", "React", "CSS", "HTML", "Node.js", "MySQL", "Tailwind CSS", "PHP", "Laravel", "GIT", "Bootstrap"]}
            />
            <Card />
            <Card><div className="flex gap-4 items-center justify-center ">
              <button className='font-semibold bg-white text-black border rounded-full justify-center text-2xl w-2/4 p-2 mb-4 hover:bg-black hover:text-white transition-colors duration-300'>Contact Me</button>
              <button className='font-semibold border rounded-full justify-center text-2xl w-1/4 p-2 mb-4 hover:bg-white hover:text-black transition-colors duration-300'>CV</button>
            </div>

            </Card>
          </div>
          {/* Profile Card with responsive visibility */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-center">
            <ProfileCard
              className='z-20'
              name="Kaleb Dion Francis Zosa"
              title="Full Stack Developer"
              handle="kalebdionfrancisz@gmail.com"
              avatarUrl={avatar}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col lg:items-end z-10">
            <Card>
                <h2 className='text-2xl font-bold animate-fadeIn'>Socials</h2>
                <a href="https://github.com/fanx420" target='_blank'>Github</a>

            </Card>
          </div>
        </div>


      </div>
    </>
  );
}

export default App
