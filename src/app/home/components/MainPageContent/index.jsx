const MainPageContent = () => {
    const existingText = 'Connecting Travellers Since 2016';
    const lines = [
      'Line 1: This is the first line.',
      'Line 2: This is the second line.',
      'Line 3: This is the third line.',
    ];
  
    return (
      <>
        {/* <img src="/images/HomePagePhoto.jpg" className="w-screen h-screen top-0 sticky" alt="MountainHomePagePhoto" /> */}
        <div className="text-white absolute top-1/2  mx-20 transform -translate-y-1/2">
          <h3 className=" text-6xl mb-9 font-semibold">Welcome To  The Journey Capturer</h3>
          <p className="text-xl mb-5">
          where your travels become unforgettable stories. We provide free trips and document your entire journey. Unleash your wanderlust, embark on adventures, and share your experiences. 
          </p>

          <p  className="text-xl">Join us to explore, capture, and captivate</p>

        </div>
      </>
    );
  };
  
  export default MainPageContent;