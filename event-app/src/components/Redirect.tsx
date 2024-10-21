import React from 'react';

interface Props {
    url: string;
    text: string;
}

export function Redirect({ url, text }: Props) {

    return (
        <button className="Redirect-Button" onClick={() => {
            window.location.href = url;
            return null;
        }}>
            {text}
        </button>
    )
}