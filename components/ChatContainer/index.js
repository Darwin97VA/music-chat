import { useState } from 'react'
import Chat from './Chat'
import Buscador from './Buscador'
import Nav from './Nav'


const ChatContainer = () => {
    const [chatTitle, setChatTitle] = useState(null)
    return (
        <div style={{display: 'grid', overflow: 'hidden', height: '100vh', width: '100%', gridTemplateColumns: 'auto 1fr'}}>
            <Nav />
            <main>
                {/* { chatTitle ? <Chat id={setChatTitle} /> : <Buscador /> } */}
                <Chat />
            </main>
        </div>
    )
}

export default ChatContainer