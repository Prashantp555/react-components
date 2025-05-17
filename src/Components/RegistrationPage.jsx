import React, { useReducer } from "react";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  submitted: false,
  error: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT_SUCCESS":
      return { ...initialState, submitted: true };
    case "SUBMIT_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}

function RegistrationPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      dispatch({ type: "SUBMIT_ERROR", error: "Passwords do not match." });
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: state.username,
          email: state.email,
          password: state.password
        })
      });
      if (response.ok) {
        dispatch({ type: "SUBMIT_SUCCESS" });
      } else {
        const data = await response.json();
        dispatch({ type: "SUBMIT_ERROR", error: data.message || "Registration failed." });
      }
    } catch (err) {
      dispatch({ type: "SUBMIT_ERROR", error: "Network error." });
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Register</h2>
      {state.submitted ? (
        <div style={{ color: "green" }}>Registration successful!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 10 }}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </div>
          {state.error && <div style={{ color: "red", marginBottom: 10 }}>{state.error}</div>}
          <button type="submit" style={{ width: "100%", padding: 10 }}>Register</button>
        </form>
      )}
    </div>
  );
}

export default RegistrationPage;
