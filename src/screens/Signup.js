import React, { useState } from "react";
import { Link, json } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // send data to backend
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Credentials");
      }

      if (response.ok) {
        console.log("User registered successfully!");
        // You can redirect the user to a different page upon successful registration.
        // For example, you can use React Router's history or a similar approach.
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="geolocation" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   const { credentials, setcredentials } = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = fetch("http://localhost:5000/api/createuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(),
//     });
//   };

//   // changing the static value, setcredential is use for upadate the value
//   const onChange = (event) => {
//     setcredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <>
//       <div className="container">
//         {/* connect to backend */}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label for="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={credentials.name}
//               onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={credentials.email}
//               onChange={onChange}
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={credentials.password}
//               onChange={onChange}
//               id="exampleInputPassword1"
//             />
//           </div>

//           <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="geolocation"
//               value={credentials.geolocation}
//               onChange={onChange}
//               id="exampleInputPassword1"
//             />
//           </div>

//           <button type="submit" className="m-3 btn btn-success">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }
