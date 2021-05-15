import {Link,BrowserRouter as Router , Switch, Route} from "react-router-dom";
import BedAvailability from "./components/BedAvailability/BedAvailability"
import HomePage from "./components/HomePage/HomePage"
import ChatRoom  from './components/Chatroom/ChatRoom';
import "./index.css"

function App() {
  return (
    <Router>
    
    <div className="body">
    <Switch>
   


    <Route exact path="/">
      <div className="homePage">
      <HomePage/>
      <br/>
      <Link to="/beds">
        This is to go to beds page
      </Link>
      <br/>
      {/* <Link to="/chat">
        This is to go to chatroom page
      </Link> */}
      </div>
    </Route>

    <Route exact path="/beds">
    <div className="BedAvailability_page">
    <BedAvailability/>
    <br/>
    <Link to="/">
        This is to go to home page
      </Link>
      <br/>
      <Link to ="/chat">
        This is to go to chat page
      </Link>
    </div>
    </Route>

   
    
    <Route exact path="/chat">
      <div className="Chatroom">
        <ChatRoom/>
        <br/>
      {/* <Link to ="/">
        To go to home page
      </Link>
      <br/>
      <Link to ="/beds">
        to go to beds page
      </Link> */}
      </div>
    </Route>
    </Switch>
    </div>
    

   
    </Router>

  );
}

export default App;
