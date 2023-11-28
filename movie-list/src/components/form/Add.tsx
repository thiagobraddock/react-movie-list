import './Add.css';

function Add() {
  return (
    <div className="container">
      <h1>Adicionar nova obra</h1>
      <form className="Add">
        <label htmlFor="movie-title">Movie Title</label>
        <input name="movie-title" type="text" />

        <div className="half-screen">
          <div className="input-container">
            <label htmlFor="rating">Rating</label>
            <input name="rating" type="text" />
          </div>

          <div className="input-container">
            <label htmlFor="image-url">Image Url</label>
            <input name="image-url" type="text" />
          </div>
        </div>

        <div className="half-screen">
          <div className="input-container">
            <label htmlFor="release-year">Release Year</label>
            <input name="release-year" type="text" />
          </div>

          <div className="input-container">
            <label htmlFor="categories">Categories</label>
            <input name="Categories" type="text" />
          </div>
        </div>

        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default Add;
