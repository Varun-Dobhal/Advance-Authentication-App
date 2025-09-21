import "./Home.scss";
import loginImg from "../../assets/login.svg";
import { Link } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/hiddenLink";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <ShowOnLogin>
        <div>
          <section className="container hero">
            <div className="hero-text">
              <h2>Welcome Back {user?.name || "User"}</h2>
              <p>
                A complete solution to master secure authentication and
                authorization in the MERN stack.
              </p>
              <p>
                Implement User Regisration, Login, Password Reset, Social Login,
                User Permissions, Email Notifications etc.
              </p>
            </div>

            <div className="hero-image">
              <img src={loginImg} alt="Auth" />
            </div>
          </section>
        </div>
      </ShowOnLogin>

      <ShowOnLogout>
        <div>
          <section className="container hero">
            <div className="hero-text">
              <h2>NextGen MERN Authentication System</h2>
              <p>
                A complete solution to master secure authentication and
                authorization in the MERN stack.
              </p>
              <p>
                Implement User Regisration, Login, Password Reset, Social Login,
                User Permissions, Email Notifications etc.
              </p>

              <div className="hero-buttons --flex-start">
                <button className="--btn --btn-danger">
                  <Link to="/register">Register</Link>
                </button>
                <button className="--btn --btn-primary">
                  <Link to="/login">Login</Link>
                </button>
              </div>
            </div>

            <div className="hero-image">
              <img src={loginImg} alt="Auth" />
            </div>
          </section>
        </div>
      </ShowOnLogout>
    </>
  );
};

export default Home;
