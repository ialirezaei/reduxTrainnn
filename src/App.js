import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'
import { useState } from 'react'
function App() {
  const state = useSelector((state) => state)
  const allNote = state.note
  const [getNote, setGetNote] = useState("")
  const dispatch = useDispatch();
  const saveNote = (e) => {
    const note = e.target.value
    setGetNote(note)
  }
  const sendNote = () => {
    dispatch(actionCreators.noteAdded(getNote))
  }
  console.log(allNote);

  return (
    <div className="App">
      <div>
        <div className="alert alert-primary border border-4 col-6 mx-auto my-4">
          <label>لیست کار های خود را وارد نمایید</label>
          <input type="text" placeholder='لیست کار ها' className="form-control text-center" onChange={saveNote} />
          <button type="" className="btn btn-primary my-4" onClick={sendNote} >ذخیره</button>
        </div>
        <div className="card  col-4 mx-auto my-5">
          <div className="card-header">
            user list work
          </div>
          <div className="card-body ">
            {allNote.map((note) => {
              return (
                <div className="alert border list-unstyled text-end">
                  <li className="d-flex flex-row-reverse justify-content-evenly">
                    <div>
                      {note.id}
                    </div>
                    <p>
                      {note.note}
                    </p>
                    <div>
                      <button type="button" className="btn btn-danger" onClick={() => dispatch(actionCreators.noteRemoved(note.id))}>حذف</button>
                    </div>
                    <div>
                      {
                      }
                      <button type="button" className="btn btn-outline-success" onClick={() => dispatch(actionCreators.noteDone(note.id))}>
                        {
                          note.done ? "انجام شد" : "ناقص"
                        }
                      </button>
                    </div>
                  </li>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
