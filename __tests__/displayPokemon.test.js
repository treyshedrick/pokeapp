import 'react-native';
import React from 'react';
import Search from '../app/Search';
import renderer from 'react-test-renderer';
import {ActivityIndicator} from 'react-native';

jest.mock('axios');

it('should show loading indicator', async () => {
  const SearchComp = renderer.create(<Search />).root;
  await expect(SearchComp.findByType(ActivityIndicator)).toBeDefined();

  //console.log(SearchComp);
});
