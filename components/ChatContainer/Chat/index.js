import Aside from './Aside'
import Messages from './Messages'
import Input from './Input'
import Header from './Header'

import classes from './style.module.css'

const Chat = ({ title }) => {
    return (
        <article className={classes.container}>
            <header className={classes.header}>
                <Header />
            </header>
            <main className={classes.messages}>
                <Messages />
            </main>
            <div className={classes.input}>
                <Input />
            </div>
            <aside className={classes.aside}>
                <Aside />
            </aside>
        </article>
    )
}

export default Chat