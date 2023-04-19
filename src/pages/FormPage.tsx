import React, { useState } from 'react';
import '../style/FormPage.css';
import { Card, Cards } from '../components/Cards';
import { MyState, Photo } from '../types/type';
import { Form } from '../components/Form';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/redux';

const FormPage = () => {
  // const [photoArray, setPhotoArray] = useState<Photo[]>([]);
  const photoArray = useAppSelector((state) => state.latestCards!.сards);
  // const [animationCard, setAnimationCard] = useState(false);
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
      // const currentPhotoArray: Photo[] = Object.assign([], photoArray);
      // currentPhotoArray.unshift(data as Photo);
      // setPhotoArray(currentPhotoArray);

      // setAnimationCard(true);
      // setTimeout(() => setAnimationCard(false), 1950);
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
      <div className="forms-container">
        <Form updateData={updateData} />
        <div className="example-card">
          <h2>Example card:</h2>
          <Card photo={photo} index={0} />
        </div>
      </div>
      <div>
        <h2>Latest update</h2>
      </div>
      <Cards photo={photoArray} />
    </div>
  );
};

export { FormPage };
