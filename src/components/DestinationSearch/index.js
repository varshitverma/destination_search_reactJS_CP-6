// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInputValue: ''}

  searchItem = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {searchInputValue} = this.state
    const {destinationsList} = this.props
    const searchDestinationList = destinationsList.filter(eachDestination =>
      eachDestination.name
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search-box"
              onChange={this.searchItem}
              value={searchInputValue}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="list-container">
            {searchDestinationList.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
