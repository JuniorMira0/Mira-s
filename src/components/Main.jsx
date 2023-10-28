import Banner from '../images/BannerWebsite.png';
import './Main.css';

export default function Main() {
  return (
    <section className="showcase-area">
      <div className="container">
        <div className="showcase-image">
          <img src={Banner} className="person" alt="banner" />
        </div>
      </div>
    </section>
  );
}
