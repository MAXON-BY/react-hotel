import React, {Component} from 'react';
import HOTELS from './State/data-rooms'
import SearchBar from "./Components/SearchBar/SearchBar";
import HotelCard from "./Components/HotelCard/HotelCard";

class HotelApp extends Component {
    constructor(props) {
        super(props);
        this.state = {displayedHotels: HOTELS};
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        const searchQuery = e.target.value.toLowerCase();

        const displayedHotels = HOTELS.filter(hotel => {
            const searchString = hotel.name.toLowerCase() + hotel.description.toLowerCase();

            return searchString.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedHotels: displayedHotels
        });
    }

    render() {
        const hotelCards = this.state.displayedHotels.map(hotel =>
            <HotelCard
                key={hotel.id}
                id={hotel.id}
                name={hotel.name}
                image={hotel.image}
                description={hotel.description}
                price={hotel.price}
                status={hotel.status}
            />
        );

        return (
            <div className="app">
                <div className="header">НеАгент.бай</div>

                <SearchBar onSearch={this.handleSearch}/>

                <div className="hotels-list">
                    {hotelCards}
                </div>
            </div>
        );
    }
}

export default HotelApp;
