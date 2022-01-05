import React from 'react';


function ColorNav(props) {

    return (
        <div>

            <h2>Hello from component A!</h2>
            <p>Username: {userInfo.name} </p>
            <p style={{ color: userInfo.faveColor }}>
                Favorite Color: {userInfo.faveColor}
            </p>
            <label>
                Select favorite color:{" "}
                <input
                type="color"
                onChange={(event) =>
                    setUserInfo({ ...userInfo, faveColor: event.target.value })
                }
                />
            </label>

        </div>
    );
}

export default ColorNav;