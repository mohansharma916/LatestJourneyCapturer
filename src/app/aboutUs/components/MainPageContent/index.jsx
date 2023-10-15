import TypingText from "../TypingText"
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
        <div className="text-white absolute top-1/2  transform -translate-y-1/2">
          <h3 className=" text-6xl font-semibold">Welcome To Journey Capturer</h3>
          <p>
            Create Memories Travel For Free

          </p>

        </div>
      </>
    );
  };
  
  export default MainPageContent;