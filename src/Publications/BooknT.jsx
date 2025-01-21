import React from 'react'
import UniNavbar from '../UniNavbar'
import PubNav from './Pub-navbar/PubNav'
import "./BooknT.css"
import { Link, useLocation } from "react-router-dom";

function BooknT() {
  return (
    <div>
         <UniNavbar/>
         <PubNav/>
         <div>
             <h1 className='mainhead-pub'>Books & Theses</h1>
            <p className='bntp'>Deshpande, G., Alluri, V., Ingalhalikar, M. (2022). It Is a Matter of Matters: Deciphering Structural and Functional Brain Connectivity. Frontiers in Neuroscience, 2022, doi: 10.3389/fnins.2022.951001<br/><br/>
            Brattico, E & Alluri, V (2021) Music in all its beauty: Adopting the naturalistic paradigm to uncover brain processes during the aesthetic musical experience. In  Chatterjee, A., & Cardilo, E. (Eds.). (2021). Brain, Beauty, and Art: Essays Bringing Neuroaesthetics Into Focus. Oxford University Press.<br/><br/>
            Alluri V, Kadiri, S (2019) Neural Correlates of Timbre Processing. In K. Siedenburg, et al. (Eds.), Timbre: Acoustics, Perception, and Cognition, Springer Handbook of Auditory Research 69.
            </p>


            <h1 className='mainhead-pub'>Master's Theses</h1>
            <p className='bntp'>
                <a 
                className='mlink' href='https://web.archive.org/web/20231003144735/https://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/1251'>Emotion Unmasked: A Transformer-based Analysis of Lyrics for Improved Emotion Recognition, R Guru Ravi Shanker 2018114011, June 2023. Report no: IIIT/TH/2023/66 , (pdf)</a>
            <br/><br/>



            <a 
            className='mlink'
href='https://web.archive.org/web/20230323092525/https://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/1133'>
                Online Music Consumption Characterizing Depression Risk, Aayush Surana, June 2022.
Report no: IIIT/TH/2022/91 , (pdf)
            </a>
            <br/><br/>


            <a 
            className='mlink'
href=''>
                Modelling the Implicit Music Representation in the Human Brain with Deep Neural Networks / Ravinder Singh. - 20163052 MS-CSE
            </a>
            <br/><br/>



            <a 
            className='mlink'
href='https://web.archive.org/web/20220928212618/https://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/980'>
                My music and I: Decoding Individual Differences via Musical Behaviour, Yudhik Agrawal, June 2021. Report no: IIIT/TH/2021/54 (pdf)
            </a>
            <br/><br/>


            <a 
            className='mlink'
href='https://web.archive.org/web/20220928212736/https://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/995'>
                Identifying Unique Brain Signatures Among Individuals Using Supervised Machine Learning, Rohan Gandhi, June 2021. Report no: IIIT/TH/2021/69 (pdf)
            </a>
            <br/><br/>



            <a 
            className='mlink'
href='https://web.archive.org/web/20230323075128/https://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/907'>
                Examining effects of individual differences in empathy on behavioural and neural processing of music, Vishnu Moorthigari, November 2020. Report no: IIIT/TH/2020/100 (pdf)
            </a>
            <br/><br/>


            <a 
            className='mlink'
href='https://web.archive.org/web/20230323075040/https://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/825'>
                Towards identifying expertise engendered differences in the musical brain - methods and findings., Dipankar Niranjan, April 2020. Report no: IIIT/TH/2020/18 (pdf)
            </a>
            <br/><br/>



            <a 
            className='mlink'
href=''>
                You are What (and How) you Listen to / Rajat Agarwal. - 20163060: MS-CSE.
            </a>
            <br/><br/>


            <a 
            className='mlink'
href=''>
                Investigating Structural and Functional Pathology in Cocaine use Disorder / Duvvada Sai Siddharth. - 2018122006: MS-ECE.

            </a>
            <br/><br/>



            <a 
            className='mlink'
href=''>
                Decoding Gender and Musical Expertise From Brain Responses to Music: a comparison of functional connectivity measures / Arihant Jain. - 201431001: MS-ECE.
            </a>
            <br/><br/>




            <a 
            className='mlink'
href=''>
                Moving together: Interpersonal Coordination and Individual Identification in Dyadic Dance / Prince Varshney. - 2020121012: MS-CSE.
            </a>
            <br/><br/>




            <a 
            className='mlink'
href=''>
                Emotion Unmasked: A Transformer-based Analysis of Lyrics for Improved Emotion Recognition. - 2018114011: MS-CL.
            </a>
            <br/><br/>



            <a 
            className='mlink'
href=''>
                Personality and the Interplay between Emotion and Genre in Music Preferences / Yash Goyal. - 201502181: MS-CSE.
            </a>
            <br/><br/>





            </p>
            <div>
                <h1 className='mainhead-pub'>PhD Theses</h1>
                <p className='bntp'>
                    <a 
                    className='mlink' href='https://web.archive.org/web/20230323090750/https://web2py.iiit.ac.in/research_centres/publications/view_publication/phdthesis/132'>Co-Advised: Fibre, Fabricator and Fabric: A Study of Form, Space and Time in Arts, Banatanwi Dasmahapatra, July 2020. Report no: IIIT/TH/2020/70 (pdf)</a>
                <br/><br/>
                </p>
            </div>
            
            
             
         </div>
    </div>
  )
}

export default BooknT