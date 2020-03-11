import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <section class="home_banner_area">
                    <div class="container box_1620">
                        <div class="banner_inner d-flex align-items-center">
                            <div class="banner_content">
                                <div class="media">
                                    <div class="d-flex">
                                        <img src={require('./a.JPG')} width="300" alt=""></img>
							</div>
                                        <div class="media-body">
                                            <div class="personal_text">
                                                <h6>Hello Everybody, i am</h6>
                                                <h3>Nurhidayat Aldila</h3>
                                                <h4>Mahasiswa Politeknik Negeri Malang</h4>
                                                <p></p>
                                                <ul class="list basic_info">
                                                    <li><a href="#"><i class="lnr lnr-calendar-full"></i> 21 Maret 1996</a></li>
                                                    <li><a href="#"><i class="lnr lnr-phone-handset"></i> +62821 3789 9966</a></li>
                                                    <li><a href="#"><i class="lnr lnr-envelope"></i> nurhidayat.aldila@gmail.com</a></li>
                                                    <li><a href="#"><i class="lnr lnr-home"></i> Perum. Bumi Mangliawan Kavling 6</a></li>
                                                </ul>
                                                <ul class="list personal_social">
                                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                );
    }
}

export default Content;