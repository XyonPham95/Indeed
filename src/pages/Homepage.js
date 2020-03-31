import React ,{useEffect} from 'react'

export default function Homepage() {
    let [candidates,setcandidates] =[]

    useEffect(async () => {
        const url = `http://localhost:3003/candidates`;
        const result = await fetch(url);
        const data = await result.json();
        console.log("candidates:", data);
     }, [])

    return (
        <div>
            <h1>This is our homepage</h1>
        </div>
    )
}
