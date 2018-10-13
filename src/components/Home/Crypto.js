import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import { config } from './config';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { MARKET_DATA_REQUEST } from '../../actions';

class Crypto extends Component {
    constructor() {
        super();
        this.state = {
            requesting: false
        }
        this.marketData = this.marketData.bind(this);
    }
    componentDidMount() {
        this.marketData();
        
    }
    marketData() {
        const {dispatch} = this.props;
        this.setState({requesting: true});
        return new Promise((resolve, reject) => {
            dispatch({
                type: MARKET_DATA_REQUEST,
                callbackError: (error) => {
                    alert(error.message);
                    console.error(error);
                    this.setState({requesting: false});
                    reject(error);
                },
                callbackSuccess: () => {
                    this.setState({requesting: false});
                    resolve();
                }
            })
        });
    }
    render() {
        const {market} = this.props;
        const {requesting} = this.state;
        if(market && market.length > 0) {
            config.series[0].data = market
            return (
                <div>
                    <ReactHighcharts neverReflow={true} config = {config} ref="chart"></ReactHighcharts>
                    <Button className="mt-1" onClick={this.marketData} color="primary"> Refresh</Button>
                </div>    
            );
        } else {
            if(requesting) {
                return (<div> Please wait .... </div>);
            } else {
                return (<div> No market data found </div>);
            }
        }
    }
};

const mapStateToProps = (state) => {
    return {
        market: state.market.data
    }
}
  
  export default connect(mapStateToProps)(Crypto);