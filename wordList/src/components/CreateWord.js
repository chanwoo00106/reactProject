import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function CreateWord(){
    const days = useFetch('http://localhost:3001/days');
    const [krInput, setKrInput] = useState('');
    const [enInput, setEnIput] = useState('');

    function Create() {
        fetch(`http://localhost:3001/words`, {
            method:'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                en: engRef.current.value,
                ko: korRef.current.value,
                isDone: false,
            }),
        }).then(res=>{
            if(res.ok){
                alert('생성이 완료되었습니다');
            }
        });
    }

    function onSubmit(e){
        e.preventDefault();
    }

    function onReset(){
        setKrInput("");
        setEnIput("");
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <from onSubmit={onSubmit}>
            <div className="input_area">
                <label>En</label>
                <input type="text" onChange={enInput} placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Ko</label>
                <input type="text" onChange={krInput} placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={Create}>저장</button>
        </from>
    );
}