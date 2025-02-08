import React from 'react'
import ReactRoundedImage from "react-rounded-image"
import UniNavbar from '../UniNavbar'
import vinoo from "./Mem-imgs/VN.jpg"
import "./Members.css"
import linkedin from "./Mem-imgs/linkedin.png"
import mail from "./Mem-imgs/Mail.png"
import web from "./Mem-imgs/web.png"
import lalith from "./Mem-imgs/Lalith.jpeg"
import jayachandran from "./Mem-imgs/jayachandran.jpg"
import dipansh from "./Mem-imgs/dipansh.jpg"
import aditya from "./Mem-imgs/Aditya Raghuvanshi profile.jpeg"
import arghya from "./Mem-imgs/Arghya Roy Dec 18.jpg"
import atharva from "./Mem-imgs/Atharva Gogate.jpg"
import jatin from "./Mem-imgs/Jatin Passport Photo.jpeg"
import pavani from "./Mem-imgs/Pavani Chowdary Feb 24 Image.jpeg"
import pratyaksh from "./Mem-imgs/Pratyaksh Gautam.jpg"
import prince from "./Mem-imgs/Prince.jpg"
import utsav from "./Mem-imgs/utsav.jpeg"
import vedansh from "./Mem-imgs/Vedansh Agrawal Feb 24 Image.jpeg"
import chinmay from "./Mem-imgs/Chinmay Pateria Jan 30.jpg"
import jaidev from "./Mem-imgs/Jaidev Shriram profile.png"
import sriharsha from "./Mem-imgs/sriharsha.jpg"
import ashvin from "./Mem-imgs/ashvin.png"
import nikhil from "./Mem-imgs/nikhil.png"
import sai from "./Mem-imgs/sai.png"
import sid from "./Alumni-imgs/siddharth.jpeg"
import dip from "./Alumni-imgs/Dipankar.jpeg"
import yash from "./Alumni-imgs/yash.png"
import aayush from "./Alumni-imgs/aayush.png"
import ravi from "./Alumni-imgs/gururavi.jpeg"
import ari from "./Alumni-imgs/arihant.jpeg"

function Members() {
  return (
    <div>
        <UniNavbar/>

        <div className='teamcards'>

                {/* Vinoo Alluri */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={vinoo}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Prof. Vinoo Alluri</h3>
                        <p className='profdesign'>Assistant Professor, IIIT-H<br/>Visiting Professor,<br/> University of Jyväskylä</p>
                        <p className='profdesignemail'>vinoo.alluri@iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I am currently an Assistant Professor at the Cognitive Science Lab at IIIT-H.
My research spans the domains of Music Cognition, Music Information Retrieval (MIR) and Neuroscience.
Besides research I also teach courses on Music, Mind and Technology, Behavioral Research: Experimental Design & Statistical Methods.</p>
                    </div>
                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/vinoo-alluri-05930125/'><img src={linkedin}/></a>
                        
                        <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=pQQpWakAAAAJ&sortby=pubdate"><img src={web}/></a>
                    </div>
                </div>




                {/* Lalith mohan */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={lalith}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Lalit Mohan</h3>
                        <p className='profdesign'>PhD student</p>
                        <p className='profdesignemail'>lalit.mo@research.iiit.ac.in</p>

                    </div>
                    <div className='intro'>
                        <p>I am currently exploring the intersection of music, emotion, and well-being, particularly through the lens of environmental sensitivity. With a background in data science, I aim to use both behavioral and brain data to deepen our understanding of the cognitive processes that shape musical experiences and expression across diverse communities.</p>
                    </div>
                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/humanai/'><img src={linkedin}/></a>
                    
                    <a href="http://whysohuman.in"><img src={web}/></a>
                    </div>
                </div>


                {/* S Jayachandran */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={jayachandran}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>S Jayachandran</h3>
                        <p className='profdesign'>PhD student</p>
                        <p className='profdesignemail'>jayachandran.s@research.iiit.ac.in</p>

                    </div>
                    <div className='intro'>
                        <p>S Jayachandran is an Engineer turned Dancer, Teacher, Choreographer and an Art Researcher. His educational qualifications are B.E. (ECE), Dip. in Saiva Siddhanta, B.A. (History), M. A. (History), M. A. (Philosophy), M. A. (Bharatanatyam), NET qualified. He has served as a software engineer in Wipro Ltd. (2000-2005) Later he served as an Asst. Prof. of Dance in Kalakshetra Foundation, Chennai (2005-2014).</p>
                    </div>
                    <div className='links-out'>
                        <a href=''><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>

                {/* Dipansh */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={dipansh}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Dipansh Girdhar</h3>
                        <p className='profdesign'>MS student</p>
                        <p className='profdesignemail'>dipansh.girdhar@research.iiit.ac.in</p>

                    </div>
                    <div className='intro'>
                        <p>A Data Scientist with 4 years of expertise transforming Text, Crypto, and Healthcare data into actionable insights. National marathoner and innate athlete, seamlessly blending analytical acumen with a passion for endurance sports.</p>
                    </div>
                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/dipansh-girdhar/'><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>

                {/* Aditya Raghuvanshi */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={aditya}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Aditya Raghuvanshi</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>aditya.raghuvanshi@research<br/>.iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I am currently in IIIT Hyderabad, studying B.Tech CSE and MS ( by research ) for Computational Linguistics. Currently more focused on Music Information Retrieval, Artificial Intelligence, Natural Language Processing and Data Science in addition to my pursuits of playing the Drums and engaging in trekking. </p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/aditya-raghuvanshi-502210226/'><img src={linkedin}/></a>
                    
                    <a href="https://tanalpha-aditya.github.io"><img src={web}/></a>
                    </div>
                </div>



                {/* Arghya Roy */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={arghya}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Arghya Roy</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>arghya.roy@research.iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>Hey! I'm a CHD student exploring genre classification, guided by Profs. Ashwin Jayanti and Vinoo Alluri. I listen to diverse music, ranging from Radiohead to Kanye West to Lana Del Rey, and thrive on psychologically twisted content. Sports, particularly football, basketball, and F1, are my other obsessions. Catch me on campus shooting hoops or jamming on vocals and bass guitar or keys.</p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/arghyawning/'><img src={linkedin}/></a>
                    
                    <a href="https://www.instagram.com/arghyawning/"><img src={web}/></a>
                    </div>
                </div>


                {/* Atharva Gogate */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={atharva}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Atharva Gogate</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>atharva.gogate@research.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>Hello!
I am a UG2K20 dual degree student pursuing a B.Tech and MS in EC. I love music and everything about it, hence my area of research being what it is I describe myself as generally outgoing. I have had formal training in the piano and am learning the bass. I also play badminton, and dabble in a bit of gaming here and there.</p>
                    </div>

                    <div className='links-out'>
                        <a href='https://linkedin.com/in/atharva-s-gogate'><img src={linkedin}/></a>
                    
                    <a href="https://www.instagram.com/atharvasg_/"><img src={web}/></a>
                    </div>
                </div>



                {/* Jatin Agarwala */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={jatin}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Jatin Agarwala</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>jatin.a@research.iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>Student Researcher, Pianist, Board games enthusiast.
Currently working on music listening and personality. Prior work in Deep Learning and PL Theory.</p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/jatin-agarwala/'><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>



                {/* Pavani Chowdary */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={pavani}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Pavani Chowdary </h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>boddu.pavani@research.iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I'm a dual degree student exploring the relationship between online user music listening habits and depression risk. My research aims to understand how musical preferences can indicate mental health states.</p>
                    </div>
                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/pavani-chowdary/'><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>




                {/* Pratyaksh Gautam */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={pratyaksh}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Pratyaksh Gautam</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>pratyaksh.g@research.iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I'm interested in interpretability of deep neural networks for audio tasks, and auditory processing in the human brain. Outside of work, you can find me playing the guitar, making tea, and flipping samples.</p>
                    </div>
                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/pratyaksh-gautam-25258b228'><img src={linkedin}/></a>
                    
                    <a href="https://hi-im-buggy.github.io/"><img src={web}/></a>
                    </div>
                </div>




                {/* Prince Varshney */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={prince}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Prince Varshney</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>prince.varshney@research.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>A guy who loves to dance and happens to be interested in computer science. My research focus lies in music induced movements. </p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/prince-varshney-5243a11a3'><img src={linkedin}/></a>
                    
                    <a href="https://www.instagram.com/thedanceguy"><img src={web}/></a>
                    </div>
                </div>



                {/* Utsav Shekhar */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={utsav}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Utsav Shekhar</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>utsav.shekhar@research.iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I am dual degree CLD student in my 3rd year, apart from CS and music I am highly interested in sports especially cricket an football.Combining technology, creativity, and athleticism drives my pursuits.</p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/utsav-shekhar-ab7170224/'><img src={linkedin}/></a>
                    
                    <a href="https://www.instagram.com/utsav_shekhar12/"><img src={web}/></a>
                    </div>
                </div>



                {/* Vedansh Agrawal */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={vedansh}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Vedansh Agrawal</h3>
                        <p className='profdesign'>Dual Degree</p>
                        <p className='profdesignemail'>vedansh.agrawal@research.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I am Vedansh, an Undergraduate Student Researcher pursuing Electronics and Communication Engineering from International Institute of Information Technology Hyderabad (IIITH). I am currently working on a Project at IIITH - Automatic Soundtrack Generation for Books Using AI Generative Modeling under supervision of Asst. Prof. Dr. Vinoo Alluri (IIITH). </p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/vedansh-agrawal-ab5377289/'><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>




                {/* Chinmay Pateria */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={chinmay}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Chinmay Pateria</h3>
                        <p className='profdesign'>Undergraduate</p>
                        <p className='profdesignemail'>chinmay.pateria@research.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I'm a student studying Computational linguistics and Music Cognition. I wish to blend language processing with the intricacies of music cognition to explore different subjects.</p>
                    </div>

                    <div className='links-out'>
                        <a href=''><img src={linkedin}/></a>
                    
                    <a href="https://www.instagram.com/chinmay_pateria?igsh=d2VreDdhZzgxOWFo"><img src={web}/></a>
                    </div>
                </div>

                {/* Sriharsha M S S */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={sriharsha}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Sriharsha M S S</h3>
                        <p className='profdesign'>Undergraduate</p>
                        <p className='profdesignemail'>sriharsha.m@students.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I am Sriharsha, a Computer Science student currently in UG-3. My research is part of the Spotify project and involves analysing music listening patterns in the context of depression. Apart from work, I love photography, movies, music, coffee, table tennis and occasionally F1 too :)</p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/sriharsha-medicherla-8b621b25a'><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>

                {/* Saideekshith V */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={sai}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Saideekshith V</h3>
                        <p className='profdesign'>Undergraduate</p>
                        <p className='profdesignemail'>anil.vaddineni@students.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p></p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/saideekshith-vaddineni-1227002a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>

                {/* Ashvin Vinod Kaimal */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={ashvin}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Ashvin Vinod K</h3>
                        <p className='profdesign'>Undergraduate</p>
                        <p className='profdesignemail'>ashvin.kaimal@students.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I'm a researcher interested in the psychology of music and its impact on mental health, as well as an avid musician who writes and publishes my art online. Seeking to blend my passion for science, mental health advocacy, and artistic expression.</p>
                    </div>

                    <div className='links-out'>
                        <a href='https://www.linkedin.com/in/ashvin-v-kaimal'><img src={linkedin}/></a>
                    
                    <a href="https://linktr.ee/AshKaimal"><img src={web}/></a>
                    </div>
                </div>

                {/* Nikhil Raj Sriram */}
                <div className='profileCard'>
                    <div className='prodp'>
                        <img className='dp' src={nikhil}></img>
                    </div>
                    <div className='caption'>
                        <h3 className='profname'>Nikhil Raj Sriram</h3>
                        <p className='profdesign'>Undergraduate</p>
                        <p className='profdesignemail'>nikhil.sriram@research.<br/>iiit.ac.in</p>
                    </div>
                    <div className='intro'>
                        <p>I like creating amazing experiences for people using computer science and music.</p>
                    </div>

                    <div className='links-out'>
                        <a href=''><img src={linkedin}/></a>
                    
                    <a href=""><img src={web}/></a>
                    </div>
                </div>

            </div>



            

            {/* alumni members */}
            <h1 className='alum-head'>Alumni members</h1>
            <div className='alum-mem'>
                    {/* <h1 className='alum-head'>Alumni members</h1> */}

                    {/* list of alumni */}

                    {/* Prince Varshney */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={prince}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Prince Varshney</h3>
                            <p>IIIT-H : B.Tech and M.S by Research in CSE</p>
                            <p>Current : Software Engineer at Google</p>
                        </div>
                    </div>


                    {/* Jaidev Shriram */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={jaidev}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Jaidev Shriram</h3>
                            <p>IIIT-H : 2018-2022 B.Tech in CSE</p>
                            <p>Current : Computer Vision Engineer at Plus</p>
                        </div>
                    </div>

                    {/* Yash Goyal */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={yash}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Yash Goyal</h3>
                            <p>IIIT-H : B.Tech and M.S by Research in CSE</p>
                            <p>Current : Amazon Development Center Ireland Ltd.</p>
                        </div>
                    </div>



                    {/* Dipankar Niranjan */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={dip}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Dipankar Niranjan</h3>
                            <p>IIIT-H : 2014-2019 CSD</p>
                            <p>Current : SMTS at Salesforce in SF</p>
                        </div>
                    </div>



                    {/* Aayush Surana */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={aayush}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Aayush Surana</h3>
                            <p>IIIT-H : 2015 BTech in ECE</p>
                            <p>Current : Software Engineer at Amazon for Alexa</p>
                        </div>
                    </div>





                    {/* Siddharth Duwada */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={sid}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Siddharth Duwada</h3>
                            <p>IIIT-H : Btech and MS in ECE</p>
                            <p>Current : working at Savart </p>
                        </div>
                    </div>





                    {/* Guru Ravi Shankar */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={ravi}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Guru Ravi Shankar</h3>
                            <p>IIIT-H : BTech Computer Science + MSc Computational Linguistics</p>
                            <p>Current : Software Developer @ Salesforce</p>
                        </div>
                    </div>



                    {/* Arihant Jain */}
                    <div className='alumni-cards'>
                        <ReactRoundedImage image={ari}
                            roundedSize="0"
                            imageWidth="150"
                            imageHeight="150"
                        />
                        <div className='alum-info'>
                            <h3 className='alumn-name'>Arihant Jain</h3>
                            <p>IIIT-H : ECD, Dual degree in ECE</p>
                            <p>Current : Software Engineer at Stripe. </p>
                        </div>
                    </div>







                    <div>
                        
                    </div>


                </div>
    </div>
  )
}

export default Members