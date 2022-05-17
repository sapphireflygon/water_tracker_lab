import { useState } from 'react';
import Modal from 'react-modal';
import UserContext from '../context/UserContext';
import '../App.css';
import Header from '../components/Header';
import TrackerContainer from '../containers/TrackerContainer';
import { useModalToggle } from '../hooks/useModalToggle';

const MainPage = () => {
    
    const [name, setName] = useState('Stranger');
    const [goal, setGoal] = useState(1);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleGoalChange = (e) => {
        setGoal(parseInt(e.target.value))
    }

    const modal = useModalToggle();

    return (
        <>
            <Modal
                isOpen={modal.isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} />
                <br></br>
                <label htmlFor='goal'>Your goal: </label>
                <input type="number" min="1" name="goal" defaultValue={goal} onChange={handleGoalChange} />
                <button onClick={modal.toggleModal}>OK</button>
            </Modal>
            <UserContext.Provider value={{name, goal}}>
                <Header />
                <TrackerContainer />
            </UserContext.Provider>
        </>
    )
}

export default MainPage;
