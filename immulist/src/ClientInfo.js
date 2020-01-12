import React from 'react';
import Top_nav from './Top_nav'
import { Link} from 'react-router-dom';

class ClientInfo extends React.Component {
    render() {
        return (
            <div>
                <Link to="/Top_nav">Dashboard</Link>
            </div>
        );
    }
}

export default ClientInfo;