//creating an environment constant to save the backend url for making requests
// ?? means if the constant doesn't receive a value, it's gonna be "anything"
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080"