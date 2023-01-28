import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/tailwind.scss';

const Popup = (
    <div>{/*<p className="text-4xl text-green-500">Hello Worlds</p>*/}</div>
);

const popupElement = document.createElement('div');
document.body.appendChild(popupElement);

if (!popupElement) {
    throw new Error('Can not find popupElement');
}

const popupRoot = createRoot(popupElement);
popupRoot.render(Popup);
