import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data"
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";


const App = () => {

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true); 
  // Setting up loading function so that while our data is fetching from api we can show a loader instead of blank page 

  const [category, setCategory] = useState(filterData[0].title)
   // for filtering feature 


  //fetching the data from api :
  const fetchData = async () => {
    //At starting set true:
    setLoading(true);

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      // console.log(data);
      setCourses(data.data)
    }
    catch (error) {
      // console.log("Error found");
      toast.error("Error Found")
    }

    //When data is found make it hidden by setting as false
    setLoading(false);

  }

  //Use Effect for Rendering once we get the data :
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className=" min-h-screen flex flex-col bg-bgDark2">
        <div>
          <Navbar />
        </div>
        <div>
          <Filter
            filterData={filterData} // This is come from the data.js we imported earlier
            setCategory={setCategory} //Setting up the category so that we can filter out by clicking buttons
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] ">{
          loading ?
            (<Spinner />)
            : <Cards
              courses={courses}
              category={category}
            />

        }
        </div>

      </div>

    </>
  );
};

export default App;
