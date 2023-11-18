import { useState } from "react";
import JsonData from "./MOCK_DATA.json"



function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>

      <input type='text' placeholder="search..." onChange={(e) => { setSearchTerm(e.target.value) }} />
      {
        JsonData.filter((val) => {
          if (val.searchTerm == '') {
            return val;
          }
          else if (val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
            return val;
        }).map((val) => (
          <div>
            {val.first_name}
          </div>
        )
        )
      }
    </div>
  );
}

export default App;
