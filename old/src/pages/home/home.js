import logo from "../../assets/images/logo.svg";

const HomePage = () => {
  return (
    <section className="container section-padder">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit
        placeat, nemo earum odit <a href="/">nihil repellat</a> veniam sit modi accusantium
        praesentium voluptas! Inventore commodi iste, consectetur provident
        quasi autem illo.
      </p>
      <ul>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
      </ul>
      <h2>Lorem.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        dolores molestiae autem, assumenda quae tempore modi, quam error vitae
        sequi repellat necessitatibus non mollitia accusantium pariatur quaerat
        officiis aperiam reprehenderit sit ipsum? Sit possimus doloremque
        obcaecati itaque incidunt blanditiis dolores.
      </p>
      <h3>title</h3>
      <h4>title</h4>
      <h5>title</h5>
      <h6>title</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        pariatur dolore assumenda quis debitis quasi sit quos, optio, totam fuga
        autem facilis quam quibusdam. illum distinctio, amet aperiam
        error autem quia aliquid. Porro aut quasi optio explicabo iusto
        consectetur provident quae aliquam repellendus mollitia!
      </p>
      <img src={logo} alt="" />
    </section>
  );
};

export default HomePage;
