import { useEffect } from 'react'
import ExamplePdf from './example.pdf';
import './App.css'
import gear from './svglogo/gear.svg';
import mongo from './svglogo/mongo.svg';
import express from './svglogo/express.svg';
import react from './svglogo/react.svg';
import node from './svglogo/node.svg';
import instagram from './svglogo/instagram.svg';
import linkedin from './svglogo/linkedin.svg';
import copyright from './svglogo/copyright.svg';
import email from './svglogo/email.svg';



function App() {
useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  return () => {
    hiddenElements.forEach((el) => observer.unobserve(el));
  }; 
  }, []);

  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  const handleEmailClick = async (event) => {
    event.preventDefault();
    const emailId = 'vinuthapoojary841@gmail.com';
    try {
        await navigator.clipboard.writeText(emailId);
        alert(`Email ID copied to your clipboard: "${emailId}"  you can mail me here.`);
      } catch (error) {
        console.error('Unable to copy text:', error);
      }
    }

  return (
    <>
 <section className="hidden" id='myname'>
        <h1>VINAYAK POOJARY</h1>
        <div className='designation'>
        <img id='logologo'  src={gear}></img>
        <h4>C.S.E</h4>
        </div>
        <div className='socials'>
        <a href='https://instagram.com/vinayak._.poojary777?igshid=NGExMmI2YTkyZg==' target='_blank'>
        <img id='insta' src={instagram} alt=''></img>
        </a>
        <a href='https://www.linkedin.com/in/vinayaka-poojary-576b51287' target='_blank'>
        <img id='lkdn' src={linkedin} alt=''></img>
        </a>
        <a href="#" onClick={handleEmailClick}>
      <img id='email' src={email}></img>
    </a>
        </div>


    </section><br></br>
<hr />

    <section className="hidden">
        <h2>Profile</h2>
        <p>
        I'm a passionate and motivated graduate in computer science engineering who is eager to kickstart my 
        professional journey. I have a strong foundation in computer science, and I'm excited to apply my 
        knowledge while learning from experienced professionals. Problem solving comes naturally to me, and 
        I enjoy finding creative solutions to challenges. I value effective communication and believe it's 
        essential for collaboration. Paying attention to detail is important to me, and I take pride 
        in consistently delivering high-quality work. Currently, I'm actively seeking opportunities to 
        contribute and grow in a dynamic and collaborative environment where I can make a meaningful impact.         
        </p>
    </section><br></br>
<hr />
    <section className="hidden">
        <div className='skillcontainer'>
        <h2>Skills</h2>
        <table>
            <tr>
                <th scope="row">Programming:</th>
                <td>Javascript</td>
                <td>Python</td>
                <td>C/C++</td>
                <td>MATLAB</td>  
                <td>HDL</td>
                <td>Typescript</td>  
            </tr> 
            <tr>
                <th scope="row">Webpage Technology:</th>
                <td>HTML</td>
                <td>CSS</td>    
            </tr> 
            <tr>
                <th>Database:</th>
                <td>SQL</td>
                <td>noSQL</td>    
            </tr>      
        </table><br></br>
        <h3>Major skill:</h3>
        <h4>Full-Stack development using MERN stack technology</h4>
        <div className="logos">
            <div className="logo hidden">
                <img src={mongo} alt=""></img>
            </div>
            <div className="logo hidden" id='express'>
                <img src={express} alt=""></img>
            </div>
            <div className="logo hidden">
                <img src={react} alt=""></img>
            </div>
            <div className="logo hidden">
                <img src={node} alt=""></img>
            </div>
        </div>
        </div>
    </section>
<hr />
    <section className="hidden">
    <h2>Project Portfolio:</h2>
    <div className="portfolio">
        <div className="project one">one</div>
        <div className="project two">two</div>
        <div className="project three">three</div>
        <div className="project four">four</div>
        <div className="project five">five</div>
    </div>
    </section>
<hr />
    <form>
    <h2>Get In Touch!</h2>
    <p></p>
    <div className='formInput name'>
        <label for='name'>Name</label>
        <input type='text' name='name'></input>
    </div>
    <div className='formInput email'>
        <label for='email'>Email</label>
        <input type='text' name='email'></input>
    </div>
    <div className='formInput phone'>
        <label for='Phone'>Phone</label>
        <input type='text' name='Phone'></input>
    </div>
    <button id='formBtn'>submit</button>
    </form>

    <div className='downloadable'>
       <h1>download my resume here</h1>
       <div className='rescontainer'>
       <div className='resumepdf'>
      

      <a
        href={ExamplePdf}
        download="Vinayak's Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button className='resbtn'><b>Download</b></button> 
      </a>
    </div>
        </div>
    </div><br />
    <div className='footer'>
        <img src={copyright} alt="" />
        <span>2023 Vikayak Poojary</span>
    </div>
    </>
  )
}

export default App
