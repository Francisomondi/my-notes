import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return (
        <div className="note">
            <span>this is going to be my first note</span>
            <div className="note-footer">
                <small>13th february 2022</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />

            </div>

        </div>

    )
}

export default Note;
