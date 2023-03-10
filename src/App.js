import React, { useState, useEffect } from 'react';
import AddPages from './AddPages.js';
import Editing from './Editing.js';
import Header from './Header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function App() {
  // useState(localStorage.pages ? JSON.parse(localStorage.pages) : [])
  // Sidebar Pages
  const [pages, setPage] =useState(localStorage.pages ? JSON.parse(localStorage.pages) : []);

  // The page that is being used
  const [activePage, setActivePage] = useState(localStorage.activePage ? JSON.parse(localStorage.activePage) : false);

  const [pageListToggle, setPageListToggle] = useState(localStorage.pageListToggle ? localStorage.pageListToggle : "T");



  /*
  useEffect(() => {

    localStorage.map((p) =>{
      console.log(p)
    })
  }, [])
  */

  //When pages are updated, add the new page to pages and local storage
  useEffect(() => {

    localStorage.setItem("pages", JSON.stringify(pages));

  }, [pages]);

  useEffect(() => {

    localStorage.setItem("activePage", JSON.stringify(activePage));

  }, [activePage])


  
  useEffect(() => {

    localStorage.setItem("pageListToggle", pageListToggle)

  }, [pageListToggle])

  useEffect(() => {

    if (pageListToggle === "F"){

      document.getElementById("left-sidebar").style.display = "none";
  }
  }, [])

  //Function that adds a new page

  const addPage = () =>  {

    const newPage  = {

      id: uuidv4(),
      title: "Untitled Page",
      textContent: "",
      lastModified: Date.now(),

    };
  
    setPage([ newPage, ...pages]);
    setActivePage(newPage.id);
  };

  //Deletes Page given ID

  const deletePage = (pageId) => {

    if (window.confirm("Are you sure that you would like to delete this note?")){
      setPage(pages.filter(( {id} ) => id !== pageId));
    }

  };

  //Updates Current Page
  //Takes in new page
  const updatePage = (updatedPage) => {

    const updatedPagesArr = pages.map((page) => {

      if (page.id === updatedPage.id){

        return updatedPage;
      }
      else{
        return page;
      }

    });

    setPage(updatedPagesArr);
  }

    //Returns active page from id
  const getActivePage = () => {

  
    return pages.find( ({ id }) => id === activePage );

  };

  const getPageListToggle = () => {

      return pageListToggle
  }

  /*

  pageListToggle={pageListToggle} setPageListToggle={setPageListToggle}

  */


  return (
    <BrowserRouter>

      <Header pageListToggle={pageListToggle} setPageListToggle={setPageListToggle} />

      <div className="bottom-content">
      <Routes>
        <Route exact path="/" element={<AddPages pages={ pages } addPage={addPage} activePage={getActivePage()} setActivePage={setActivePage} deletePage={deletePage} pageListToggle={pageListToggle} setPageListToggle={setPageListToggle}/> } />

        <Route exact path='/edit/:id' element={<Editing pages={pages} addPage={addPage} activePage={getActivePage()} setActivePage={setActivePage} deletePage={deletePage} updatePage={updatePage} pageListToggle={pageListToggle} setPageListToggle={setPageListToggle}/>}/>

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
