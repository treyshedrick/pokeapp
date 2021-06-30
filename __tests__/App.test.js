/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../app/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-device-info', () => {
  return {
    hasNotch: jest.fn(),
  };
});

it('renders correctly', () => {
  renderer.create(<App />);
});
