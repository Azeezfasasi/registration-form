import React from 'react'
import willowy from '../assets/images/willowy.svg';
import RegNav from '../assets/components/RegNav';

function Reg4SignUp() {
  return (
    <>
    <RegNav />
    <div
  className="h-screen relative overflow-hidden"
  style={{
    background:
      "linear-gradient(-63.25deg,rgba(255, 255, 255, 1) 0%, rgba(250, 212, 228, 1) 100%)",
  }}
>
  {/* Background Image */}
  <img
    className="absolute w-[90%] sm:w-[70%] md:w-[45%] h-auto sm:h-full top-10 left-[-60px] sm:left-[-120px] object-cover"
    src={willowy}
  />

  {/* Main Content */}
  <div className="relative sm:w-[60%] md:w-[85%] px-6 sm:px-12 md:ml-[270px]">
    {/* Header */}
    <div className="absolute top-5 left-5 sm:top-[40px] sm:left-[30px]">
      <h1 className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-semibold">
        abc.com
      </h1>
    </div>

    {/* Create an Account Section */}
    <div className="absolute top-[150px] sm:top-[180px] left-[10%] sm:left-[30%] md:left-[50%]">
      <h2 className="text-[#000000] text-xl sm:text-2xl md:text-3xl font-medium">
        Create an account
      </h2>
      <p className="text-[#8d8d8d] text-sm sm:text-base mt-2">
        Share your thoughts with the world from today
      </p>
    </div>

    {/* Terms and Conditions */}
    <p className="absolute bottom-[80px] sm:bottom-[60px] left-[10%] sm:left-[30%] md:left-[50%] text-sm text-[#8d8d8d]">
      By Register you agree with <span className="text-[#000000]">terms and conditions</span> and <span className="text-[#000000]">privacy policy</span>
    </p>

    {/* Social Login Options */}
    <div className="absolute flex flex-wrap gap-4 top-[350px] sm:top-[400px] left-[10%] sm:left-[30%] md:left-[50%]">
      {/* Facebook Login */}
      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] border-2 border-[#fa5d9e] rounded-lg flex items-center justify-center">
        <div>
          <img className="w-6 h-6 mx-auto" src="vector0.svg" alt="Facebook" />
          <p className="text-center text-sm mt-2">Facebook</p>
        </div>
      </div>

      {/* Google Login */}
      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] border-2 border-[#aabbcc] rounded-lg flex items-center justify-center">
        <div>
          <img className="w-6 h-6 mx-auto" src="vector1.svg" alt="Google" />
          <p className="text-center text-sm mt-2">Google</p>
        </div>
      </div>

      {/* Email Login */}
      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] border-2 border-[#aabbcc] rounded-lg flex items-center justify-center">
        <div>
          <img className="w-6 h-6 mx-auto" src="vector2.svg" alt="Email" />
          <p className="text-center text-sm mt-2">Email</p>
        </div>
      </div>
    </div>

    {/* Already Have an Account */}
    <div className="absolute bottom-[40px] sm:bottom-[20px] left-[10%] sm:left-[30%] md:left-[50%] text-sm">
      <span className="text-[#000000]">Already have an account? </span>
      <a href="#" className="text-[#3EC1F3]">Sign in</a>
    </div>
  </div>
</div>


    </>
  )
}

export default Reg4SignUp