import './App.css'
import { useState } from 'react';
import Squares from './components/Squares'
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import Avatar from './assets/avatar.svg';
import Icon from "./assets/bg.svg";
import Modal from './components/Modal';
import Form from './components/Form';
import GithubLogo from './assets/github_logo.svg';
import FacebookLogo from './assets/facebook_logo.svg';
import InstagramLogo from './assets/instagram_logo.svg';
import LinkedinLogo from './assets/linkedin_logo.svg';
import Toast, { showSuccess } from './components/Toast';
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Zosa_CV.pdf';
    link.download = 'Zosa_CV.pdf';
    link.click();
  };


  return (
    <>      
      <Toast /> 
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="">
          </div>
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
              description={"Full-stack developer crafting fast, functional, and visually engaging websites."}
              badge={<><div className="md:hidden z-50  py-5 rounded-full text-white text-sm font-medium border border-green-500 bg-green-500/5 backdrop-blur-md shadow-[0_0_8px_#22c55e] text-center w-[200px] mx-auto">Open for full time work</div></>}
              pills={["JavaScript", "React", "CSS", "HTML", "Node.js", "MySQL", "Tailwind CSS", "PHP", "Laravel", "GIT", "Bootstrap"]}
            >

              <div className="flex gap-2 items-center justify-center p-1">
                <button onClick={() => setModalIsOpen(true)} className='font-semibold bg-white text-black  rounded-full text-xl w-full md:w-2/4 p-3 hover:shadow-[0_0_10px_#ffffff] transition-colors duration-300'>
                  Contact Me
                </button>
                <button onClick={handleDownload} className='font-semibold bg-gray-600 rounded-full text-xl w-1/4 p-3 hover:bg-gray-700 transition-colors duration-300'>
                  CV
                </button>
              </div>
            </Card>

            <Modal>
              <button className='bg-white text-black p-2 rounded'>Open Modal</button>
            </Modal>

            <Card>
              <iframe className='rounded-3xl' title="Google Map"
                src="https://www.google.com/maps/d/u/3/embed?mid=1Re6sFurELVTmByK7U_tGvSLdjt1mPAI&ehbc=2E312F&noprof=1"
                width="100%" height="170"></iframe>
            </Card>

          </div>
          {/* Profile Card with responsive visibility */}
          <div className="absolute inset-0 md:hidden lg:flex items-center justify-center ">
            <ProfileCard
              className='z-10'
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

          <div className="relative flex flex-col lg:items-end z-5">
            <Card
              title={"Experience"}
              titleStyle='text-3xl p-2 font-semibold'
            >
              <div className="p-2">
                <h3 className='text-xl'>Full Stack Web Developer (Intern)</h3>
                <p className='text-md'>SupSoft Technologies</p>
                <p className='text-sm text-gray-500'>March 2025 - June 2025</p>
              </div>
            </Card>
            <Card
              title="Latest Projects"
              titleStyle='text-3xl p-2 font-semibold'
            />
          </div>

        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      >
        <h1 className='font-bold text-3xl'>Get in touch</h1>
        <p className='text-gray-400 mb-4'>I'd love to hear from you! Please fill out the form below to send me a message.</p>

        <Form />
        <div className="flex flex-row items-center justify-center gap-4 mt-5 ">
          <a href="https://github.com/fanx420" target='_blank'><img src={GithubLogo} alt="github_logo" /></a>
          <a href="https://www.facebook.com/kaleb.zosa" target='_blank'><img src={FacebookLogo} alt="facebook_logo" /></a>
          <a href="https://www.instagram.com/fanx420/" target='_blank'><img src={InstagramLogo} alt="instagram_logo" /></a>
          <a href="https://www.linkedin.com/in/kaleb-dion-francis-zosa-775057330/" target='_blank'><img src={LinkedinLogo} alt="Linkedin_logo" /></a>
        </div>
      </Modal>
    </>
  );
}

export default App
