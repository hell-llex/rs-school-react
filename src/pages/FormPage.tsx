import React, { useState } from 'react';
import '../style/FormPage.css';
import { Cards } from '../components/Cards';
import { Photo } from '../types/type';
import { Form } from '../components/Form';

export function FormPage() {
  const [photoArray, setPhotoArray] = useState<Photo[]>([]);

  const updateData = (value: Photo) => {
    const currentPhotoArray = Object.assign([], photoArray);
    currentPhotoArray.unshift(value);
    setPhotoArray(currentPhotoArray);
  };

  return (
    <div className="forms-page">
      <h1>Forms</h1>
      <Form updateData={updateData} />
      <div>
        <h2>Latest update</h2>
      </div>
      <Cards photo={photoArray} />
    </div>
  );
}
