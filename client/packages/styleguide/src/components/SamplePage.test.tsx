import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import SamplePage from './SamplePage';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe('Ant component', () => {
  it('shallow renders without crashing', () => {
    const {} = getDefaultProps();
    shallow(<SamplePage />);
  });
});
