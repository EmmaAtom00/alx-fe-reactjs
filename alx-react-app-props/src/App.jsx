import UserContext from "./components/UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com", age:54, bio:"Software developer" };

  return (
    <UserContext.Provider value={{ userData }}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
