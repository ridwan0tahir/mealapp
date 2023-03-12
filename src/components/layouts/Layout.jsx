import PropTypes from "prop-types";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import style from "@/styles/Layout.module.scss";

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
