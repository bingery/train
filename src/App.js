import React, { lazy, Suspense } from 'react';
import './App.css';
// import About from './About'
const About = lazy(()=> import(/* webpackChunkName: 'About' */'./About'))

function App() {
  return <div>
          <Suspense fallback={<div>loading</div>}>
            <About></About>
          </Suspense>
        </div>
}

// function App() {
//   return <div>
//             <About></About>
//         </div>
// }

export default App;
