import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Admin_Protected(props) {
    let history = useHistory()
    let Cmp = props.cmp;
    useEffect(() => {
        const user = (JSON.parse(window.sessionStorage.getItem('user')));
        if (window.sessionStorage.getItem('status') != "true") {
            history.push("/login");
        } else if (user.user_type != "admin") {
            history.push("/login");
        }
    }, [])
    return (
        <div>
            <Cmp />
        </div>
    );
}

export default Admin_Protected;