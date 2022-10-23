import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<center>
 <img className='gh-img' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='MOMMY' />
 <App />
 </center>
 );