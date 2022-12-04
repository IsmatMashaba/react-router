import React from "react";

import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div>This is Home</div>
           <div>
               <Link to="/menu">Go to Menu</Link>
           </div>
            <div>
                <Link to="/products">Go to Products</Link>
            </div>

        </div>

    )
}

