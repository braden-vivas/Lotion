import React from 'react'


    const Header = ({pageListToggle, setPageListToggle}) => {



        const onPageToggle = () => {

            console.log("Current Page state")
            console.log(pageListToggle)


                if (pageListToggle === "T"){

                    document.getElementById("left-sidebar").style.display = "none";
                    setPageListToggle("F")
                }

                else if (pageListToggle === "F"){

                    console.log("Showing ID:")
                    document.getElementById("left-sidebar").style.display = "block";
                    setPageListToggle("T")
                }
            }
            console.log("Now it is:")
            console.log(pageListToggle)

            return (
                <>
                    <div className="top-title">
                    
                    <div className="show-pages"><button id = "pageButton" onClick={() => onPageToggle()}>&#9776;</button></div>
                    <div className="lotion-title">
                        <h1>Lotion</h1>
                        <subtext>Like Notion, but worse</subtext>
                    </div>
                    <div className="blank"></div>
    
                    </div>
                </>
    
            );
        }
//Austin Was here



    
  export default Header
