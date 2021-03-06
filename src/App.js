import { useEffect, useState } from 'react';
import './App.css';

import useSound from 'use-sound'
import mySound from '../src/mySound.mp4'



function App() {


    // const [color, setColor] = useState('black');


    // useEffect(() => {
    //     document.addEventListener("click", activateAlarm, true)
    // }, [color]);


    // //handles the 'event'
    // const activateAlarm = () => {
    //     if (color === 'black') {
    //         setColor('red')
    //         console.log("1 " + color)
    //     } else {
    //         setColor('black')
    //         console.log("2 " + color)
    //     }
    //     console.log(color)
    // }


    // const playAudio = () => {
    //     console.log("play audio")
    // }


    const [isActive, setIsActive] = useState(false);

    const [isCheck, setIsCheck] = useState(false)

    const [playSound, { stop }] = useSound(mySound)

    const handleClick = () => {
        // ποΈ toggle
        if (!isCheck && !isActive) {
            setIsActive(current => !current);
            playSound();
        }
        if (!isCheck && isActive) {
            setIsActive(current => !current);
            stop();
        }

        // ποΈ or set to true
        // setIsActive(true);
    }

    const handleCheck = () => {
        setIsCheck(true);

    }

    //will need to just show back the original screen
    const playAudio1 = () => {
        setIsActive(false);
        setIsCheck(false);
    }


    return (
        <div className="App" style={{ height: '100vh', backgroundColor: isActive ? 'red' : 'black' }}>

            <div onClick={() => handleClick()} >
                {!isCheck && (<h1 className="vertical-rl">{`η΄ζΌ’γ§γ`}<br /><div className='vertical-rl2 '>{`ε©γγ¦γγ γγ`}</div> </h1>)}
                {isCheck && (<h1 className="vertical-rl" style={{ fontSize: '70px', color: 'yellow', }}>{`γ‘γγ`}<br /> <div className='vertical-rl2' style={{ fontSize: '40px', marginTop: '20px' }}>{`γγγ¦γγΎγγγοΌ`}</div> </h1>)}

                {!isActive && !isCheck && (<><h2 className="tapMessage">η»ι’γγΏγγγγγ¨δ½εγγΎγ</h2>
                    <h3 className="silentModeMessage">γγγΌγ’γΌγγ§γι³γγͺγγΎγγ?γ§γδ½Ώη¨γ?ιγ―γζ³¨ζγγ γγ</h3></>)}

                {isCheck && (<><p>β» ι³γ―ι³΄γγΎγγγ</p></>)}


            </div>

            {!isActive && (< ><br /> <button className='active' onClick={() => playAudio1()} style={{ float: 'left', backgroundColor: 'red', minWidth: '140px', minHeight: '40px' }}>{'ε©γγ¦οΌ'}</button>
                <button onClick={() => handleCheck()} style={{ float: 'right', minWidth: '140px', fontSize: '11px', maxHeight: '40px' }}>γ‘γγ <br />γγγ¦γγΎγγγοΌ</button></>)}


            {isActive && (<><br /><br /><br /><br /><h1 className="tapMessage">η»ι’γγΏγγγγγ¨εζ­’γγΎγ</h1>
                <p className="silentModeMessage">γγγΌγ’γΌγγ§γι³γγͺγγΎγγ?γ§γδ½Ώη¨γ?ιγ―γζ³¨ζγγ γγ</p></>)}
        </div>
    );
}
export default App;
