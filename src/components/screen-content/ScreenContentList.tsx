import ScreenContentCard from './ScreenContentCard';
import { ScreenContentType } from '../../@types/types';
import './ScreenContentList.css';

type ScreenContentListProps = {
  filter: string;
  screenContentList: ScreenContentType[];
  toggleWatched: (id: number) => void;
};

function ScreenContentList(
  { filter, screenContentList, toggleWatched }: ScreenContentListProps,
) {
  return (
    <div className="Content__List container">
      {screenContentList
        .filter((item) => {
          if (filter === 'watched') return item.watched;
          if (filter === 'favorite') return item.favorite;
          return true;
        })
        .map((item) => (
          <ScreenContentCard
            key={ item.id }
            contentData={ item }
            onToggleWatched={ toggleWatched }
          />
        ))}
    </div>
  );
}

export default ScreenContentList;
