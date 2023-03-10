import React from 'react'
import { htmlToText } from 'html-to-text'

export default function PageList({ pages, addPage, activePage, setActivePage }) {

  if (!activePage) {

  return ( 
  <> 
  
  <div className='all-pages scrollbar'>

    {pages.map(({ id, title, textContent, lastModified }, i) => (
            <div
              className={`lPage ${"no" + "-page"}`}
              onClick={() => setActivePage(id)}
            >

              <h2 className="left-page-title"> {title} </h2>


              <h4 className="date">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h4>

              <p>{htmlToText(textContent && (textContent.substr(0, 100) + "..."))}</p>
            </div>
          ))}
    
    
  </div> 
  
  </>
  )
  }
  return (

    <div className="all-pages scrollbar">

      {pages.map(({ id, title, textContent, lastModified }, i) => (
          <div
            className={`lPage ${(id === activePage.id) + "-page"}`}
            onClick={() => setActivePage(id)}
          >

            <h2 className="left-page-title"> {title} </h2>


            <h4 className="date">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h4>

            <p>{htmlToText(textContent && (textContent.substr(0, 100) + "..."))}</p>
          </div>
        ))}
      



    </div>

  )
}

/*
      {pages.map(p => (
        <div key={p.id} className="lPage" onClick={() => setActivePage(p.id)}>
          <h2 className="left-page-title"> {p.title} </h2>
          <h4 className='date'> 
          {" "}
          {new Date(p.lastModified).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
          </h4>
          <div className="page-text"> {p.textContent && (p.textContent).substr(0,30) + "..."}</div>

        </div>
    ))}
      */