import Header from "../home/components/Header/Header"
import Section1 from "../home/components/Section1"
import UpcomingTrips from "../home/components/UpcomingTrips"
import AllTrips from "@/app/trips/components/AllTrips"
import HeaderImageContent from "@/app/trips/components/HeaderImageContent"

const Trips =()=>{
    return <>
    <Header />
    <Section1 />
    <HeaderImageContent />
    <AllTrips />
   
    </>
}


export default Trips