import React from 'react';
import { TestComponent } from './TestComponent';
import withLogging from './WithLoggingHoc';

export const HocDriver = () => {
  const NewTestComponent = withLogging(TestComponent);
  return (
    <div>
      <NewTestComponent name='Test' />
    </div>
  );
};
