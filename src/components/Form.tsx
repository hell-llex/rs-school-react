import React, { useState, useEffect } from 'react';
import '../style/Form.css';
import { Photo } from '../types/type';
import { homeCards } from '../pages/HomePage';
import { useForm, SubmitHandler } from 'react-hook-form';

export function Form(props: {
  updateData: (arg0: string, arg1: React.ChangeEvent<HTMLInputElement> | Photo) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm<Photo>();

  const [сompletedForm, setCompletedForm] = useState(false);
  const [fileExists, setFileExists] = useState(false);

  const onSubmit: SubmitHandler<Photo> = (data) => {
    const imageUrl = Boolean(data.image[0])
      ? String(URL.createObjectURL(data.image[0] as File))
      : '';

    const photoCard: Photo = {
      author: data.author,
      description: data.description,
      date: data.date,
      category: data.category,
      hideAuthor: data.hideAuthor,
      human: data.human,
      image: imageUrl,
    };
    setCompletedForm(true);
    props.updateData('all', photoCard);
    homeCards.push(photoCard);
    setTimeout(() => setCompletedForm(false), 2000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setFileExists(false);
    }
  }, [reset, isSubmitSuccessful]);

  function updateCard(event: React.ChangeEvent<HTMLInputElement>) {
    props.updateData('one', event);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title-base">Upload photo</h2>
      {сompletedForm ? (
        <h2 className="form-title-completed">Data saved and uploaded</h2>
      ) : (
        <>
          <div className="item">
            <label className="title">Author:</label>
            <input
              {...register('author', {
                minLength: {
                  value: 2,
                  message: 'The author must have at least 1 and no more than 20 characters.',
                },
                maxLength: {
                  value: 20,
                  message: 'The author must have at least 1 and no more than 20 characters.',
                },
                required: 'This field is required!',
                onChange: updateCard,
              })}
              type="text"
              name="author"
              id="author"
              className={`author ${errors.author ? 'input-error' : ''}`}
              role="author-input"
            />
          </div>
          {errors?.author && <p className="error">{errors.author.message}</p>}
          <div className="item">
            <label className="title">Description:</label>
            <input
              {...register('description', {
                minLength: {
                  value: 4,
                  message:
                    'The description must contain not less than 3 and not more than 40 characters.',
                },
                maxLength: {
                  value: 40,
                  message:
                    'The description must contain not less than 3 and not more than 40 characters.',
                },
                required: 'This field is required!',
                onChange: updateCard,
              })}
              type="text"
              name="description"
              id="description"
              className={`description ${errors.description ? 'input-error' : ''}`}
              role="description-input"
            />
          </div>
          {errors?.description && <p className="error">{errors.description.message}</p>}
          <div className="item">
            <label className="title">Date shot:</label>
            <input
              {...register('date', {
                required: 'This field is required!',
                onChange: updateCard,
                validate: (value) =>
                  new Date(value) < new Date() || 'Creation date cannot exceed the current date',
              })}
              type="date"
              name="date"
              id="date"
              className={`date ${errors.date ? 'input-error' : ''}`}
              role="date-input"
            />
          </div>
          {errors?.date && <p className="error">{errors.date.message}</p>}
          <div className="item">
            <label className="title">Category:</label>
            <select
              {...register('category', {
                onChange: updateCard,
              })}
              name="category"
              id="category"
              className="category"
              defaultValue="Landscape"
              role="category-input"
            >
              <option value="Portrait">Portrait</option>
              <option value="Landscape">Landscape</option>
              <option value="Street">Street</option>
              <option value="Sports">Sports</option>
              <option value="Still life">Still life</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Documentary">Documentary</option>
              <option value="Architectural">Architectural</option>
              <option value="Macro">Macro</option>
            </select>
          </div>
          {errors?.category && <p className="error">{errors.category.message}</p>}
          <div className="item">
            <label className="title">Hide author:</label>
            <div className="checker-container">
              <label className="checker">
                <input
                  {...register('hideAuthor', { onChange: updateCard })}
                  className="checkbox"
                  type="checkbox"
                  id="hideAuthor"
                  name="hideAuthor"
                />
                <div className="check-bg"></div>
                <div className="checkmark">
                  <svg viewBox="0 0 100 100">
                    <path
                      d="M20,55 L40,75 L77,27"
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>
          <div className="item">
            <label className="title">Human:</label>
            <div className="toggle-radio">
              <input
                {...register('human', { onChange: updateCard })}
                type="radio"
                name="human"
                id="yes"
                value="1"
              />
              <input
                {...register('human', { onChange: updateCard })}
                type="radio"
                id="no"
                name="human"
                value="0"
                defaultChecked
              />
              <div className="switch">
                <label htmlFor="yes" className="yes">
                  Yes
                </label>
                <div className="check">
                  <span></span>
                </div>
                <label htmlFor="no" className="no">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="item">
            <label className="input-file">
              <input
                {...register('image', {
                  required: 'This field is required!',
                  onChange: (e) => {
                    updateCard(e);
                    setFileExists(true);
                  },
                })}
                type="file"
                name="image"
                id="image"
                className="image"
                accept="image/*"
              />
              <span
                className={`image ${errors.image ? 'image-error' : fileExists ? 'image-full' : ''}`}
              >
                Choose a photo
              </span>
            </label>
          </div>
          {errors?.image && <p className="error">{errors.image.message}</p>}
          <div className="item">
            <input type="submit" value="Submit" className="submit-btn" />
          </div>
        </>
      )}
    </form>
  );
}
