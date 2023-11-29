import { ScreenContentType } from '../../@types/types';
import './ScreenContentCard.css';

type ScreenContentCardProps = {
  contentData: ScreenContentType,
  onToggleWatched: (id: number) => void,
};

function ScreenContentCard({ contentData, onToggleWatched }: ScreenContentCardProps) {
  // Se a informação sobre se um conteúdo foi assistido ou não é relevante apenas para o componente
  // ScreenContentCard e não precisa ser compartilhada com outros componentes, você pode usar o
  // estado local para gerenciar isso.

  // const [isWatched, setIsWatched] = useState(contentData.watched);

  // const handleClickIsWatched = () => {
  //   setIsWatched(!isWatched);
  //   // atualizar a lista de filmes com o valor desse estado local
  // };

  return (
    <div className="ScreenContentCard">
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
