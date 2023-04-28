import React from 'react';
import '../style/FormPage.css';
import { Card, Cards } from '../components/Cards';
import { IExamplePhoto } from '../types/type';
import { Form } from '../components/Form';
import { useAppSelector } from '../hooks/redux';

const FormPage = () => {
  const photoArray = useAppSelector((state) => state.latestCards!.сards);
  const photo = useAppSelector((state) => state.exampleCard.card) as IExamplePhoto;

  return (
    <div className="form-page router__page">
      <div className="forms-container">
        <Form />
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
