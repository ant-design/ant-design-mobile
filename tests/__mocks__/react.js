import React from 'react';
import Preact from 'preact-compat';

const mockReact = process.env.TEST_ENV === 'PREACT' ? Preact : React;

export default mockReact;
