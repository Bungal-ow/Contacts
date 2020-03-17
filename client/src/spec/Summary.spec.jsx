/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../components/Summary';

describe('Summary', () => {
  const summary = {
    price: 2750000,
    numBD: 4,
    numBA: 3,
    sqft: 32116,
    address: '46 Cook St, San Francisco, 94118',
    format: 'for sale',
    hasAbestimate: true,
    estPayment: 12780,
  };

  it('display the price', () => {
    const wrapper = shallow(<Summary summary={summary} />);
    expect(wrapper.contains(2750000)).toBe(true);
  });

  it('display the address', () => {
    const wrapper = shallow(<Summary summary={summary} />);
    expect(wrapper.contains('46 Cook St, San Francisco, 94118')).toBe(true);
  });
});
