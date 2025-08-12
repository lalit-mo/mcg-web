import React from "react";
import talkhead from "./talk-imgs/talkmain.png";
import UniNavbar from "../UniNavbar";
import "./Talks.css";
import tcs from "./talk-imgs/tcs.png";
import iitd from "./talk-imgs/iitd.png";
import iitk from "./talk-imgs/iitk.png";
import empower from "./talk-imgs/empower.png";
import dal from "./talk-imgs/dal.png";
import frsm from "./talk-imgs/frsm.jpeg";
import smm from "./talk-imgs/smm.jpg";
import iiith from "./talk-imgs/iiith.avif";
import hop from "./talk-imgs/hop.jpg";
import oslo from "../Publications/Publications-imgs/Oslo University seal 1.png";
import iitb from "./talk-imgs/iitb.png";
import adobe from "./talk-imgs/adobe.jpg";
import kims from "./talk-imgs/KIMS.png";
import mcgills from "./talk-imgs/mcgill.png";
import uoh from "./talk-imgs/uoh.jpg";
import nim from "../Publications/Publications-imgs/NIMHANS logo 1.png";
import fn from "./talk-imgs/fn.png";
import tl from "./talk-imgs/talk-landpng.png";
import icmpc from "./talk-imgs/icmpc.png";
import Talknav from "./Talknav";

function Talks() {
  return (
    <div>
      <UniNavbar />
      <img className="talkmain" src={tl} />

      {/* Navigation Links */}
      <div className="talk-navigation">
        <a href="#keynotes" className="pressbtn">
          Keynotes
        </a>
        <a href="#talks" className="pressbtn">
          Talks
        </a>
        <a href="#press" className="pressbtn">
          Press & Newsletters
        </a>
      </div>

      {/* Keynotes Section */}
      <div id="keynotes" className="keynotes-section">
        <h1 className="section-title">Keynotes</h1>

        <h2 className="year-talk">2025</h2>
        <div className="talk-list">
          <img className="talk-iconn" src={icmpc} />
          <p className="talk-p">
            Alluri, V. (2025). Bridging Expression and Experience: Situated
            Music Cognition through Digital Footprints at 18th International
            Conference on Music Perception and Cognition, São Paulo, Brazil.
          </p>
        </div>

        <h2 className="year-talk">2021</h2>
        <div className="talk-list">
          <img className="talk-iconn" src={smm} />
          <p className="talk-p">
            Alluri, V. (2021). My Music and I: The interplay between music and
            individual differences at Speech, Music, and Mind with Audio
            Satellite Workshop, Interspeech 2021.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-icond" src={frsm} />
          <p className="talk-p">
            Alluri, V. (2021). Investigating neural effects of musical training
            using the dynamic, model-free naturalistic paradigm. At the 26th
            International Symposium on Frontiers in Research in Speech and
            Music. FRSM, 2021.
          </p>
        </div>

        <h2 className="year-talk">2018</h2>
        <div className="talk-list">
          <img className="talk-iconn" src={mcgills} />
          <p className="talk-p">
            Alluri, V. (2018). Timbre in the Brain. At Timbre2018 Conference,
            McGill Univeristy. Montreal, Canada.
          </p>
        </div>
      </div>

      {/* Talks Section */}
      <div id="talks" className="talks-section">
        <h1 className="section-title">Talks</h1>

        <h2 className="year-talk">2024</h2>
        <div className="talk-list">
          <img className="talk-iconn" src={tcs} />
          <p className="talk-p">
            Alluri, V. (2024). Exploring the human musical experience in the age
            of Big Data and Technology. Tata Consultancy Services. Virtual Talk.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconn" src={iitd} />
          <p className="talk-p">
            Alluri, V. (2024). Exploring the human musical experience in the age
            of Big Data and Technology. Dept. of Humanities & Social Studies,
            IIT Delhi, India.
          </p>
        </div>

        <h2 className="year-talk">2023</h2>
        <div className="talk-list">
          <img className="talk-icone" src={iitk} />
          <p className="talk-p">
            Alluri, V. (2023). Exploring the human musical experience in the age
            of Big Data and Technology. Winter School On Speech And Audio
            Processing. IIT-Kanpur, India.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-icone" src={empower} />
          <p className="talk-p">
            Alluri, V. (2023). Music as a marker for depression. National
            Institute For The Empowerment Of Persons With Intellectual
            Disabilities. Hyderabad, India.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-icone" src={dal} />
          <p className="talk-p">
            Alluri, V. (2023). The Naturalistic Paradigm: An Approach To
            Studying Individual Variability In Neural Underpinnings Of Music
            Perception. Dalian University of Technology, China.
          </p>
        </div>

        <h2 className="year-talk">2022</h2>
        <div className="talk-list">
          <img className="talk-iconfrsm" src={frsm} />
          <p className="talk-p">
            Alluri, V. (2022). Investigating neural effects of musical training
            using the dynamic, model-free naturalistic paradigm. At 26th
            International Symposium on Frontiers of Research in Speech and
            Music. Pune, India.
          </p>
        </div>

        <h2 className="year-talk">2021</h2>
        <div className="talk-list">
          <img className="talk-iconfrsm" src={smm} />
          <p className="talk-p">
            Alluri, V. (2021). My Music and I: The interplay between music and
            individual differences. At Speech, Music, and Mind with Audio
            Satellite Workshop, Interspeech 2021.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={iiith} />
          <p className="talk-p">
            Alluri, V. (2021). Music and Brain. Implications for Learning -
            Teaching the Learning Brain Workshop at International Institute of
            Information Technology - Hyderabad, India
          </p>
        </div>

        <h2 className="year-talk">2020</h2>
        <div className="talk-list">
          <img className="talk-iconfrsm" src={hop} />
          <p className="talk-p">
            Alluri, V. (2020). Music Research in the era of Big Data. At Hopper
            India, Virtual Conference.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={iiith} />
          <p className="talk-p">
            Alluri, V. (2020). Music and Engineering, International Institute of
            Information Technology - Hyderabad, India
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={iiith} />
          <p className="talk-p">
            Alluri, V. (2020). Women in Engineering, International Institute of
            Information Technology - Hyderabad, India
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={iiith} />
          <p className="talk-p">
            Alluri, V. (2020). Let's Talk AI - ML in Music, International
            Institute of Information Technology - Hyderabad, India
          </p>
        </div>

        <h2 className="year-talk">2019</h2>
        <div className="talk-list">
          <img className="talk-iconfrsm" src={oslo} />
          <p className="talk-p">
            Alluri, V. (2019). Dynamic music processing in the brain. University
            of Oslo.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={iitb} />
          <p className="talk-p">
            Alluri, V. (2019). Music as a mirror of the self. Indian Institute
            of Technology - Bombay, India
          </p>
        </div>

        <h2 className="year-talk">2018</h2>
        <div className="talk-list">
          <img className="talk-iconfrsm" src={iitb} />
          <p className="talk-p">
            Alluri, V. (2018). Decoding Brain States using Music. Indian
            Institute of Technology - Bombay, India
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={adobe} />
          <p className="talk-p">
            Alluri, V. (2018). Beyond Machine Learning: Decoding Brain States
            using Music. At Adobe Research, Benguluru, India
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={kims} />
          <p className="talk-p">
            Alluri, V. (2018). The Musical Brain. At KIMS Hospital, Hyderabad,
            India
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={mcgills} />
          <p className="talk-p">
            Alluri, V. (2018). Timbre in the Brain. Timbre 2018 Conference @ the
            Schulich School of Music, McGill University, Montreal, Canada
          </p>
        </div>

        <h2 className="year-talk">2017</h2>
        <div className="talk-list">
          <img className="talk-iconfrsm" src={frsm} />
          <p className="talk-p">
            Alluri, V. (2017). Music Processing During Naturalistic Listening
            and the Effect of Musical Expertise. At the 23rd Frontiers of
            Research in Speech and Music Conference, Rourkela, India
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={uoh} />
          <p className="talk-p">
            Alluri, V. (2017). The Musical Brain. At The CogTalk, Center for
            Neural and Cognitive Science. University of Hyderabad, India
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconfrsm" src={nim} />
          <p className="talk-p">
            Alluri, V. (2017). Functional neuroimaging studies on Music and the
            Brain. National Institute of Mental Health & Neuro Sciences,
            Benguluru, India
          </p>
        </div>

        <h2 className="year-talk">2014</h2>
        <div className="talk-list">
          <img className="talk-iconfrsm" src={fn} />
          <p className="talk-p">
            Alluri, V. (2014). fMRI meets MIR: Neural Correlates of Music and
            Pleasure Processing During Naturalistic Listening. At 3rd
            International Symposium Frontiers in Neuroscience. Buzios, Brazil.
          </p>
        </div>

        <div className="talk-list">
          <img className="talk-iconn" src={frsm} />
          <p className="talk-p">
            Alluri, V. (2014). fMRI meets MIR: Neural Correlates of Music and
            Pleasure Processing During Naturalistic Listening. At 3rd
            International Symposium Frontiers in Neuroscience. Buzios, Brazil
          </p>
        </div>
      </div>

      {/* Press & Newsletter Section */}
      <div id="press" className="press-section">
        <h1 className="section-title">Press & Newsletter</h1>
        <h2 className="newspapper">Newspapers</h2>

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://timesofindia.indiatimes.com/city/hyderabad/books-get-background-music-courtesy-iiit-h/articleshow/96670016.cms"
        >
          Books get background music, courtesy International Institute of
          Information Technology Hyderabad, Times of India, 2nd Jan, 2023
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.thehindubusinessline.com/news/national/your-playlist-mirrors-your-mood-confirms-iiit-hyderabad-study/article32801958.ece"
        >
          Your playlist mirrors your mood, confirms IIIT-Hyderabad study , The
          Hindu Businessline, 8th October 2020
        </a>
        <br />
        <br />

        <a className="plink">
          IIIT Hyderabad develops model to predict traits through music-induced
          movement. Telangana Today, 17th July 2020
        </a>
        <br />
        <br />

        <a className="plink">
          Music will help identify mental illness, claims study, Telangana Today
          - 21th September 2019
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.thehindu.com/news/national/not-all-is-music-to-our-ears-say-researchers/article29472078.ece"
        >
          Not all is music to our ears, say researchers, The Hindu, 20th Sep
          2019
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.deccanchronicle.com/entertainment/music/310318/the-road-to-musical-recovery.html"
        >
          The road to musical recovery, Deccan Chronicle, 30th March 2018
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://timesofindia.indiatimes.com/city/hyderabad/books-get-background-music-courtesy-iiit-h/articleshow/96670016.cms"
        >
          Books get background music, courtesy International Institute of
          Information Technology Hyderabad, Times of India, 2nd Jan, 2023
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.scientificamerican.com/podcast/episode/different-brain-regions-handle-different-music-types/"
        >
          Different Brain Regions Handle Different Music Types, Scientific
          American, 12th March 2014
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.sciencedaily.com/releases/2013/08/130807094348.htm"
        >
          This is your brain on Vivaldi and Beatles, Science Daily, 7th August,
          2013
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://yle.fi/uutiset/3-5463831"
        >
          Musiikki aktivoi aivoissa liike- ja tunnealueita (Music activates
          motor and emotion areas in the brain), YLE, Finland, 5th December,
          2011
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.ts.fi/kulttuuri/285486/Musiikin+kuuntelu+saa+aivot+syttymaan"
        >
          Musiikin kuuntelu saa aivot syttymään (Listening to music makes your
          brain ignite), Turun Sanomat, Finland, 5th December, 2011
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.err.ee/359786/muusika-ergastab-tervet-aju"
        >
          Muusika ergastab tervet aju (Music stimulates the whole brain), Eesti
          Rahvusringhääling (ERR), Estonia, 8th December, 2011
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://forte.delfi.ee/artikkel/62972402/muusika-ergastab-tervet-aju"
        >
          Muusika ergastab tervet aju (Music stimulates the whole brain), Delfi
          Forte, Estonia, 8th December, 2011
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.thehindu.com/todays-paper/tp-national/tp-andhrapradesh/music-does-wonders-to-the-human-brain-says-researcher-duo/article2740523.ece"
        >
          Music does wonders to the human brain, says researcher duo, The Hindu,
          23rd December 2011
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.europapress.es/chance/lifestyle/noticia-muestran-primera-vez-musica-activa-areas-emocional-motora-creativa-cerebro-20111206151108.html"
        >
          Muestran por primera vez cómo la música activa las áreas emocional,
          motora y creativa del cerebro, EuropaPress, Madrid, 6th December 2011
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://psypress.ru/psynews/25542.shtml"
        >
          Прослушивание музыки активирует весь мозг ( Listening to music
          activates the entire brain ), PsyPress, Russia, 6th December 2011
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://sciencenordic.com/finland-music-psychology/how-music-touches-the-brain/1417737"
        >
          How music touches the brain, Science Nordic, 27th December 2011
        </a>
        <br />
        <br />

        <h2 className="newspapper">Web News</h2>
        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.newstap.in/education/iiit-h-creation-plays-suitable-bgm-while-reading-books-wins-award-1452731"
        >
          IIIT-H creation plays suitable BGM while reading books, wins award.
          Newstap, 16th December, 2022
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://goodereader.com/blog/e-book-news/indian-trio-devise-algorithm-to-add-suitable-music-to-match-different-moods-in-an-e-book"
        >
          Indian trio devise algorithm to add suitable music to match different
          moods in an e-book Good-R-Reader18th December 2022
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/http://arnoldit.com/wordpress/2020/10/21/music-and-moods-research-verifies-the-obvious/"
        >
          Music and Moods: Research Verifies the Obvious , ArnoldIT
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.newsgram.com/depression-risk-listen-sad-songs"
        >
          Individuals at Depression Risk Listen More to Sad Songs: Study,
          Newsgram
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.newkerala.com/news/2020/178071.htm"
        >
          Those at depression risk listen to sad music , NewKerala
        </a>
        <br />
        <br />

        <a
          className="plink"
          href="https://web.archive.org/web/20230928105710/https://www.downtoearth.org.in/blog/health/how-music-psychology-can-boost-mental-illness-identification-67172"
        >
          How music psychology can boost mental illness identification, Down to
          Earth Magazine, 10th October 2019
        </a>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Talks;
