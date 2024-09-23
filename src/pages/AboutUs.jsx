import { useParams } from "react-router-dom";

const AboutUs = () => {
  const apiUrl = process.env.APIKEY;
  const { id } = useParams();

  return <div>
    <h2>
      About Us
    </h2>
    <p>El id es {id}</p>
  </div>;
};
export default AboutUs;