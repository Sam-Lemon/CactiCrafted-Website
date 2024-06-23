import backgroundImage from '../images/succ-bkg.jpg';


const BackgroundImage = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
    };

    return(
        <div style={divStyle}>

        </div>
    )
}

export default BackgroundImage;