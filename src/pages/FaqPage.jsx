import React from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import "../assets/css/faqs.css";

const faqsData = [
  {
    id: 1,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, ab.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!",
  },
  {
    id: 2,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, ab.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!",
  },
  {
    id: 3,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, ab.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!",
  },
  {
    id: 4,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, ab.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore ipsa voluptas, nisi sed facere quos nemo quis voluptatum eaque praesentium debitis, quam facilis placeat, adipisci enim molestiae. Fugit perspiciatis voluptatum, omnis minus earum quam magni voluptas facilis repellendus dicta doloremque libero! Praesentium dicta repellat exercitationem suscipit quo nostrum corrupti, optio, sunt quas harum at nihil, vero placeat illo totam. Fugiat dignissimos obcaecati laboriosam corporis maiores at porro ipsam animi!",
  },
];

const FaqPage = () => {
  return (
    <>
      <Header />
      <main className="home-main container">
        <h2 className="about-title">FAQs</h2>
        <div className="faqs-container">
          {faqsData.map((data) => (
            <Faq key={data.id} data={data} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;
