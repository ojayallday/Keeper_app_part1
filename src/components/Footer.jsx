import React from "react"

function Footer(){
    const year = new Date().getFullYear() ;
    return(
        <footer>
            <p> copyright {year} Big Papa Oj </p>
        </footer>
        
        
    )
}

export default Footer