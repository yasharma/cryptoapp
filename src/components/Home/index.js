import React, {Component} from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Crypto from './Crypto';
class Home extends Component {
    render() {
        return (
            <div className="container mt-5">
                <Card className="text-center">
                    <CardHeader>BTC Market Data</CardHeader>
                    <CardBody>
                        <Crypto />
                    </CardBody>    
                </Card>    
            </div>
        )
    }
};

export default Home;