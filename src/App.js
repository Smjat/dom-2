import "./image/bg-intro-desktop.png";
import "./image/bg-intro-mobile.png";
import './App.css';

function App() {
  return (
    <>
       <div className="wrapper">
        <main>
            <section className="left">
                <h1>Learn to code by watching others</h1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </section>         

            <section className="right">
                <div className="heading">
                    <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>                
                </div>
                
                <form>
                    <input type="text" id="fname" name="fname" placeholder="First Name"/>
                    <input type="text" id="lname" name="lname" placeholder="Last Name"/>
                    <input type="email" id="email" name="email" placeholder="Email Address"/>
                    <input type="password" id="pwd" name="pwd" placeholder="Password"/>
                    <button class="register">CLAIM YOUR FREE TRAIL</button>
                    <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                </form>
            </section>
        </main>
    </div>
    
    </> 
  );
}

export default App;
