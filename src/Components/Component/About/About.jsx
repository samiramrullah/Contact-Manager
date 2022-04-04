import Home from "../../Home/Home";
import img from "../../../Images/photo.jpeg";
import "./About.css";
const About = () => {
  return (
    <Home>
      <h1>Samir Alam</h1>

      <div className="about_main">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure
          fugit, vero nihil, dolorem, facere tempore nisi laboriosam error hic
          cumque sint! Nihil vero rem explicabo dolore reiciendis perspiciatis
          illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          vero numquam blanditiis sed, modi laudantium reprehenderit delectus
          eveniet at laboriosam culpa debitis fugit cumque facilis nesciunt
          exercitationem? Earum, vero odit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Sunt itaque alias magni, quasi iste illo
          ut sapiente nobis tempore recusandae, consequatur vero labore officia,
          voluptatem porro omnis. Molestiae, reiciendis labore? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Error incidunt, alias
          nostrum quis minima consequuntur placeat esse laboriosam quasi
          dignissimos inventore doloremque nam voluptate consequatur voluptates
          beatae enim voluptas. Facilis? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam, quis et! Praesentium error placeat magnam non
          veniam quae obcaecati? Obcaecati magnam neque laborum nisi suscipit
          omnis veritatis fugit autem sit. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Beatae labore aperiam eveniet optio
          repellat facere accusantium accusamus corrupti quod aut maxime illo a,
          sapiente iste molestias voluptatem amet sequi tempore! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Explicabo dolorem
          repudiandae voluptas corrupti debitis similique consequuntur
          distinctio totam, et labore sit laborum harum temporibus soluta quae
          odio doloremque. Ipsam, et. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi minima doloremque eum aut nihil nam
          corporis, itaque eveniet eaque saepe tenetur dolorum magnam id atque
          veniam? Quisquam, porro! Dolore, quidem!
        </div>
        <div className="image_about">
          <img className="img" src={img} alt="IM" />
        </div>
      </div>
    </Home>
  );
};
export default About;
