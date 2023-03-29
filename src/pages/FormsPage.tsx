import React, { ChangeEvent, LegacyRef, RefObject } from 'react';
import './FormsPage.css';
import { Cards } from '../components/Cards';
import { Photo } from '../types/type';
import { homeCards } from './HomePage';

type typeRef =
  | (LegacyRef<HTMLInputElement & HTMLSelectElement> &
      RefObject<HTMLInputElement & HTMLSelectElement>)
  | undefined;

export class FormsPage extends React.Component {
  photoArray: Photo[] = [];
  state: {
    photo: Photo;
    photoArray: Photo[];
    сompletedForm: boolean;
    allErrors: boolean;
    invalid__author: boolean;
    invalid__description: boolean;
    invalid__date: boolean;
    invalid__category: boolean;
    required__author: boolean;
    required__description: boolean;
    required__date: boolean;
    required__category: boolean;
    required__image: boolean;
  };

  author: typeRef;
  description: typeRef;
  date: typeRef;
  category: typeRef;
  human_0: typeRef;
  human_1: typeRef;
  human: typeRef;
  hideAuthor: typeRef;
  image: typeRef;

  constructor(props: never) {
    super(props);
    this.state = {
      photo: {
        author: '',
        description: '',
        date: '',
        category: 'Landscape',
        hideAuthor: false,
        human: '1',
        image: '',
      },
      photoArray: [],
      сompletedForm: false,
      allErrors: false,
      invalid__author: false,
      invalid__description: false,
      invalid__date: false,
      invalid__category: false,
      required__author: false,
      required__description: false,
      required__date: false,
      required__category: false,
      required__image: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.author = React.createRef();
    this.description = React.createRef();
    this.date = React.createRef();
    this.category = React.createRef();
    this.human_0 = React.createRef();
    this.human_1 = React.createRef();
    this.hideAuthor = React.createRef();
    this.image = React.createRef();
  }

  handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    let allErrors = this.state.allErrors;
    this.human = this.human_0!.current!.checked ? this.human_0 : this.human_1;
    const imageUrl = Boolean(this.image!.current?.files![0])
      ? String(URL.createObjectURL(this.image!.current?.files![0] as File))
      : '';
    const photoCard: Photo = {
      author: this.author!.current!.value,
      description: this.description!.current!.value,
      date: this.date!.current!.value,
      category: this.category!.current!.value,
      hideAuthor: this.hideAuthor!.current!.checked,
      human: this.human!.current!.value,
      image: imageUrl,
    };
    const nowDate = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1 >= 10
        ? new Date().getMonth() + 1
        : '0' + String(new Date().getMonth() + 1)
    }-${new Date().getDate()}`;
    photoCard.author.trim().split(' ').join('').length === 0
      ? (this.setState({ required__author: true }), (allErrors = true))
      : this.setState({ required__author: false });
    photoCard.description.trim().split(' ').join('').length === 0
      ? (this.setState({ required__description: true }), (allErrors = true))
      : this.setState({ required__description: false });
    photoCard.date.length === 0
      ? (this.setState({ required__date: true }), (allErrors = true))
      : this.setState({ required__date: false });
    photoCard.image.length === 0
      ? (this.setState({ required__image: true }), (allErrors = true))
      : this.setState({ required__image: false });
    photoCard.author.trim().split(' ').join('').length < 2 ||
    photoCard.author.trim().split(' ').join('').length > 20
      ? (this.setState({ invalid__author: true }), (allErrors = true))
      : this.setState({ invalid__author: false });
    photoCard.description.trim().split(' ').join('').length < 4 ||
    photoCard.description.trim().split(' ').join('').length > 40
      ? (this.setState({ invalid__description: true }), (allErrors = true))
      : this.setState({ invalid__description: false });
    new Date(nowDate) < new Date(photoCard.date)
      ? (this.setState({ invalid__date: true }), (allErrors = true))
      : this.setState({ invalid__date: false });
    if (!allErrors) {
      this.setState({
        photo: photoCard,
        allErrors: false,
        сompletedForm: true,
      });
      this.state.photoArray.unshift(photoCard);
      homeCards.push(photoCard);
      event.target.reset();
      setTimeout(
        () =>
          this.setState({
            сompletedForm: false,
          }),
        3000
      );
    }
    allErrors = this.state.allErrors;
  }
  render() {
    return (
      <div className="forms-page">
        <h1>Forms</h1>
        <form className="forms-container" onSubmit={this.handleSubmit} noValidate>
          <h2 className="forms-title-base">Upload photo</h2>
          {this.state.сompletedForm ? (
            <h2 className="forms-title-completed">Data saved and uploaded</h2>
          ) : (
            <>
              <div
                className={`item${this.state.required__author ? ' required' : ''}${
                  this.state.invalid__author ? ' invalid' : ''
                }`}
              >
                <label htmlFor="">Author:</label>
                <input type="text" name="author" id="author" className="author" ref={this.author} />
                <div className="error">
                  <p className="error__required">This field is required!</p>
                  <p className="error__invalid">
                    The author must have at least 1 and no more than 20 characters (not including
                    spaces).
                  </p>
                </div>
              </div>

              <div
                className={`item${this.state.required__description ? ' required' : ''}${
                  this.state.invalid__description ? ' invalid' : ''
                }`}
              >
                <label htmlFor="">Description:</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="description"
                  ref={this.description}
                />
                <div className="error">
                  <p className="error__required">This field is required!</p>
                  <p className="error__invalid">
                    The description must contain not less than 3 and not more than 40 characters
                    (not including spaces)
                  </p>
                </div>
              </div>
              <div
                className={`item${this.state.required__date ? ' required' : ''}${
                  this.state.invalid__date ? ' invalid' : ''
                }`}
              >
                <label htmlFor="">Date shot:</label>
                <input type="date" name="date" id="date" className="date" ref={this.date} />
                <div className="error">
                  <p className="error__required">This field is required!</p>
                  <p className="error__invalid">Creation date cannot exceed the current date</p>
                </div>
              </div>
              <div className="item">
                <label htmlFor="">Category:</label>
                <select
                  name="category"
                  id="category"
                  className="category"
                  defaultValue="Landscape"
                  ref={this.category}
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
              <div className="item">
                <label htmlFor="">Hide author:</label>
                <div className="checker-container">
                  <label className="checker">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="hideAuthor"
                      name="hideAuthor"
                      ref={this.hideAuthor}
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
                <label htmlFor="">Human:</label>
                <div className="toggle-radio">
                  <input type="radio" name="human" id="yes" value="1" ref={this.human_1} />
                  <input
                    type="radio"
                    id="no"
                    name="human"
                    value="0"
                    defaultChecked
                    ref={this.human_0}
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
              <div className={`item${this.state.required__image ? ' required' : ''}`}>
                <label className="input-file">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="image"
                    ref={this.image}
                    accept="image/*"
                    required
                  />
                  <span>Choose a photo</span>
                </label>
                <div className="error">
                  <p className="error__required">This field is required!</p>
                </div>
              </div>
              <div className="item">
                <input type="submit" value="Submit" className="submit-btn" />
              </div>
            </>
          )}
        </form>
        <div>
          <h2>Latest update</h2>
        </div>
        {this.state.photoArray.length > 0 ? <Cards photo={this.state.photoArray} /> : null}
      </div>
    );
  }
}
