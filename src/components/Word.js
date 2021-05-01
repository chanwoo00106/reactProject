import { useState } from "react";

export default function Word({ word: w }){
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleIsDone() {
        //
        fetch(`http://localhost:3001/words/${word.id}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone : !isDone,
            }),
        }).then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then(res =>{
                if (res.ok){
                    setWord({
                        ...word,
                        id:0,
                    });
                }
            });
        }
    }

    if (word.id === 0){
        return null;
    }

    return (
        <tr className={ isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" onChange={toggleIsDone} checked={isDone} />
            </td>
            <td>{word.en}</td>
            <td>{isShow && word.ko}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? '숨기기' : '보기'}
                    </button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    );
}