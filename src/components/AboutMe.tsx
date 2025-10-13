import React from 'react';
import './styles/AboutMeStyle.scss';

const AboutMe: React.FC = () => (
  <div className="about-me">
    <div className="bio">
  <h1>You know the dream's the same every night</h1>
  <h1>Strobe light</h1>
  <h1>I can still see</h1>
  {/* <p>
    Fotografowanie jest środkiem wyrazu, którym wizualnie komunikuję się ze światem. Wyrosłem w rodzinie artystycznej i forma wypowiedzi obrazem była dla mnie naturalna i oczywista jak oddech.
  </p>
  <p>
    Od zawsze miałem nieodpartą potrzebę tworzenia. Długo poszukiwałem odpowiedniego medium, które najlepiej odda subiektywne postrzeganie świata. Rejestracja chwili z życia za pomocą aparatu fotograficznego najtrafniej utrwala jej charakter, klimat i zatrzymuje jej ślad na zawsze…
  </p>
  <p>
    Jestem fotografem, który angażuje w tę dziedzinę życia ogromny wysiłek i pasję. Chcę się nią z Państwem podzielić, dlatego zapraszam do kontaktu ze mną. Jestem kreatywny i otwarty na nowe wyzwania.
  </p> */}
</div>
    <div className="contact">
      <h2>Contact</h2>
      <p>Instagram: <a href="https://www.instagram.com/piotr_kocwin" target="_blank" rel="noopener noreferrer">@piotr_kocwin</a></p>
    </div>
  </div>
);

export default AboutMe;