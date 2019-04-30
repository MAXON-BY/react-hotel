import React, {Component} from 'react'

// SearchBar BAR input
class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <i className="search-icon fa fa-search"/>

                <input
                    className="search-input"
                    type="text"
                    placeholder="Поиск хаты для пати...(по описанию и названию)"
                    onChange={this.props.onSearch}
                />
            </div>
        );
    }
}

export default SearchBar