import { QuickActionButtonProps } from './QuickActions';

export const buttonsMock: QuickActionButtonProps[] = [
  { title: 'Movies e Séries', count: 15, onClick: () => console.log('Movies e Séries') },
  { title: 'Assistidos', count: 2, onClick: () => console.log('Assistidos') },
  { title: 'Favoritos', count: 2, onClick: () => console.log('Favoritos') },
  { title: 'Add novo Item', onClick: () => console.log('Add novo Item') },
];
