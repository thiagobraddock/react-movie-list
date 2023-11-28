import { ScreenContentCard } from '.';
import { ScreenContentType } from '../../@types/types';
import './ScreenContentList.css';

type ScreenContentListProps = {
  category: string;
  screenContentList: ScreenContentType[];
  toggleWatched: (id: number) => void;
};

function ScreenContentList(
  { category, screenContentList, toggleWatched }: ScreenContentListProps,
) {
  return (
    <div className="Content__List container">
      {screenContentList
        .filter((item) => {
          if (category === 'watched') return item.watched;
          if (category === 'favorite') return item.favorite;
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
