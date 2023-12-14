import '../../assets/styles/global.css'
import styles from "./app.module.css";

import { useState } from "react";
import Header from "../Header/Header";
import ScrollTrigger from 'react-scroll-trigger';
import Footer from '../Footer/Footer';


function App() {
  const [isLightTheme, set_isLightTheme] = useState(false);
  const toggleTheme = () => {
    set_isLightTheme(!isLightTheme);
  };
  
  const onEnterViewport = () => {
    console.log("Footer")
  }


  return (
    <div className={`${styles.layout} ${isLightTheme ? "":"theme-dark"}`}>
      <Header toggleTheme={toggleTheme} isLightTheme={isLightTheme} />

      <main className={styles.main} style={{"background":"gray"}}>OK</main>
      <main className={styles.main} style={{"display":"none"}}>
        <section>

          <h1>Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            fugit placeat, nemo earum odit <a href="/">nihil repellat</a> veniam
            sit modi accusantium praesentium voluptas! Inventore commodi iste,
            consectetur provident quasi autem illo.
          </p>
          <ul>
            <li>Sticky footer</li>
            <li>Sticky header</li>
            <li>Logo</li>
            <li>default outline color.</li>

            <li>utiliti classes</li>
            <li>Stand with israel.</li>
            <li>todo: sticky header custom hook</li>
            <li>Git hub account</li>
            <li>Github pages</li>
          </ul>
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolores molestiae autem, assumenda quae tempore modi, quam error
            vitae sequi repellat necessitatibus non mollitia accusantium
            pariatur quaerat officiis aperiam reprehenderit sit ipsum? Sit
            possimus doloremque obcaecati itaque incidunt blanditiis dolores.
          </p>
          <h3>title</h3>
          <h4>title</h4>
          <h5>title</h5>
          <h6>title</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            pariatur dolore assumenda quis debitis quasi sit quos, optio, totam
            fuga autem facilis quam quibusdam. illum distinctio, amet aperiam
            error autem quia aliquid. Porro aut quasi optio explicabo iusto
            consectetur provident quae aliquam repellendus mollitia!
          </p>
          {/* <img src={logo} alt="" /> */}

      
        </section>
      </main>
        <ScrollTrigger onEnter={onEnterViewport} />
        <Footer />
    </div>
  );
}

export default App;
