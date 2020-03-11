import React from 'react';
import './FormStatefull.css';

class FormStatefull extends React.Component
{
    render(){
        return(
            <div className='container'>
            <p className='txt-header'>Form Login</p>
            <div className='box'>
                <p className='txt-1'>Tugas Pertemuan<br></br> ketiga</p>
                <center>
                    <form method='get'>
                        <table cellpadding='8'>
                            <tr>
                                <th><span className='txt-form'>Username</span></th>
                                <td><input type='text' name='name' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;masukkan username'></input></td>
                            </tr>
                            <tr>
                                <th><span className='txt-form'>Password</span></th>
                                <td><input type='text' name='pass' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Masukkan Password Anda'></input></td>
                            </tr>
                            <tr>
                                <td colspan='2'><input className='btn-submit' type='submit' value='Login'></input></td>
                            </tr>
                            <tr>
                                <td colspan='2'><div className='rmbr-div'><input type='checkbox' checked></input><span className='txt-form'> Remember Me</span></div></td>
                            </tr>
                            <tr>
                                <td colspan='2' align='center'><br></br><input className='btn-cancel' type='submit' value='Cancel'></input></td>
                            </tr>
                        </table>
                    </form>
                </center>
            </div>
        </div>
        );
    }
}

export default FormStatefull;