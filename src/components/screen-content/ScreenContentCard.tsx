import { ScreenContentType } from '../../@types/types';
import './ScreenContentCard.css';

type ScreenContentCardProps = {
  contentData: ScreenContentType,
  onToggleWatched: (id: number) => void,
};

function ScreenContentCard({ contentData, onToggleWatched }: ScreenContentCardProps) {
  return (
    <div
      className="ScreenContentCard"
    >
      <img src={ contentData.imageUrl } alt="" />
      <div className="card--details">
        <h2>{ contentData.movieTitle}</h2>
        <div className="stars">
          { '⭐️'.repeat(contentData.rating) }
        </div>
        <div className="categories">
          { contentData.categories.map((cat) => <span key={ cat }>{cat}</span>)}
        </div>
        <p>{contentData.releaseYear}</p>
        <button onClick={ () => onToggleWatched(contentData.id) }>
          { contentData.watched ? '✅ Já assisti' : '❌ Não assisti' }
        </button>
      </div>
    </div>
  );
}

export default ScreenContentCard;
