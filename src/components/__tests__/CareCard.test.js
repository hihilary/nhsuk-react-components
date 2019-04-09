import React from 'react';
import { mount } from 'enzyme';
import CareCard from '../care-card';

describe('CareCard', () => {
  it('matches snapshot', () => {
    const nonUrgent = mount(
      <CareCard heading="TestHeading" type="non-urgent">
        Content
      </CareCard>
    );
    const urgent = mount(
      <CareCard heading="TestHeading" type="urgent">
        Content
      </CareCard>
    );
    const immediate = mount(
      <CareCard heading="TestHeading" type="immediate">
        Content
      </CareCard>
    );
    const disableHiddenText = mount(
      <CareCard disableHiddenText heading="TestHeading" type="immediate">
        Content
      </CareCard>
    );
    expect(nonUrgent).toMatchSnapshot();
    expect(urgent).toMatchSnapshot();
    expect(immediate).toMatchSnapshot();
    expect(disableHiddenText).toMatchSnapshot();
    nonUrgent.unmount();
    urgent.unmount();
    immediate.unmount();
    disableHiddenText.unmount();
  });
});