import React from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

export const uploadImage = async (type, imageUpload) => {
    const imageName = imageUpload.name + v4();
    const imageRef = ref(storage, `${type}/${imageName}`);
    try {
      await uploadBytes(imageRef, imageUpload);
      const downloadURL = await getDownloadURL(imageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
};