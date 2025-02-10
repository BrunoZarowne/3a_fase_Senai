import Avisos from './Avisos'
import './Body.css'
import Demo1 from './Demo1'
import Demo2 from './Demo2'

function Body() {
  return (
    <div className='containerBody'>
      <p>Body</p>
      <Demo1 />
      <Avisos />
      <Demo2 />
    </div>
  )
}

export default Body
