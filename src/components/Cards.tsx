import '../style/Cards.css';
import React from 'react';
import { Photo } from '../types/type';

const Card = (props: { photo: Photo; index: number }) => {
  const item = props.photo;
  return (
    <div className="card" data-index={props.index}>
      <div
        className="image"
        style={{
          position: 'absolute',
          backgroundImage: `url("${item.image}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
        }}
      ></div>
      <div className="container-info">
        <div className="info__author" role="author">
          <b>Author: </b>
          {item.hideAuthor ? '*********' : item.author}
        </div>
        <div className="info__description" role="description">
          <b>Description: </b>
          {item.description}
        </div>
        <div className="info__date" style={{ display: item.date ? '' : 'none' }} role="date">
          <b>Date: </b>
          {item.date.split('-').reverse().join('.')}
        </div>
        <div
          className="info__category"
          style={{ display: item.category ? '' : 'none' }}
          role="category"
        >
          <b>Category: </b>
          {item.category}
        </div>
        <div className="info__human" style={{ display: item.human ? '' : 'none' }}>
          <b>Person in the photo: </b>
          {item.human === '0' ? 'No' : 'Yes'}
        </div>
      </div>
    </div>
  );
};

const Cards = (props: {
  photo: Photo[];
  setPopupCard: (arg0: { show: boolean; card: Photo }) => void;
}) => {
  const data = props.photo;
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    if (target.closest('.card')) {
      const targetCard = target.closest('.card') as HTMLElement;
      props.setPopupCard({
        show: true,
        card: data[Number(targetCard!.dataset.index)],
      });
    }
  }
  return (
    <div className="container-cards" onClick={handleClick}>
      {data.map((item, index) => (
        <Card key={index} photo={item} index={index} />
      ))}
    </div>
  );
};

export { Card, Cards };
