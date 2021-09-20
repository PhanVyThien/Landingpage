import Newproducts from './Newproducts'
import OnsaleProducts from './OnsaleProducts'
import Footer from './Footer'
import BackgroundStory from './BackgroundStory'
import Mainmenu from './Mainmenu'
export default function LandingPage ({data}){

  return(
    <div>
      <Mainmenu/>
      <BackgroundStory/>
      <Newproducts data={data[0]}/>
      <OnsaleProducts data={data[1]}/>
      <Footer/>
    </div>
)
}



