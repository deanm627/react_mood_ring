import { useState } from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
    border: 2px solid #f95959;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;

    h2 {
        width: 100%;
    }

    fieldset {
        width: 25%;
    }
    
    div {
        padding: 10px;
    }

    .happy {
        background-color: green;
    }

    .sad {
        background-color: gray;
    }

    .meh {
        background-color: orange;
    }
`;

export const MoodRing = () => {
    const [mood, setMood] = useState('');
    const [value, setValue] = useState ('');

    const handleChange = (e) => {
        // using submit button:
        // setValue(e.target.value);

        // not using submit button:
        setMood(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMood(value);
    }

    return (
        <OuterWrapper>
            <h2>Hello from the Mood Ring Component</h2>
            <form onSubmit={handleSubmit}>
                <h3>How are you feeling?</h3>
                <fieldset>
                    <div>
                        <label>Happy
                            <input type='radio' name='myMood' value='happy' onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>Sad
                            <input type='radio' name='myMood' value='sad' onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                    <label>Meh
                        <input type='radio' name='myMood' value='meh' onChange={handleChange} />
                    </label>
                    </div>
                </fieldset>
                <button type='submit'>Set Mood</button>
            </form>
            <p className={mood}>{mood}</p>
        </OuterWrapper>
    );
};