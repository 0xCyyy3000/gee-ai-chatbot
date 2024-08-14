'use client';

import {useChat} from 'ai/react';
import {Button} from "@/components/ui/button"
import React from "react";

export const Chat = (): React.ReactNode => {
    const {messages, input, handleInputChange, handleSubmit} = useChat();

    return (
        <div className="bg-slate-200 h-screen">
            {messages.map(message => (
                <div key={message.id}>
                    {message.role === 'user' ? 'User: ' : 'AI: '}
                    {message.content}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input className="text-black" name="prompt" value={input} onChange={handleInputChange}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}