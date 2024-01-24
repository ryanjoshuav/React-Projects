const BtnContainer = ({ jobs, tab, setTab }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => (
        <button
          key={job.id}
          className={tab === index ? "job-btn active-btn" : "job-btn"}
          onClick={() => setTab(index)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
};
export default BtnContainer;
