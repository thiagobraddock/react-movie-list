import { motion } from 'framer-motion';
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
    <div
      className="Content__List container"
    >
      {screenContentList
        .filter((item) => {
          if (filter === 'watched') return item.watched;
          if (filter === 'favorite') return item.favorite;
          return true;
        })
        .map((item) => (
          <motion.div
            key={ item.id }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
            layout
          >
            <ScreenContentCard
              key={ item.id }
              contentData={ item }
              onToggleWatched={ toggleWatched }
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ScreenContentList;
