import React from 'react';
import markdown from '../docs/script.md';

export default () => {
  return (
    <div>
      <pre>{markdown}</pre>
    </div>
  );
};