// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
