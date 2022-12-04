import React from "react";

import {Link} from "react-router-dom";
export default function Menu () {
    return (
        <div>
            <div>This is Menu</div>

            <Link to="/">
                <button>Back</button>
            </Link>

        </div>
    )
}

