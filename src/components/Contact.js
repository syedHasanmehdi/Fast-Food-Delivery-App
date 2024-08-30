const Contact=()=>{
    return(
        <div>
        <div className="flex justify-center">
        <h1 className="pt-8 font-bold text-2xl  ">Contact Us</h1><br/>
        </div>
        <div className="pt-8 flex justify-between m-4 text-center">
            <div className="bg-gray-400 m-4 p-4 rounded-md">
            <h1 className="font-bold">Email Me:</h1><br/>
            <p className="text-wrap">Email Me for any job offer regarding Software development/<br/>frontend development internship or job.</p>
            <a href='Hasanmehdi1777@gmail.com' className='text-blue-800'>gmail/Hasanmehdi1777</a><br/>
            </div>
            <div className="bg-gray-400 m-4 p-4 rounded-md">
            <h1 className="font-bold">Call us:</h1><br/>
            <p className="text-wrap">For direct converstation you can also contact me on my Number.</p>
            <p className="text-blue-800">+91 9569171572</p>
            </div>
            <div className="bg-gray-400 m-4 p-4 rounded-md">
            <h1 className="font-bold">Linkedin:</h1><br/>
            <p className="text-wrap">you can also Contact me on linkedin.  </p>
            <a href='https://www.linkedin.com/in/syed-hasan-mehdi-613a67267' className='text-blue-800'>linkedin/syed-hasan-mehdi</a><br/>
            </div>
        </div>
        </div>
    );
};

export default Contact;