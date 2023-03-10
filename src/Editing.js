import React from 'react'
import ReactQuill from 'react-quill';
import PageList from './PageList.js';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';


const Editing = ({pages, addPage, activePage, setActivePage, deletePage, updatePage, pageListToggle}) => {


    const history = useNavigate();

    const editedField = (field, value) => {

        let new_page = {...activePage, [field]: value, lastModified: Date.now()};
        updatePage(new_page);

    };

    const newText = (field, new_text) => {

        let JSONtext = {...activePage, [field]: new_text, lastModified: Date.now()};
        updatePage(JSONtext)
        history("/")


    };



    const newChange = (content, delta, source, editor) => {
        
        new_text = content;
    }

    const pageList = () => {

        return  (
            <>
                <div className="left-sidebar" id="left-sidebar">
                <div className="left-title">
                <h2>Notes</h2>
                <div className="add-pages"><button id = "addPageButton" onClick={addPage}>+</button></div>
                </div>
                    <PageList pages={ pages } addPage= {addPage} activePage= {activePage} setActivePage={ setActivePage}/>
                </div>
            </>
        )

    }

    if (pageListToggle === "F") {
        document.getElementById("left-sidebar").style.display = "none";
    }
    else if (pageListToggle === "T"){
        document.getElementById("left-sidebar").style.display = "block";
    }

    if (!activePage) return <> {pageList()} <div className='text-editing'></div> </>
    

    var new_text = activePage.textContent;

    const getLastDate = (when) => {

        var formatted = new Date(when).toISOString()
        return formatted.substring(0,23);

    };




        return (

        <>
            {pageList()}


            <div className="text-editing">
            <div className="title-save-del">
                <div className="main-page-title">
                    <input type="text" id="title" placeHolder="Page Title" value={activePage.title} onChange={(e) => editedField("title", e.target.value)}/>
                    <input type="datetime-local" id="date-local" value={getLastDate(activePage.lastModified)}/>
                </div>
                <div className="svdel">
                    <div className="saveButton" onClick={() => newText("textContent", new_text)}>Save</div>
                    <div className="delButton" onClick={ () => deletePage(activePage.id)}>Del</div>
                </div>
            </div>

            <div className='middle'>

            <ReactQuill
                theme="snow"
                value={activePage.textContent}
                onChange={newChange}
            />
            </div>

            </div>
        </>
    );

}

export default Editing;