import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import QuickActions from './components/header/QuickActions';
import { Add } from './components/form';
import { BASE_URL, data } from './services/data';
import { ScreenContentCard, ScreenContentList } from './components/screen-content';
import { ScreenContentType } from './@types/types';

function App() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [screenContentList, setScreenContentList] = useState<ScreenContentType[]>(data);
  const [visibleArea, setVisibleArea] = useState<string>('all');

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleWatched = (id: number) => {
    const newMovies = screenContentList.map((movie) => {
      if (movie.id === id) {
        return { ...movie, watched: !movie.watched };
      }
      return movie;
    });

    setScreenContentList(newMovies);
  };

  const handleVisibleArea = (category: string) => {
    setVisibleArea(category);
  };

  const buttonsMock = [
    {
      title: 'Movies e Séries',
      count: screenContentList.length,
      onClick: () => handleVisibleArea('all'),
    },
    {
      title: 'Assistidos',
      count: screenContentList.filter(({ watched }) => watched).length,
      onClick: () => handleVisibleArea('watched'),
    },
    {
      title: 'Favoritos',
      count: screenContentList.filter(({ favorite }) => favorite).length,
      onClick: () => handleVisibleArea('favorite'),
    },
    { title: 'Add novo Item', onClick: handleToggleForm },
  ];

  return (
    <>
      <Header />
      <QuickActions buttonsData={ buttonsMock } />
      {isFormVisible && <Add />}

      <ScreenContentList
        category={ visibleArea }
        screenContentList={ screenContentList }
        toggleWatched={ toggleWatched }
      />
    </>
  );
}

export default App;
