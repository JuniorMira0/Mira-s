import Banner from '../images/BannerWebsite.png';
import './Main.css';

export default function Main() {
  return (
    <section class="showcase-area">
      <div class="container">
        <div class="showcase-image">
          <img src={Banner} className="person" alt="banner" />
        </div>
      </div>
    </section>
  );
}
