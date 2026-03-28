import React from 'react';
import './styles/AboutMeStyle.scss';

const AboutMe: React.FC = () => (
  <div className="about-me">
    <div className="bio">
      <h2>Bio</h2>

      <p>
        Piotr Koćwin (ur. 1998) — artysta wizualny i fotograf,
        mieszkający i pracujący w Częstochowie. Absolwent informatyki na
        Politechnice Częstochowskiej, zawodowo związany z technologią i systemami
        informatycznymi, równolegle rozwija konsekwentną praktykę artystyczną
        opartą na fotografii.
      </p>

      <p>
        Fotografia stanowi dla niego nieodłączny element egzystencji i podstawowe
        medium wypowiedzi twórczej. Jego prace koncentrują się na abstrakcji i
        redukcji formy, traktując obraz nie jako zapis rzeczywistości, lecz jako
        autonomiczną przestrzeń wizualnego doświadczenia.
      </p>

      <p>
        Inspiracje czerpie zarówno z fotografii konceptualnej, jak i z tradycji
        abstrakcji geometrycznej oraz sztuki współczesnej. Jego prace były
        prezentowane m.in. na Tokyo International Mini Print Triennial
        (Tama Art University, 2018).
      </p>
    </div>

    <div className="statement">
      <h2>Art Statement</h2>

      <p>
        Fotografia jest dla mnie nie wyborem, lecz koniecznością, jest ona
        integralną częścią mojej egzystencji.
      </p>

      <p>
        Pracuję z abstrakcją, używając fotografii jako środka wyrazu, który
        pozwala mi nadać formę wewnętrznemu imperatywowi tworzenia.
      </p>
    </div>

    <div className="contact">
      <h2>Contact</h2>
      <p>
        Instagram:{' '}
        <a
          href="https://www.instagram.com/piotr_kocwin"
          target="_blank"
          rel="noopener noreferrer"
        >
          @piotr_kocwin
        </a>
      </p>
    </div>
  </div>
);

export default AboutMe;
