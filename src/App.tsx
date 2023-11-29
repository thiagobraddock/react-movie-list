import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import QuickActions from './components/header/QuickActions';
import { Add } from './components/form';
import { data } from './services/data';
import { ScreenContentList } from './components/screen-content';
import { ScreenContentType } from './@types/types';
import { FormValues } from './components/form/Add';

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

  const handleVisibleArea = (filter: string) => {
    setVisibleArea(filter);
  };

  const buttonsMock = [
    {
      title: 'Filmes e Séries',
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

  const addNewScreenContent = (content: FormValues) => {
    const newId = screenContentList[screenContentList.length - 1].id + 1;
    const newContent = { ...content, id: newId };
    setScreenContentList([...screenContentList, newContent]);
  };

  return (
    <>
      <Header />
      <QuickActions buttonsData={ buttonsMock } />

      {isFormVisible && <Add onAddNewContent={ addNewScreenContent } />}

      <ScreenContentList
        category={ visibleArea }
        screenContentList={ screenContentList }
        toggleWatched={ toggleWatched }
      />
    </>
  );
}

export default App;
