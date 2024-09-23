import { useParams } from "react-router-dom";

const AboutUs = () => {
  const { id } = useParams();

  return <div>
    <h2>
      About Us
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tenetur nihil molestias, reiciendis cum minima laudantium rem velit. Fuga, laudantium! Facilis quos ea soluta architecto recusandae illum numquam odit deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam rem asperiores provident! Repudiandae ducimus delectus ullam pariatur recusandae, quaerat reiciendis! Temporibus eius itaque, rem in vero voluptate facilis nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a eum corrupti magni quam? Porro eum est quasi sit nostrum? Vero cum nesciunt accusantium laboriosam illo itaque magni hic. Sapiente.</p>
    <p>El id es {id}</p>
  </div>;
};
export default AboutUs;