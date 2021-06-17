import 'react-native';
import React from 'react';
import Search from '../app/Search';
import PokeInfo from '../app/PokeInfo';
import Basic from '../app/PokeInfo/Basic';
import Moves from '../app/PokeInfo/Moves';
import Stats from '../app//PokeInfo/Stats';
import * as DITTO from './mock/ditto.json';
import renderer from 'react-test-renderer';
import {ActivityIndicator} from 'react-native';
import axios from 'axios';

jest.mock('axios');
jest.useFakeTimers();

it('should show loading indicator', async () => {
  const SearchComp = renderer.create(<Search />).root;
  axios.get.mockResolvedValue();
  await expect(SearchComp.findByType(ActivityIndicator)).toBeDefined();
});

it('Ensure pokeinfo is rendered', async () => {
  const dittoInfo = renderer.create(<PokeInfo info={DITTO} />).root;
  expect(dittoInfo.findByType(Basic)).toBeDefined();
  expect(dittoInfo.findByType(Moves)).toBeDefined();
  expect(dittoInfo.findByType(Stats)).toBeDefined();
});
