import React from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
function Protected(props) {
    let history = useHistory()
    let Cmp = props.component;
    useEffect(() => {
        if (window.sessionStorage.getItem('status') != "true") {
            history.push("/login");
        }
    }, [])
    return (
        <div>
            <Cmp />
        </div>
    );

}

export default Protected;