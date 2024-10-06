const TripCard = ({ trip }) => {
    const date = new Date(trip.date.seconds * 1000);

    return (
      <>
       {trip.photo ? (
          <img src={trip.photo} alt={`${trip.title}'s picture`} className="size-8" />
        ) : (
          <p>No image available</p>
        )}
        <p>{trip.title}</p>
        <p>{trip.description}</p>
        <p>{date.toLocaleDateString()}</p>
      </>
    );
  };

export default TripCard;