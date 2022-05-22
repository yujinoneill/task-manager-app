const Home = () => {
  return (
    <div className="Home">
      <section className="welcome-box">
        <div className="welcome-text">
          <h3>Welcome back, Oneill!</h3>
          <p>
            {/* 랜덤 문구로 만들어도 좋을 듯 */}
            Your tasks are waiting for you. Check your things and Manage your
            time more effectively.
          </p>
        </div>
        <div className="welcome-img">
          <img
            src={process.env.PUBLIC_URL + "/assets/undraw_task_list_6x9d.svg"}
            alt="welcome-img"
          />
        </div>
      </section>
      <section className="plan-box">
        <div className="main-plan">
          <div className="annual-plan"></div>
          <div className="monthly-plan"></div>
        </div>
        <div className="sub-plan"></div>
      </section>
    </div>
  );
};

export default Home;
