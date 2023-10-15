"use client";
import { notFound, useParams } from "next/navigation";
import TripData from "../components/TripData/TripData";
import Header from "@/app/home/components/Header/Header";
import HeaderImage from "@/app/trips/components/HeaderImage";
import IconWithDetails from "@/app/trips/components/IconWithDetails";
import Tripdetails from "@/app/trips/components/TripDetails";
import Notes from "@/app/trips/components/Notes";
import PhotosOfTrip from "@/app/trips/components/PhotosOfTrip";
import Footer from "@/app/home/components/Footer";
import RelatedTrips from "@/app/trips/components/RelatedTrips";
import HeaderImageContent from "../components/HeaderImageContent";

const TripPage = () => {
  const { id } = useParams();
  const specificTrip = TripData.find((tr) => tr.id === id);
  // console.log(specificTrip)

  if (!specificTrip) {
    return notFound();
  }

  return (
    <>
      <Header />
      <HeaderImage TripMainImage={specificTrip.TripMainImage} />
      <HeaderImageContent TitleOnImage={specificTrip.TripTittle} />
      <IconWithDetails
        duration={specificTrip.TripDuration}
        pickUpAndDrop={specificTrip.TripPickAndDrop}
      />
      <Tripdetails
        description={specificTrip.TripDescription}
        itineary={specificTrip.Itineary}
        dates={specificTrip.Dates}
        inclusion={specificTrip.Inclusion}
        exclusion={specificTrip.Exclusion}
      />
      <Notes />
      {/* <RelatedTrips /> */}
      <Footer />
      {/* <PhotosOfTrip tripRelatedPhotos={specificTrip.tripPhotos} /> */}
    </>
  );
};

export default TripPage;
