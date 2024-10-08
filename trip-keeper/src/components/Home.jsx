import { useState, useEffect } from "react";
import TripCard from "./TripCard";
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../config/firebase";
import NavBar from "./NavBar";

const Home = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const tripCollection = collection(db, "trips");
      const tripSnapshot = await getDocs(tripCollection);
      const filteredData = tripSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTrips(filteredData);
    };
    fetchTrips();
  }, []);

  return (
    <>
      <NavBar />
      <h1>My Trips</h1>
      {trips.map((trip, idx) => (
        <TripCard key={idx} trip={trip} />
      ))}
    </>
  );
};

export default Home;
