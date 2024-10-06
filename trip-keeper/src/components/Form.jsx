import React from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Timestamp } from "firebase/firestore";
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { uploadImage } from '../utils/utils';
import { redirect } from "react-router-dom";

const Form = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(null);
    const [photo, setPhoto] = useState("");
    const tripsCollectionRef = collection(db, "trips");

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const addTrip = async (trip) => {
        try {
          await addDoc(tripsCollectionRef, trip);
        } catch (err) {
          console.error(err);
        }
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const firebaseTimestamp = Timestamp.fromDate(date);
            let uploadedImageUrl = null;
            if (photo) {
              uploadedImageUrl = await uploadImage('Images', photo);
              console.log("image:", uploadedImageUrl);
            }

            const newTrip = {
                title,
                description: desc,
                date: firebaseTimestamp,
                photo: uploadedImageUrl,
            };
            await addTrip(newTrip);
            return redirect("/");

        } catch (error) {
            console.error('Error creating trip:', error);
            alert('An error occurred while creating the trip. Please try again.');
        };
    }
    
    return <>
    <h1>Add New Trip</h1>
    <form onSubmit={handleSubmit}>
        <label>Trip's Country:</label>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
        <label>Description:</label>
        <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        />
        <label>Select Trip's Date:</label>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Click to select a date"
          required
        />
        <label>Picture:</label>
        <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button type="submit">Add Trip</button>
    </form>
    </>
};

export default Form;