// import React, { useState } from 'react';
// import axios from 'axios';

// function StudentDashboard() {
//     const [task, setTask] = useState('');
//     let submit = async (e) => {
//         e.preventDefault();
//         try {

//             await axios.post("http://localhost:3000", {
//                 task
//             })
//         }
//         catch {
//             console.log(e)
//         }
//     }
//     return (
//         <div className="task_bar">
//             <form action="POST">
//                 <textarea name="text" onChange={(e) => { setTask(e.target.value) }} placeholder="Submit the Task Here" cols="30" rows="10"></textarea>
//                 <input type="submit" onClick={submit} value="Submit" />
//             </form>
//         </div>
//     )
// }

// export default StudentDashboard;


// import React, { useState } from 'react';
// import axios from 'axios';

// function StudentDashboard() {
//   const [task, setTask] = useState('');

//   let submit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/", { // Add a trailing slash here
//         task
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="task_bar">
//       <form>
//         <textarea
//           name="text"
//           onChange={(e) => { setTask(e.target.value) }}
//           placeholder="Submit the Task Here"
//           cols="30" rows="10"
//         ></textarea>
//         <input type="submit" onClick={submit} value="Submit" />
//       </form>
//     </div>
//   );
// }

// export default StudentDashboard;

import React, { useState } from 'react';
import axios from 'axios';

function StudentDashboard() {
  const [task, setTask] = useState({ name: '', topic: '', submittedOn: '' });

  let submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/", task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task_bar">
      <form>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={(e) => { setTask({ ...task, name: e.target.value }) }}
          placeholder="Name"
        />
        <input
          type="text"
          name="topic"
          value={task.topic}
          onChange={(e) => { setTask({ ...task, topic: e.target.value }) }}
          placeholder="Topic"
        />
        <input
          type="date"
          name="submittedOn"
          value={task.submittedOn}
          onChange={(e) => { setTask({ ...task, submittedOn: e.target.value }) }}
        />
        <input type="submit" onClick={submit} value="Submit" />
      </form>
    </div>
  );
}

export default StudentDashboard;
