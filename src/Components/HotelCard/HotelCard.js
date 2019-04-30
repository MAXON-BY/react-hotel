import React, {Component} from 'react'

const MAX_DESCRIPTION_LENGTH = 250;

class HotelCard extends Component {
    constructor(props){
        super(props)
        this.state = {show: false}
        this.toggleDiv=this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const {show} = this.state;
        this.setState({show : !show})
    };

    render() {
        const {
            name,
            image,
            description,
            price,
            status
        } = this.props;

        return (
            <div className="hotel-card" onClick={this.toggleDiv}>
                <img className="hotel-image" src={image} alt={name}/>

                <div className="hotel-body">
                    <h3 className="hotel-title">
                        {name}
                    </h3>
                    <span className="hotel-price">{price}$ / месяц</span>
                </div>

                <div className="hotel-book">
                    {this.state.show &&
                    <div>
                        <p className="hotel-description">
                            {
                                description.length > MAX_DESCRIPTION_LENGTH
                                    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
                                    : description
                            }
                        </p>
                        {
                            status === true
                                ?<p className="hotel-free">Свободно</p>
                                :<p className="hotel-busy">Комната уже занята</p>
                        }
                    </div>
                    }

                </div>
            </div>
        );
    }
}

export default HotelCard