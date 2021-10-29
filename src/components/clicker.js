import { useState } from 'react'

const Clicker = () => {
    const [number, setNum] = useState(0);

    function getRandInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function refreshPage() {
        window.location.reload(false);
    }


    const buttonChangeHandler = (event) => {
        newNum(event.target.value)
    };

    const newNum = () => {
        const num = getRandInt(0, 100);
        setNum(num)
    }

    return(
        <div className="App">
            <h1>Don't get a number between 10 and 20!</h1>
            <h2>Number is: {number}</h2>
            {number > 10 && number < 20 ? 
                <div>
                    <h4>Game Over</h4>
                    <button onClick={refreshPage}>Reset</button>
                </div> :
                <button onClick={buttonChangeHandler}>New Number</button>
            }
        </div>
    );
};

export default Clicker