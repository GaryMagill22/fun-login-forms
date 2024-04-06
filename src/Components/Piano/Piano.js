import react from "react";
import "./piano.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";



const Piano = () => {


    const [notePlaying, setNotePlaying] = useState('');
    const [keyPressed, setKeyPressed] = useState('');


    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const location = useLocation();
    const isCreateMode = location.pathname.includes('/create'); // Boolean to determine mode



    // Ref for the textarea to access its DOM node
    const textAreaRef = useRef(null);

    // Mapping from keyCode to key name.
    const keyMap = {
        65: 'C', 87: 'C#', 83: 'D', 69: 'D#', 68: 'E',
        70: 'F', 84: 'F#', 71: 'G', 89: 'G#', 72: 'A',
        85: 'A#', 74: 'B', 75: 'C', 79: 'C#', 76: 'D',
        80: 'D#', 186: 'E',
    };


    useEffect(() => {
        // playNote function: called when a keydown event occurs.
        const playNote = (e) => {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  // Selects the audio element corresponding to the pressed key
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);   // Selects the key element corresponding to the pressed key

            if (!audio || !key) return;  // If no audio or key element is found, exit the function


            const keyNote = key.getAttribute('data-note');
            setNotePlaying(keyNote);
            setKeyPressed(keyMap[e.keyCode] || "Unknown Key");
            setPassword((prev) => prev + (keyMap[e.keyCode] || ""));
            // Resets the audio playback to the start.
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');  // Adds the 'playing' class to the key element, triggering the CSS effect for playing.
        };


        // removeTransition function: called when a transitionend event occurs on a key.
        const removeTransition = (e) => {
            // If the transition is not for the 'transform' property, exit the function.
            if (e.propertyName !== 'transform') return;
            // Removes the 'playing' class from the target key, ending the CSS effect.
            e.target.classList.remove('playing');
        };


        // Selects all key elements and attaches the removeTransition function as an event listener to each.
        // This sets up handling for when the CSS transform transition ends after a key is played.
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => key.addEventListener('transitionend', removeTransition));


        // Adds the playNote function as an event listener for keydown events on the window.
        window.addEventListener('keydown', playNote);



            
        
        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            window.removeEventListener('keydown', playNote);
            keys.forEach((key) => key.removeEventListener('transitionend', removeTransition));
        };
    }, [keyMap]);


    const clearPassword = () => {
        setPassword("");
    };


    const HandleSubmit = (e) => {
        e.preventDefault();
        
            navigate('/register', { state: { originalPassword: password } });
        }

    



    return (
        <>

            <section id="wrap">
                <header>
                    <h1>Password Piano</h1>
                    <h2>Good Luck!</h2>
                </header>
                <form id="main">
                    <div className="keys">
                        <div data-key="65" className="key" data-note="C">
                            <span className="hints">A</span>
                        </div>
                        <div data-key="87" className="key sharp" data-note="C#">
                            <span className="hints">W</span>
                        </div>
                        <div data-key="83" className="key" data-note="D">
                            <span className="hints">S</span>
                        </div>
                        <div data-key="69" className="key sharp" data-note="D#">
                            <span className="hints">E</span>
                        </div>
                        <div data-key="68" className="key" data-note="E">
                            <span className="hints">D</span>
                        </div>
                        <div data-key="70" className="key" data-note="F">
                            <span className="hints">F</span>
                        </div>
                        <div data-key="84" className="key sharp" data-note="F#">
                            <span className="hints">T</span>
                        </div>
                        <div data-key="71" className="key" data-note="G">
                            <span className="hints">G</span>
                        </div>
                        <div data-key="89" className="key sharp" data-note="G#">
                            <span className="hints">Y</span>
                        </div>
                        <div data-key="72" className="key" data-note="A">
                            <span className="hints">H</span>
                        </div>
                        <div data-key="85" className="key sharp" data-note="A#">
                            <span className="hints">U</span>
                        </div>
                        <div data-key="74" className="key" data-note="B">
                            <span className="hints">J</span>
                        </div>
                        <div data-key="75" className="key" data-note="C">
                            <span className="hints">K</span>
                        </div>
                        <div data-key="79" className="key sharp" data-note="C#">
                            <span className="hints">O</span>
                        </div>
                        <div data-key="76" className="key" data-note="D">
                            <span className="hints">L</span>
                        </div>
                        <div data-key="80" className="key sharp" data-note="D#">
                            <span className="hints">P</span>
                        </div>
                        <div data-key="186" className="key" data-note="E">
                            <span className="hints">;</span>
                        </div>
                    </div>

                    <audio data-key="65" src="http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav"></audio>
                    <audio data-key="87" src="http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav"></audio>
                    <audio data-key="83" src="http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav"></audio>
                    <audio data-key="69" src="http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav"></audio>
                    <audio data-key="68" src="http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav"></audio>
                    <audio data-key="70" src="http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"></audio>
                    <audio data-key="84" src="http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"></audio>
                    <audio data-key="71" src="http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"></audio>
                    <audio data-key="89" src="http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"></audio>
                    <audio data-key="72" src="http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"></audio>
                    <audio data-key="85" src="http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"></audio>
                    <audio data-key="74" src="http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"></audio>
                    <audio data-key="75" src="http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav"></audio>
                    <audio data-key="79" src="http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav"></audio>
                    <audio data-key="76" src="http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav"></audio>
                    <audio data-key="80" src="http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav"></audio>
                    <audio data-key="186" src="http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"></audio>
                </form>
            </section>
            <div className="password-container">
                <h1>Note: <span className="note">{notePlaying}</span></h1>
                <div className="input-container">
                    <textarea
                        ref={textAreaRef}
                        value={password}
                        readOnly

                    />
                </div>
                <button className="clear-btn" onClick={clearPassword} >Clear</button>
                <button onClick={HandleSubmit} className="submit-btn"  >Submit Password</button>
            </div>


        </>
    )
};

export default Piano;