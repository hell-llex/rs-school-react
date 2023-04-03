import '../style/Cards.css';
import React from 'react';
import { PhotoList, PhotoProps } from '../types/type';

export class Card extends React.Component<PhotoProps> {
  render() {
    const item = this.props.photo;
    return (
      <div className="card">
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
          <div className="info__author">
            <b>Author: </b>
            {item.hideAuthor ? '*********' : item.author}
          </div>
          <div className="info__description">
            <b>Description: </b>
            {item.description}
          </div>
          <div className="info__date">
            <b>Date: </b>
            {item.date.split('-').reverse().join('.')}
          </div>
          <div className="info__category">
            <b>Category: </b>
            {item.category}
          </div>
          <div className="info__human">
            <b>Person in the photo: </b>
            {item.human === '0' ? 'No' : 'Yes'}
          </div>
        </div>
      </div>
    );
  }
}

export function Cards(props: PhotoList) {
  const data = props.photo;
  return (
    <div className="container-cards">
      {data.map((item, i) => (
        <Card key={i} photo={item} />
      ))}
    </div>
  );
}
