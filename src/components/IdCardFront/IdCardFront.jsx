import React from 'react';
import './IdCardFront.css';
import Image from "../Image/Image";
import IdPhoto from '../IdPhoto/IdPhoto';

const IdCardFront = (props) => {
    return <div className="wrapper">
            <div className="line line-one">

            </div>
            <div className="line line-two">

            </div>
            <div className="line line-three">

            </div>
            <div className="line line-four">

            </div>
            <div className="line2 line2-one">

            </div>
            <div className="line2 line2-two">

            </div>
            <div className="line2 line2-three">

            </div>
            <div className="line2 line2-four">

            </div>
            <div  className="top-part">
                <div>
                    <Image src={"../image/cg.png"}/>
                </div>
                <div>
                    <p>Crna Gora</p>
                    <span>Montenegro</span>
                </div>
                <div className="pl-35">
                    <p>Licna karta</p>
                    <span>Indetity card</span>
                </div>
                <div className="top-right">
                    <img src="../image/cg2.png" alt=""></img>
                    <p>MNE</p>
                </div>
                <p className="text uppercase">{props.city}</p>
            </div>
            <div className="bottom-part">
                <svg width="400" height="100">
                    <text fill="white" fill-opacity="0.1" font-size="80" x="200" y="70" text-anchor="middle" stroke="#E3C5A0" stroke-opacity="0.1" >CG</text>
                </svg>
                <span className="circle">
                    <img src="image/cg.png" alt=""></img>
                    <p className="mne-one">MNE</p>
                    <p className="mne-two">MNE</p>
                    <p className="mne-three">MNE</p>
                    <p className="mne-four">MNE</p>

                </span>
                <div className="img-blured">
                    <IdPhoto src={props.idPhoto}/>
                </div>
                <div>
                    <IdPhoto src={props.idPhoto}/>
                </div>
                <div>
                    <div>
                        <span>Prezime/Surname</span>
                        <p className="uppercase">{props.surname}</p>
                    </div>
                    <div className="-mt-15px">
                        <span>Ime/Given names</span>
                        <p className="uppercase">{props.name}</p>
                    </div>
                    <div>
                        <div className="mid-part">
                            <div>
                                <span>Pol</span>
                                <span className="block">Sex</span>
                                <p>{props.gender}</p>
                            </div>
                            <div className="ml-10">
                                <span>Drzavljanstvo</span>
                                <span className="block">Nationality</span>
                                <p>{props.citizenship}</p>
                            </div>
                            <div className="ml-25">
                                <span>Datum rodjenja</span>
                                <span className="block">Date of birth</span>
                                <p>{props.birthDate}</p>
                                <span>Potpis/Signature</span>
                                <p className="signature">{props.signature}</p>
                            </div>
                            <div className="ml-25">
                                <span>Broj licne karte</span>
                                <span className="block">ID serial number</span>
                                <p>{props.idNumber}</p>
                                <span className="-mt-15px">Datum vazenja</span>
                                <span className="block">Date of expiry</span>
                                <p>{props.expire}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default IdCardFront;