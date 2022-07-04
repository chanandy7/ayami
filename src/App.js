import { useEffect, useState } from 'react';
import './App.css';

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

    const handleClick = () => {
        // 👇️ toggle
        if (!isCheck) {
            setIsActive(current => !current);
        }

        // 👇️ or set to true
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
                {!isCheck && (<h1 className="vertical-rl">{`痴漢です`}<br /><div className='vertical-rl2 '>{`助けてください`}</div> </h1>)}
                {isCheck && (<h1 className="vertical-rl" style={{ fontSize: '70px', color: 'yellow', }}>{`ちかん`}<br /> <div className='vertical-rl2' style={{ fontSize: '40px', marginTop: '20px' }}>{`されていませんか？`}</div> </h1>)}

                {!isActive && !isCheck && (<><h2 className="tapMessage">画面をタップすると作動します</h2>
                    <h3 className="silentModeMessage">マナーモードでも音がなりますので、使用の際はご注意ください</h3></>)}

                {isCheck && (<><p>※ 音は鳴りません。</p></>)}


            </div>

            {!isActive && (< ><br /> <button className='active' onClick={() => playAudio1()} style={{ float: 'left', backgroundColor: 'red', minWidth: '140px', minHeight: '40px' }}>{'助けて！'}</button>
                <button onClick={() => handleCheck()} style={{ float: 'right', minWidth: '140px', fontSize: '11px', maxHeight: '40px' }}>ちかん <br />されていませんか？</button></>)}


            {isActive && (<><br /><br /><br /><br /><h1 className="tapMessage">画面をタップすると停止します</h1>
                <p className="silentModeMessage">マナーモードでも音がなりますので、使用の際はご注意ください</p></>)}
        </div>
    );
}
export default App;
