import PageList from './PageList.js';
import { useNavigate } from "react-router-dom";
import { htmlToText } from 'html-to-text'

const AddPages = ({pages, addPage, activePage, setActivePage, deletePage, pageListToggle}) => {


    const history = useNavigate()


    const pageList = () => {

        if (pageListToggle === "T")

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

        else if (pageListToggle === "F")

        return  (
            <>
                <div className="left-sidebar" id="left-sidebar" style={{display: "none"}}>
                <div className="left-title">
                <h2>Notes</h2>
                <div className="add-pages"><button id = "addPageButton" onClick={addPage}>+</button></div>
                </div>
                    <PageList pages={ pages } addPage= {addPage} activePage= {activePage} setActivePage={ setActivePage}/>
                </div>
            </>
        )

    }




    if (!activePage) return <> {pageList()} <div className='text-editing'></div> </>

    const getLastDate = (when) => {

        var formatted = new Date(when).toISOString()
        return formatted.substring(0,23);

    };
    
    //REMEMBER TO ALSO CHANGE EDITING
    return (
        <>

            {pageList()}

            <div className="text-editing small-gap">
                <div className="title-save-del view-title-border">

                    <div className="main-page-title">
                        <div id='title' className='view-title'> {activePage.title} </div>
                        <input type="datetime-local" id="date-local" value={getLastDate(activePage.lastModified)}/>

                    </div>

                    <div className="svdel">
                        <div className="editButton" onClick={() => history("/edit/:id")}>Edit</div>
                        <div className="delButton" onClick={ () => deletePage(activePage.id)}>Del</div>
                    </div>

                </div>

                <div className='middle' id="inside-cont">
                    <div className='viewing-text'>{htmlToText(activePage.textContent)}</div>
                </div>

            </div>
        </>

    )
}

//<div className='viewing-text'>{htmlToText(activePage.textContent)}</div>

export default AddPages