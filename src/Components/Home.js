import React from "react";

import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div>This is Home</div>
            <Link to="/menu">Go to Menu</Link>
            <Link to="/productDetails">Go to Products</Link>
        </div>

    )
}
