import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className=" flex items-center justify-center ">

        <div className=" text-4xl flex flex-col gap-2 text-grey-500">
          404 - Not Found.
          <Link to="/">Home</Link>
        </div>
        
      </div>
    </>
  );
};

export default NotFound;
