import React, {Component} from 'react';
import axios from 'axios';
import './Mails.css'
import { withRouter} from 'react-router-dom';

class Mails extends Component {
    constructor() {
        super()
        this.state = {
            mails : []
        }      
    }
    
    componentDidMount() {
        const url = 'http://5c5a21f9af3ff700140de477.mockapi.io/api/email';
        axios.get(url)
            .then((networkResponse) => {
                this.setState( () => {
                    return {
                        mails : networkResponse.data
                    }
                })
            })
            .catch (() => {
                console.log("This is not working!");
            });
    }

    handleClick (currentEmail) {
        const  { updateEmail } = this.props;
        this.props.history.push('/detail');
        updateEmail(currentEmail);
    }


    render() {
        const { mails } = this.state;
        
        let mailData = mails.map((data) => {
            return (
                <tr className="row" key={data.id} onClick = {() => this.handleClick(data)} >
                
                <td>
                    {data.to}
                </td>
                
                <td>
                    {data.subject}
                </td>
                </tr> 
            );            
        });

        return (
            <div>
                <table className='mailTable'>
                    <tbody>
                        {mailData}
                    </tbody>
                </table> 
                <button className='delete'> DELETE </button>
            </div>
        );
    }
}

export default withRouter(Mails);