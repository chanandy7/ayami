import { useEffect, useRef } from 'react';
import './App.css';

function App() {
    const refOne = useRef(null);

    // const [color, setColor] = useEffect();
    useEffect(() => {
        document.addEventListener("click", activateAlarm, true)
    }, [])



    //handles the e 'event'
    const activateAlarm = (e) => {

    }

    return (
        // style={{ backgroundColor: 'black' }}
        <div className="App" style={{ height: '100vh', backgroundColor: 'black' }} ref={refOne}  >
            {/* <style> {background - color: 'black'}</style> */}
            <h1 className="vertical-rl" >{`痴漢です`}<br /><div className='vertical-rl2 '>助けてください</div> </h1>
            <h2 className="tapMessage">画面をタップすると作動します</h2>
            <h3 className="silentModeMessage">マナーモードでも音がなりますので、使用の際はご注意ください</h3>



            <button>{'助けて！'}</button>
            <button>{'ちかんされていませんか？'}</button>


        </div>
    );
}

export default App;
