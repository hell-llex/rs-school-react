import React, { useState } from 'react';
import '../style/FormPage.css';
import { Card, Cards } from '../components/Cards';
import { Photo } from '../types/type';
import { Form } from '../components/Form';

export function FormPage() {
  const [photoArray, setPhotoArray] = useState<Photo[]>([]);
  const [animationCard, setAnimationCard] = useState(false);
  const [photo, setPhoto] = useState<Photo>({
    author: '',
    description: '',
    date: '',
    category: 'Landscape',
    hideAuthor: false,
    human: '0',
    image: '',
  });

  const updateData = (items: string, data: React.ChangeEvent<HTMLInputElement> | Photo) => {
    if (items === 'one') {
      const target = (data as React.ChangeEvent<HTMLInputElement>).target;
      const key = target.name;

      const value =
        target.type === 'checkbox'
          ? target.checked
          : target.type === 'file'
          ? String(URL.createObjectURL(target.files![0] as File))
          : target.value;
      setPhoto((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    } else if (items === 'all') {
      const currentPhotoArray: Photo[] = Object.assign([], photoArray);
      currentPhotoArray.unshift(data as Photo);
      setPhotoArray(currentPhotoArray);
      setAnimationCard(true);
      setTimeout(() => setAnimationCard(false), 1950);
      setPhoto({
        author: '',
        description: '',
        date: '',
        category: 'Landscape',
        hideAuthor: false,
        human: '0',
        image: '',
      });
    }
  };

  return (
    <div className="form-page router__page">
      <div className={`form-container ${animationCard ? 'submit-card' : ''}`}>
        <Form updateData={updateData} />
        <Card photo={photo} />
      </div>
      <div>
        <h2>Latest update</h2>
      </div>
      <Cards photo={photoArray} />
    </div>
  );
}
