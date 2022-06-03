import { useState, useLayoutEffect } from 'react';

function App() {

  const [attendees, setAttendees] = useState([])

  const url = `http://localhost:5000/get_all`

  useLayoutEffect(() => {
    ;
    (function getAttendees(){
      fetch(url,  {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        }}) // fetch data từ api ve
      .then(response => response.json())
      .then(data =>{ 
        setAttendees(data)
    })
    })()
  }, [])

console.log(attendees);

  return (
    <div className="App">
      <h3>
        Attendees's Informations
      </h3>
      
      <div>
        {
          attendees.map((attendee) => (
            <div key={attendee.stt}>
              <ul>
                <li>STT: {attendee.stt}</li>
                <li>Ho va ten: {attendee.name}</li>
                <li>Nam sinh: {attendee.yob}</li>
                <li>Truong: {attendee.school}</li>
                <li>Chuyen nganh: {attendee.major}</li>
              </ul>
              <br></br>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
