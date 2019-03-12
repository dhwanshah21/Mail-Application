import React, {Component} from 'react';
import './DetailView.css';


class DetailView extends Component {
    render() {
        const { currentEmail } = this.props;
        return (
            <div >
                <table className="DetailView">
                    <tbody>
                        <tr>
                            <td>To :  {currentEmail.to}</td>
                        </tr>
            
                        <tr>
                            <td>Subject : {currentEmail.subject}</td>
                        </tr>
                    
                        <tr>
                            <td>Text : {currentEmail.text}</td> 
                        </tr>
                    </tbody>
                </table>        
                <button> PREV </button>
                <button> NEXT </button>
            </div>
            
        );
    }
}

export default DetailView;