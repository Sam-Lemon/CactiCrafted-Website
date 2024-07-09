import backgroundImage from "../images/succ-bkg.jpg";

/** This component just styles the background image for the
 * succulent banner towards the top of the page. I've made
 * it it's own component in case I want to use it elsewhere.*/
const BackgroundImage = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "30rem",
  };

  return <div style={divStyle}></div>;
};

export default BackgroundImage;
