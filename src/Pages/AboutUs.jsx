import PropTypes from "prop-types";
import Logo from "../images/ImgLogo.PNG";
import Black from "../images/Black.PNG"

const AboutUs = () => {
  return (
    <section className="container-108 bg-white py-8 lg:pt-36 lg:pb-52 ">
      <h2 className="text-center font-bold md:text-4xl text-3xl text-bluegray-9 mb-8 font-outfit">
        About Us
      </h2>
      <div className="md:bg-mission w-full md:py-16 bg-no-repeat bg-75% bg-left   flex items-center md:justify-end justify-center mb-11 ">
        <About
          heading={"Our Vision"}
          img={Logo}
          alt={"two hands shaking each other"}
          className="rounded "
        >
At 14k Bullies Kennel, we envision a world where the companionship between humans and dogs transcends ordinary bounds. Our vision is to be a beacon of excellence in breeding, creating a legacy where each dog we nurture becomes an ambassador of love, joy, and unparalleled companionship. We strive to contribute to a society where the bond between individuals and their canine companions enriches lives, fosters happiness, and brings a touch of extraordinary warmth to every home.

</About>
      </div>
      <div className="md:bg-vision w-full md:py-16 bg-no-repeat bg-75% bg-right flex items-center md:justify-start justify-center">
        <About
          heading={"Our Mission"}
          img={Black}
          alt={
            "two ladies and a gentlemen discussing round the table with two laptops on the table"
          }
        >
Our mission at 14k Bullies Kennel is to breed and raise French Bulldogs and Bullies of exceptional quality, health, and temperament. We are committed to the ethical and responsible breeding of these beloved breeds, ensuring that each dog embodies the highest standards in conformation, behavior, and overall well-being. Through meticulous care, socialization, and dedication to the breed's integrity, we aim to provide families with not just pets but lifelong companions who bring joy, love, and a unique charm into their lives.

</About>
      </div>
    </section>
  );
};

const About = ({ heading, children, img, alt }) => {
  return (
    <article className="max-w-[31rem] bg-bluegray-2 px-6 py-6 rounded-md text-center ">
      <div>
        <h3 className="text-pri-blue lg:text-fh-3xl-bold text-fh-2xl-bold  mb-3">
          {heading}
        </h3>
        <p className="lg:text-fh-xl text-fh-base text-black-0a font-outfit mt-6 mb-6 md:mb-0 w-full">
          {children}
        </p>
      </div>
      <img src={img} alt={alt} className="md:hidden" />
    </article>
  );
};

About.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.string,
  alt: PropTypes.string,
  img: PropTypes.string,
};

export default AboutUs;
