import React from 'react'
import Card from './Card'
import Projects from './projects'

const Home = () => {
  return (
    <div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-8 mt-4'>
                    <p className='fs-1 text fw-bold'>Hi, I am Pruthviraj Chauhan</p>
                    <p className='fs-2 text fw-semibold'>I am a <p style={{color:'#ED52CA'}}>Back End Developer</p></p>
                    <p className='text-body-secondary fs-4 text'>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                </div>
                <div className='col-4'>
                    <img src="https://media.licdn.com/dms/image/D4D03AQEmFDtiei8PPg/profile-displayphoto-shrink_800_800/0/1706787247603?e=1724284800&v=beta&t=A2bWLx_Mn6IuhPFqvuPWyq6BrkER0sMi8fSVbTjx5KQ"  width='500' alt="" />
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row mt-5'>
                <p className='fs-1 text fw-bold' style={{marginLeft:'33rem'}}>Skills</p>
                <p className='text-body-secondary fs-4 text text-center'>Here are some of my skills on which I have been working on for the past 1 year.</p>
                <div className='row ms-5'>
                    <div className='col-6'>
                        <Card props={{title:'Back End'}} skills={['Nodejs','ExpressJs','MongoDB','JavaScript']}/>
                    </div>
                    <div className='col-6 p-0'>
                        <Card props={{title:'Front End'}} skills={['React','JavaScript','HTML']}/>
                    </div>
                    <div className='col mt-3' style={{marginLeft:'20rem'}}>
                        <Card props={{title:'Machine Learning'}} skills={['Python','Pandas','Numpy','Sci-kit learn']}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row mt-5'>
                <p className='fs-1 text fw-bold' style={{marginLeft:'33rem'}}>Projects</p>
                <p className='text-body-secondary fs-4 text text-center'>In my career, I've worked on all sorts of projects, from small personal ones to big industrial ones. Whether it's creating apps for tracking health or leading community programs for sustainability, each project has taught me a lot and helped me grow in different areas.</p>
                <div className='row ms-5'>
                    <Projects img={"/Screenshot 2024-06-20 174813.png"} title={"Pariksha App"} skills={['React']} link={"https://parikshabypc.netlify.app/"}/>
                    <Projects img={"/Screenshot 2024-06-20 180637.png"} title={"MoviesMania"} skills={['React']} link={"https://moviesmaniabypc.netlify.app/"}/>
                    <Projects img={"/Screenshot 2024-06-20 181051.png"} title={"Laptop Price Pradictor"} skills={['Machine Learning','Python']} link={"https://laptoppricepredictor-pc.streamlit.app/"}/>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row mt-5'>
                <p className='fs-1 text fw-bold' style={{marginLeft:'33rem'}}>Education</p>
                <p className='text-body-secondary fs-4 text text-center'>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                <div className='row ms-5'>
                    <div className='col-4'>
                        <Card props={{title:'Gujarat Technological University',grades:'7.01 CGPA',branch:"BE IN COMPUTER ENGINEERING",year:"jul 2020 - jul 2024",discription:"I am pursuing BE in Computer Engineering from GMIT Bhavnagar"}} skills={[]}/>
                    </div>
                    <div className='col-4'>
                        <Card props={{title:'RK GHARSHALA 12th',grades:'64%',branch:"SCIENCE STREAM",year:"march 2019 - march 2020",discription:"I have done my 12th from RK gharshala vinaymandir school"}} skills={[]}/>
                    </div>
                    <div className='col-4'>
                        <Card props={{title:'Shree Swaminarayan Gurukul 10th',grades:'72%',branch:"",year:"March 2017 - March 2019",discription:"I have done my ssc from Shree Swaminarayan Gurukul from Bhavnagar"}} skills={[]}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-4 p-5' style={{backgroundColor:'white'}}>
            <p className='fw-bold text-center fs-1' style={{color:"#BE1ADB"}}>Pruthviraj Chauhan</p>
            <a href="https://www.linkedin.com/in/pruthviraj-chauhan-088311251/" style={{textDecoration:'none',marginLeft:'35rem'}}><button className='btn btn-outline-info'>LinkedIn</button></a>
            <p className='text-center mt-4'>© 2024 pruthviraj chauhan. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Home