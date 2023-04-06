import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        {/* <h2>{error.statusText || "Somethinggo goes wrong!"}</h2> */}
        <h2>{error.data.message || "Somethinggo goes wrong!"}</h2>
        <h3>{error.data.reason}</h3>
      </div>
    );
  }
  //   return <div>"Somethinggo goes wrong!"</div>;
  throw error;
};

export default ErrorPage;
