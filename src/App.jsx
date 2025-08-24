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
import CardList from './components/CardList';
import PortfolioV1 from './assets/Thumbnails/PortfolioV1.png'
import Switzerland_Showcase from './assets/Thumbnails/Switzerland_showcase.png'
import ActivityRepo from './assets/Thumbnails/Activity_repository.png'
import AOTDb from './assets/Thumbnails/Attack_On_Titan_Database.png'
import AOTGuide from './assets/Thumbnails/Series_guide.png'
import TaskManagement from './assets/Thumbnails/Task_management_system.png'
import CampaignWebsite from './assets/Thumbnails/Campaign_website.png'
import Calc from './assets/Thumbnails/Calc.png'
import Certicode from './assets/Thumbnails/Certicode.png'
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { FaCode, FaServer, FaCloudUploadAlt, FaDatabase, FaUsers } from "react-icons/fa";

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
              pills={["JavaScript", "React", "CSS", "Tailwind CSS", "Bootsrap", "HTML", "Node.js", "MySQL", "PHP", "Laravel", "GIT",]}
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

            <Card>
              <iframe className='rounded-3xl w-full h-50 lg:h-45 md:h-35' title="Google Map"
                src="https://www.google.com/maps/d/u/3/embed?mid=1Re6sFurELVTmByK7U_tGvSLdjt1mPAI&ehbc=2E312F&noprof=1"
                ></iframe>
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
              title={"What I Can Offer"}
              titleStyle="text-3xl p-2 font-semibold"
            >
              <div className="p-2 space-y-3">
                <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
                  <FaCode className="text-blue-400 mt-1" />
                  <p className="text-sm text-gray-200">
                    End-to-end web development with <span className="font-semibold text-white">React.js</span>,
                    <span className="font-semibold text-white"> Laravel</span>, and
                    <span className="font-semibold text-white"> MySQL</span>.
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
                  <FaCloudUploadAlt className="text-purple-400 mt-1" />
                  <p className="text-sm text-gray-200">
                    Deployment & hosting management (<span className="font-semibold text-white">Hostinger</span>, Git-based CI/CD).
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
                  <FaDatabase className="text-yellow-400 mt-1" />
                  <p className="text-sm text-gray-200">
                    Database-driven features such as <span className="font-semibold text-white">attendance</span>
                    and <span className="font-semibold text-white">task management</span>.
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
                  <FaUsers className="text-pink-400 mt-1" />
                  <p className="text-sm text-gray-200">
                    Strong collaboration & version control with <span className="font-semibold text-white">Git/GitHub</span>.
                  </p>
                </div>
              </div>
            </Card>

            <Card
              title="Latest Projects"
              titleStyle='text-3xl p-2 font-semibold'
              cardStyle='overflow-y-hidden max-h-[290px]'
            >
              <SimpleBar className='max-h-[350px] ' autoHide={false}>
                <div className="pb-40">
                  <CardList
                    title={"Certicode"}
                    description={"Internship project: a platform for hosting and joining seminars. Developed the payment system and payment form."}
                    img={Certicode}
                    techs={["React.js", "Laravel"]}
                  />
                  <CardList
                    link='https://github.com/fanx420/CALC'
                    title={"CALC"}
                    description={"Capstone project: a computational assistance and learning companion leveraging GenAI for interactive problem-solving."}
                    img={Calc}
                    techs={["Python", "GenAI"]}
                  />

                  <CardList
                    link='https://fanx420.github.io/'
                    title={"Portfolio V1"}
                    description={"My first personal portfolio showcasing projects and experiments in web development."}
                    img={PortfolioV1}
                    techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                  />

                  <CardList
                    link='https://fanx420.github.io/Act_02/index.html'
                    title={"Switzerland Showcase"}
                    description={"A travel showcase website highlighting Switzerland’s attractions and places to visit."}
                    img={Switzerland_Showcase}
                    techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                  />

                  <CardList
                    link='https://fanx420.github.io/Act_03/index.html'
                    title={"Activities Repository"}
                    description={"A centralized repository website for storing and accessing web development activities."}
                    img={ActivityRepo}
                    techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                  />

                  <CardList
                    link='https://fanx420.github.io/Act_04/index.html'
                    title={"Attack on Titan Database"}
                    description={"A fan-built database website containing detailed character information from the Attack on Titan series, powered by REST API."}
                    img={AOTDb}
                    techs={["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"]}
                  />

                  <CardList
                    link='https://fanx420.github.io/Act_05/index.html'
                    title={"Attack on Titan Series Guide"}
                    description={"A viewing guide website for the Attack on Titan series, providing structured episode and season information using REST API."}
                    img={AOTGuide}
                    techs={["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"]}
                  />

                  <CardList
                    link='https://github.com/fanx420/SAM-BE'
                    title={"Task Management System"}
                    description={"A web-based task management system with user authentication, task tracking, and MySQL database integration."}
                    img={TaskManagement}
                    techs={["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"]}
                  />

                  <CardList
                    title={"B.I.G.A.S"}
                    description={"A campaign website raising awareness of SDG 2 (Zero Hunger) with interactive content and database-driven features."}
                    img={CampaignWebsite}
                    techs={["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"]}
                  />
                </div>
              </SimpleBar>

            </Card>

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
