import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

const players = [
  {
    name: 'Kunegunda',
    score: 5
  },
  {
    name: 'Antoś',
    score: 0
  }
];

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);

  const playerOneAfterUpdate = appComponent.state('players')[0].score;

  expect(playerOneAfterUpdate).toEqual(10);
});

it('should add player', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');
  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});

it('should remove  first player', () => {
  const appComponent = mount(<App />);

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');

  appComponent.setState({ players });

  onPlayerRemove(0);
  const playersArr = appComponent.state('players');

  expect(playersArr.length).toEqual(1);
  expect(playersArr[0].name).toEqual('Antoś');
});