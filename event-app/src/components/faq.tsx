
import React, { useState } from 'react'
import gdata from '../types/genQ';
import rdata from '../types/recruitQ';
import sdata from '../types/studentQ';
import OneQuestion from '../context/dropDown';

//to edit the questions and answer go to types and edit the three files there

export const FAQ = () => {
    const [gquestions, setGQuestions] = useState(gdata);
    const [rquestions, setRQuestions] = useState(rdata);
    const [squestions, setSQuestions] = useState(sdata);

    return (
        <div id="faq">
            <h1>Frequently Asked Questions</h1>
            <hr></hr>
            <div>
                <h2>General</h2>
                <p>
                    {gquestions.map((question) => (
                    <OneQuestion key={question.id} {...question} />))}
                </p>
            </div>
            <div>
                <h2>Recruiter</h2>
                <p>
                    {rquestions.map((question) => (
                    <OneQuestion key={question.id} {...question} />))}
                </p>
            </div>
            <div>
                <h2>Student</h2>
                <p>
                    {squestions.map((question) => (
                    <OneQuestion key={question.id} {...question} />))}
                </p>
            </div>
            
        </div>
    );
};