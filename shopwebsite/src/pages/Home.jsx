import { useAuth } from "../context/AuthContext";
import middle from "../image/middle.jpg";

export default function Home() {
  const { user, googleLogin, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <h1 className="title"> Welcome to Vuarte </h1>
      <p></p>
      <h2 className="gotoshop">New collection out now!</h2>
      <p></p>
      <img src={middle} alt="wait until the page loads" />
      <p></p>
      <button type="button">Go to shop</button>
      <i class="fa fa-y-combinator" aria-hidden="true"></i>
      <button onClick={() => googleLogin()}>login</button>
      <button onClick={() => logOut()}>logOut</button>
      <h1>{user?.email}</h1>
      <img src={user?.photoURL}></img>
    </div>
  );
}
