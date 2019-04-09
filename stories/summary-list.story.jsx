import React from 'react';
import { storiesOf } from '@storybook/react';
import { SummaryList } from '../src';

storiesOf('Summary List', module)
  .add('Standard', () => (
    <div style={{ margin: '20vh' }}>
      <SummaryList>
        <SummaryList.Row
          rowKey="Name"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'name'
          }}
        >
          Sarah Phillips
        </SummaryList.Row>
        <SummaryList.Row
          rowKey="Date of Birth"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'date of birth'
          }}
        >
          5 January 1978
        </SummaryList.Row>
        <SummaryList.Row
          rowKey="Contact information"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'contact details'
          }}
        >
          <p>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </p>
        </SummaryList.Row>
        <SummaryList.Row
          rowKey="Contact information"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'contact information'
          }}
        >
          <p>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryList.Row>
      </SummaryList>
    </div>
  ))
  .add('Summary list without actions', () => (
    <div style={{ margin: '20vh' }}>
      <SummaryList>
        <SummaryList.Row rowKey="Name">Sarah Phillips</SummaryList.Row>
        <SummaryList.Row rowKey="Date of Birth">5 January 1978</SummaryList.Row>
        <SummaryList.Row rowKey="Contact information">
          <p>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </p>
        </SummaryList.Row>
        <SummaryList.Row rowKey="Contact information">
          <p>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryList.Row>
      </SummaryList>
    </div>
  ))
  .add('Summary list with onClick', () => (
    <div style={{ margin: '20vh' }}>
      <SummaryList>
        <SummaryList.Row
          rowKey="Name"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'name',
            onClick: e => {
              e.preventDefault();
              // eslint-disable-next-line no-alert
              window.alert('name clicked');
            }
          }}
        >
          Sarah Phillips
        </SummaryList.Row>
        <SummaryList.Row
          rowKey="Date of Birth"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'date of birth',
            onClick: e => {
              e.preventDefault();
              // eslint-disable-next-line no-alert
              window.alert('date of birth clicked');
            }
          }}
        >
          5 January 1978
        </SummaryList.Row>
        <SummaryList.Row
          rowKey="Contact information"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'contact details',
            onClick: e => {
              e.preventDefault();
              // eslint-disable-next-line no-alert
              window.alert('contact details clicked');
            }
          }}
        >
          <p>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </p>
        </SummaryList.Row>
        <SummaryList.Row
          rowKey="Contact information"
          action={{
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'contact information',
            onClick: e => {
              e.preventDefault();
              // eslint-disable-next-line no-alert
              window.alert('contact information clicked');
            }
          }}
        >
          <p>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryList.Row>
      </SummaryList>
    </div>
  ));