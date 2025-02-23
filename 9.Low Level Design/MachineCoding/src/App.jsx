import React, { useContext } from 'react';
import ClassComponent from './ThemeContext/ClassComponent';
import { FunctionalComponent } from './ThemeContext/FunctionalComponent';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LanguagePage } from './LanguageSupport/LanguagePage';
import { InfiniteScroll } from './InfiniteScroll/InfiniteScroll';

import { NavBar } from './NavBar/NavBar';
import './app.css';
import { InfiniteScrollUsingObserver } from './InfiniteScrollWithObjserver/InfiniteScroll';
import { AccordionComposition } from './Accordion/AccordionComposition';
import { AccordionComponent } from './AccordionScalable/AccordionUsingContext';
import { NestedComments } from './NestedComments/NestedCommenst';
import { OffSetPagination } from './Pagination/OffSetPagination';
import { PaginatedList } from './PaginationComponent/PaginatedList';
import { ImageSlider } from './ImageSlider/ImageSilder';
import { YoutubeLiveChat } from './YoutubeLiveChat/YoutubeLiveChat';
import { Autocomplete } from './Autocomplete/Autocomplete';
export const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route
          path='/theme'
          element={
            <ThemeProvider>
              <div style={{ display: 'flex', gap: '10px' }}>
                <ClassComponent />
                <FunctionalComponent />
              </div>
            </ThemeProvider>
          }
        ></Route>
        <Route
          path='/language-support'
          element={<LanguagePage />}
        ></Route>
        <Route
          path='/infinite-scroll'
          element={<InfiniteScroll />}
        ></Route>
        <Route
          path='/infinite-scroll2'
          element={<InfiniteScrollUsingObserver />}
        ></Route>
        <Route
          path='/'
          element={<Navigate to={'/home'} />}
        ></Route>
        <Route
          path='/accordion'
          element={<AccordionComposition />}
        ></Route>
        <Route
          path='/accordion2'
          element={<AccordionComponent />}
        ></Route>
        <Route
          path='/nested-comments'
          element={<NestedComments />}
        ></Route>
        <Route
          path='/pagination'
          // element={<OffSetPagination />}
          element={<PaginatedList />}
        ></Route>
        <Route
          path='/slider'
          // element={<OffSetPagination />}
          element={<ImageSlider />}
        ></Route>
        <Route
          path='/youtube'
          // element={<OffSetPagination />}
          element={<YoutubeLiveChat />}
        ></Route>
        <Route
          path='/autocomplete'
          // element={<OffSetPagination />}
          element={<Autocomplete />}
        ></Route>
      </Routes>
    </div>
  );
};
