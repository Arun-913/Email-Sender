import React, { useState } from "react";
import axios from 'axios';

export const Landing = () =>{
    const [from, setFrom] = useState('');
    const [password, setPassword] = useState('');
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleOnSumbit = async() =>{
        console.log("here");
        const response = await axios.post('http://localhost:8000/post', {
            from : from,
            password : password,
            to : to,
            subject : subject,
            content : content
        });
        console.log(response);
        setMessage("Email sent successfully");
    }

    return <>
        <label>From : </label>
        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="abc@example.com"/><br />
        <label>Password : </label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <label>To : </label>
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="abc@example.com"/><br />
        <label>Subject : </label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} /><br />
        <label>Content : </label>
        <textarea name="" value={content} onChange={(e) => setContent(e.target.value)} cols="30" rows="10"></textarea>
        <br /><div className="btn" onClick={handleOnSumbit}>Send</div>
        <div>{message}</div>
    </>
}