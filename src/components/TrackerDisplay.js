import UserContext from '../context/UserContext';
import React, { useContext } from 'react';
import PieChart from './PieChart';

const TrackerDisplay = ({glasses}) => {

    const {name, goal} = useContext(UserContext);

    return (
        <>
        <UserContext.Consumer>
            {
                () => {
                    return (
                        <>
                            <p>{name}'s daily goal: {goal}</p>
                            <p>Glasses drunk: {glasses}</p>
                            <PieChart glasses={glasses} goal={goal} />
                            { glasses >= goal ? "Goal reached! 🥳" : null }
                        </>
                    );
                }
            }
        </UserContext.Consumer>
            <br></br>
        </>
    )
}

export default TrackerDisplay;
