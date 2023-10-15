const ServiceCard =({ bgImage,bgColor, icon, title, description })=>{

  return <>
  <div className={`bg-cover bg-center block! bg-opacity-50 h-[20rem]  w-[18rem]`} style={{ backgroundImage: `url('/images/${bgImage}')` }}>
  <div className={`${bgColor} bg-opacity-50 h-full w-full`}>
   <div className="relative top-40 h-3/5 text-white mx-5 ">
   <h3 className="text-lg mb-3 ">{title}</h3>
    <p className="opacity-80">{description}</p>
   </div>
  </div>
</div>
</>


}


const WelcomeSection = () => {

  const services = [
    {
      bgImage: 'services-1.jpg',
      bgColor:"bg-blue-400",
      icon: 'flaticon-paragliding text-white',
      title: 'Activities',
      description: 'A small river named Duden flows by their place and supplies it with the necessary',
    },
    {
      bgImage: 'services-2.jpg',
      icon: 'flaticon-route text-white',
      bgColor:"bg-[#048998]",
      title: 'Travel Arrangements',
      description: 'A small river named Duden flows by their place and supplies it with the necessary',
    },
    {
      bgImage: 'services-3.jpg',
      icon: 'flaticon-tour-guide text-white',
      bgColor:"bg-[#00a8b5]",
      title: 'Private Guide',
      description: 'A small river named Duden flows by their place and supplies it with the necessary',
    },
    {
      bgImage:'services-4.jpg',
      icon: 'flaticon-map text-white',
      bgColor:"bg-[#ff5959]",
      title: 'Location Manager',
      description: 'A small river named Duden flows by their place and supplies it with the necessary',
    },
  ]







  return (
    <>
    


      <div className="flex ml-32 mt-20 ">
        <div className="mr-9 w-1/2" >
          <div className="grid grid-cols-2 gap-x-7 gap-y-5">
          {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

        </div>
        <div className="w-1/2">
          <div className="h-3/5 top-40 relative">
          {/* <span className="">Journey Capturer</span> */}
          <h2 className="text-4xl font-semibold mb-5">It is time to Travel For Free and Capture Every Moment</h2>
							<p className="opacity-40"> The ultimate travel experience service catering to wanderers worldwide. We specialize in capturing the unique moments of your journey, ensuring you have lasting memories of your dream vacation.
               Our services go beyond mere photography; we are your travel designers, adventure companions, tour guides, and trusted friends.
              As you explore the most breathtaking destinations across the globe, we'll be right there with you, capturing each step of your adventure. Our mission is to handle every detail, crafting an unforgettable journey that will stay etched in your memory.
               Discover the world through a new lens with Journey Capturer – where your travel dreams meet stunning photography..</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default WelcomeSection;
