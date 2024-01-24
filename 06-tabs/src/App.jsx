import { useEffect } from "react";
import { useState } from "react";

import BtnContainer from "./BtnContainer.jsx";
import JobInfo from "./JobInfo.jsx";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [tab, setTab] = useState(0);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="section">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} setTab={setTab} tab={tab} />
      <JobInfo jobs={jobs} tab={tab} />
    </section>
  );
};
export default App;
