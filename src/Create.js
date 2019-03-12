import React, {Component} from 'react';
import './Create.css'

class Create extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr className='mailTo'>
                            <td>To : <input className="To"/> <br></br></td>
                        </tr>
                        
                        <tr className='mailSub'>
                            <td>Subject : <input className="Subject"/> <br></br></td>
                        </tr>
                
                        <tr className='message'>
                            <td><input type="text" placeholder = "Type your message..." className="Text"/></td>
                        </tr>
                    </tbody>
                </table>
                <button className="Send"> SEND </button>
            </div>
        );
    }
}

export default Create;