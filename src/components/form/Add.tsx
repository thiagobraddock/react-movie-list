import { useState } from 'react';
import Select from 'react-select';
import { ScreenContentType } from '../../@types/types';
import './Add.css';
import { options } from '../../services/data';
import { customStyles } from './selectData';

export type FormValues = Omit<ScreenContentType, 'id'>;

type AddProps = {
  onAddNewContent: (content: FormValues) => void;
};

function Add({ onAddNewContent }:AddProps) {
  const [movieTitle, setMovieTitle] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [releaseYear, setReleaseYear] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Resetar a mensagem de erro
    setErrorMessage('');

    // Validações
    if (movieTitle.length < 5) {
      setErrorMessage('O título do filme deve ter pelo menos 3 caracteres!');
      return;
    }

    if (rating < 0 || rating > 5) {
      setErrorMessage('A classificação deve ser um número entre 0 e 5!');
      return;
    }

    if (releaseYear.toString().length !== 4) {
      setErrorMessage('O ano de lançamento deve ter 4 dígitos!');
      return;
    }

    onAddNewContent({
      movieTitle,
      rating,
      releaseYear,
      imageUrl,
      categories,
      watched: false,
      favorite: false,
    });

    setMovieTitle('');
    setRating(0);
    setReleaseYear('');
    setImageUrl('');
    setCategories([]);

    alert('Obra cadastrada com sucesso!');
  };

  return (
    <div className="container">
      <h1>Adicionar nova obra</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={ handleSubmit } className="Add">
        <label htmlFor="movie-title">Movie Title</label>
        <input
          onChange={ (event) => setMovieTitle(event.target.value) }
          name="movie-title"
          type="text"
        />

        <div className="half-screen">
          <div className="input-container">
            <label htmlFor="rating">Rating</label>
            <input
              onChange={ (event) => setRating(+event.target.value) }
              name="rating"
              type="text"
            />
          </div>

          <div className="input-container">
            <label htmlFor="image-url">Image Url</label>
            <input
              onChange={ (event) => setImageUrl(event.target.value) }
              name="image-url"
              type="text"
            />
          </div>
        </div>

        <div className="half-screen">
          <div className="input-container">
            <label htmlFor="release-year">Release Year</label>
            {/* input with only year */}
            <input
              onChange={ (event) => setReleaseYear(event.target.value) }
              name="release-year"
              type="text"
            />
          </div>

          <div className="input-container">
            <label htmlFor="categories">Categories</label>
            <Select
              styles={ customStyles }
              options={ options }
              isMulti
              value={ options.filter((option) => categories.includes(option.label)) }
              onChange={ (selectedOpts) => setCategories(
                selectedOpts ? selectedOpts.map((opt) => opt.label) : [],
              ) }
            />
          </div>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Add;
