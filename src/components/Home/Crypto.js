/* global axios */
import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import {config} from './config';
import {Button } from 'reactstrap';
class Crypto extends Component {
    constructor() {
        super();
        this.state = {
            marketData: []
        }
        this.marketData = this.marketData.bind(this);
    }
    componentDidMount() {
        // let chart = this.refs.chart.getChart();
        console.log(this.refs)
        this.marketData();
        
    }
    marketData() {
        axios.get('https://api.cryptonator.com/api/full/btc-usd')
            .then(({data}) => {
                if(data && data.ticker.markets.length > 0) {
                    this.setState({marketData: data.ticker.markets.map(x => ({market: x.market, y: Number(x.price)}))});
                }
            })
            .catch(error => {
                alert(error.message);
                console.error(error);
            })
    }
    render() {
        const {marketData} = this.state;
        if(marketData.length > 0) {
            config.series[0].data = marketData
            return (
                <div>
                    <ReactHighcharts neverReflow={true} config = {config} ref="chart"></ReactHighcharts>
                    <Button className="mt-1" onClick={this.marketData} color="primary"> Refresh</Button>
                </div>    
            );
        } else {
            return (<div> Please wait .... </div>);
        }
        
    }
};

export default Crypto;