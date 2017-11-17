import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Channel from './Channel';
import { fetchChannels } from '../../actions/channelActions';

class ChannelList extends Component {

    componentDidMount() {
        this.props.fetchChannels();
    }

    render() {
        return(
            <div className='col-md-4'>
                <div className='text-center'>
                    <Link to='/channels/new' className='btn-floating btn-sm blue'>
                        <i className='material-icons'>add</i>
                    </Link>
                </div>
                {this._renderChannels()}
            </div>
        );
    }

    _renderChannels() {
        return this.props.channels.map(channel => {
            return <Channel key={channel.name} {...channel} />;
        });
    }
}

function mapStateToProps({channels}) {
    return {
        channels
    };
}

export default connect(mapStateToProps, {fetchChannels})(ChannelList);