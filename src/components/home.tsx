import { Fragment } from "react";
import  stotra  from '../Images/stotra.jpg'
import saptarishi from '../Images/saptarishi.jpg'

const Home = () => {
    return <Fragment>
        <div className="mf-mainDiv">
            <img src={saptarishi} alt="Saptarishi" className="saptarishi"/>
                  <img src={stotra} alt="Stotra" className="stotra" />
                  <h2>We believe in our ancient Indian culture and values. We try to follow our vedic philosophy and 
                      practices which make us self sufficient and strong </h2>
            </div>
   </Fragment>
        
}
export default Home;                                                                 