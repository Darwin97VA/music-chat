import Chip from '@material-ui/core/Chip';
import Song from './Song'

const Tab = (label, i) => <Chip label={label} color="primary" key={i} />

const Header = ({ title='Titulo xd', tags=['Perú', 'Rock'], song }) => {
    return (
        <>
            <h2> { title } </h2>
            <div className="tags">
                { tags.map(Tab) }
            </div>
            <div className="song">
                <Song />
            </div>
        </>
    )
}

export default Header