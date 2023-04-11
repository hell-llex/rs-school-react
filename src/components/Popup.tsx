import React from 'react';
import '../style/Popup.css';
import { Photo } from '../types/type';
import { Card } from './Cards';

export function Popup(props: {
  photo: Photo;
  setPopupCard: (arg0: { show: boolean; card: Photo | undefined }) => void;
}) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('popup') || target.closest('.icon-close')) {
      props.setPopupCard({
        show: false,
        card: undefined,
      });
    }
  }
  return (
    <div className="popup" onClick={handleClick}>
      <div className="popup__container-card">
        <div className="icon-close">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
            <path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z" />
          </svg>
        </div>
        <Card photo={props.photo} index={0} />
      </div>
    </div>
  );
}
