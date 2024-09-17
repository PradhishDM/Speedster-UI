import { useState } from "react";

export default function CreatingAccount() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserDetails((values) => ({ ...values, [name]: value }));
  };

  //   console.log(userDetails);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="m-2 p-2 flex justify-center">
      <div className="border border-red-500 p-2 m-2 w-1/3">
        <div className="m-2 mb-6 p-2 flex flex-col justify-center items-center">
          <h2 className="font-semibold italic text-2xl font-serif text-slate-800 mb-2">
            Create Your Speedster Account
          </h2>
          <hr className="w-full border-red-500" />
        </div>
        <div>
          <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="flex">First Name</label>
                <input
                  type="text"
                  className="border border-slate-400 rounded-md p-1 m-1 mb-2 w-80"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label className="flex">Last Name</label>
                <input
                  type="text"
                  className="border border-slate-400 rounded-md p-1 m-1 mb-2 w-80"
                  name="lastName"
                  value={userDetails.lastName}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label className="flex">Enter your Email-id</label>
                <input
                  type="text"
                  className="border border-slate-400 rounded-md p-1 m-1 mb-2 w-80"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label className="flex">Create a Password</label>
                <input
                  type="password"
                  className="border border-slate-400 rounded-md p-1 m-1 mb-2 w-80"
                  name="password"
                  value={userDetails.password}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label className="flex">Re-type Password</label>
                <input
                  type="password"
                  className="border border-slate-400 rounded-md p-1 m-1 mb-2 w-80"
                  name="retypePassword"
                  value={userDetails.retypePassword}
                  onChange={handleInput}
                />
              </div>
              <div className="m-2 p-2 flex justify-center">
                <button className="btn bg-gray-300 m-1 p-2 px-4 rounded-lg border border-blue-900 hover:text-white hover:bg-black text-slate-600">
                  Create My Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
