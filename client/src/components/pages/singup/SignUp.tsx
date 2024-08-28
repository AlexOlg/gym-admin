import { useSearchParams } from "react-router-dom";
import SignupGym from "../../common/signup-gym/SignupGym";
import SignupUser from "../../common/signup-user/SignupUser";

export const SignUp = () => {
  const [searchParams, setSearchParams] = useSearchParams();


  const handleUserType = (type: string) => {
    searchParams.set("type", type);
    setSearchParams(searchParams, {
      replace: true,
    });
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex gap-3 justify-center">
            <button
              className="bg-blue-900 hover:bg-blue-800  text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleUserType("gym");
              }}
            >
              Gym
            </button>
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleUserType("user");
              }}
            >
              User
            </button>
          </div>
          {searchParams.get("type") ? (
            searchParams.get("type") === "gym" ? (
              <SignupGym />
            ) : (
              <SignupUser />
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
