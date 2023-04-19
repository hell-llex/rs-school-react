import React from 'react';
import '../style/Popup.css';
import { Photo } from '../types/type';
import { Card } from './Cards';
// import { useDispatch } from 'react-redux';
// import { popupCard } from '../store/formSlice';
import { useAppDispatch } from '../hooks/redux';
import { popupCard } from '../store/slice/popupSlice';

const Popup = (props: { photo: Photo }) => {
  const dispatch = useAppDispatch();
  const closePopupCard = (item: { show: boolean; card?: Photo }) => dispatch(popupCard(item));
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('popup') || target.closest('.icon-close')) {
      closePopupCard({
        show: false,
        card: undefined,
      });
      // props.setPopupCard({
      //
      // });
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
};

export { Popup };
