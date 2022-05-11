import React from 'react';
import { createRoot } from 'react-dom/client';
import { RealStateApp } from './RealStateApp';

const container = document.getElementById('mingrand');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RealStateApp />);