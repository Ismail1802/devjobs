import { Button } from "../../components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "tomato",
      }}
    >
      <h1 style={{ margin: "1rem", color: "white" }}>
        This vacancy does not exist
      </h1>
      <Link to="/devjobs/">
        <Button text="Go back" contStyle="button__search" />
      </Link>
    </div>
  );
};

export { ErrorPage };
