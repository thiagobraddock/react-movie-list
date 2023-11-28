import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import QuickActions from './components/header/QuickActions';
import { Add } from './components/form';
import { BASE_URL, data } from './services/data';
import { ScreenContentCard } from './components/screen-content';
import { ScreenContentType } from './@types/types';

function App() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [screenContentList, setScreenContentList] = useState<ScreenContentType[]>(data);

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

  const buttonsMock = [
    { title: 'Movies e Séries',
      count: screenContentList.length,
      onClick: () => setScreenContentList([...screenContentList,
        {
          id: 15,
          movieTitle: 'Desafio no gelo',
          rating: 4,
          releaseYear: 2004,
          imageUrl: `${BASE_URL}dGxGB9bDgzTlnOowHy20XclZJgi.jpg`,
          categories: ['Drama', 'História'],
          watched: false,
        },
      ]),
    },
    { title: 'Assistidos', count: 2, onClick: () => console.log('Assistidos') },
    { title: 'Favoritos', count: 2, onClick: () => console.log('Favoritos') },
    { title: 'Add novo Item', onClick: handleToggleForm },
  ];

  return (
    <>
      <Header />
      <QuickActions buttonsData={ buttonsMock } />
      {
        isFormVisible && <Add />
      }

      <ScreenContentCard
        contentData={ screenContentList[2] }
        onToggleWatched={ toggleWatched }
      />
      <ScreenContentCard
        contentData={ screenContentList[3] }
        onToggleWatched={ toggleWatched }
      />

    </>
  );
}

export default App;
