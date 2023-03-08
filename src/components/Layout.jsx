import PropTypes from "prop-types";
import style from "@/styles/Layout.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ content }) {
  return (
    <div className={style.layout}>
      <Header />
      {content}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  content: PropTypes.node.isRequired,
};
