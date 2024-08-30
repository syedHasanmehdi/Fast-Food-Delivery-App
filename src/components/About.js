import profile from './images/professionalprofile.jpeg';
const About= () =>{
    return(
            <div className="flex">
                <div>
                <img className="rounded-lg  w-60 ml-28   pl-6 pt-10 " src={profile}/>
                </div>
                <div className=' ml-16 pl-20  pt-10 '>
                <p className='font-bold flex '>Syed Hasan Mehdi</p>
                <p >Software Engineer<br/>
                 450/706, Thakur Ganj ,Lucknow- 226003 <br/>
                +91 9569171572</p>
                <a href='Hasanmehdi1777@gmail.com' className='text-blue-800'>gmail/Hasanmehdi1777</a><br/>
                <a href='https://www.linkedin.com/in/syed-hasan-mehdi-613a67267' className='text-blue-800'>linkedin/syed-hasan-mehdi</a><br/>
                <a href='https://github.com/syedHasanmehdi' className='text-blue-800'>github/syedHasanmehdi</a><br/><br/>
                <div>
                <h1 className='font-bold '>CAREER OBJECTIVE</h1>
                <p> Aspiring computer engineer with a strong academic background and a passion for technology. Eager to
 contribute my technical skills, problem-solving abilities, and dedication to innovation in a challenging
 and dynamic environment.</p><br/><br/>
                </div>
                <div>
                    <h1 className='font-bold'>TECHNICAL SKILLS</h1><br/>
                    <p><b>Web skills :  </b> HTML5,CSS3, JavaScript , Tailwind , Bootstrap (CSS Framework) , ReactJS (library), Redux ,
                    NodeJS,</p>
                    <p><b> DataStructure and Algorithm ,  </b></p>
                    <p><b>Programming Language : </b> C++ , C</p><br/><br/>
                </div>
                <div>
                    <h1 className='font-bold'>EDUCATION</h1><br/>
                    <p><b>BTech (Computer Science & Engineering) 2020-2024</b><br/>Babu Banarasi Das Institute of Technology and Management, Lucknow</p><br/>

                  <p><b>12th/ Intermediate 2019 - 2020 </b><br/>Unity College, Lucknow </p><br/>
                  <p><b>10th/ High School 2017 - 2018 </b><br/>Unity College, Lucknow </p>

                </div>
                </div>
            </div>
    );
};

export default About;