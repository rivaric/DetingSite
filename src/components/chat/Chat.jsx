import { useState } from 'react';
import createChatIcon from './img/Chat-Shape.svg'
import searchIcon from './img/Chat-Auto Suggest Box-Text Field Primitives-Search.svg';
import iconChat from './img/Chat-Side Nav-Parts-Group 3.svg';
import designers from './img/Chat-Side Nav-Parts-Designers.svg'
import codyFisher from './img/Chat-Side Nav-Parts-Rectangle 4.svg';
import bessieCooper from './img/Chat-Side Nav-Parts-Bessie Cooper.svg';
import travelAssistant from './img/Chat-Side Nav-Parts-Travel assistant.svg'
import shape from './img/Chat-Side Nav-Parts-Shape.svg'
import Nasty from './img/1617684967_1-p-nastya-kamenskikh-1.jpg'
import Staple from './img/paperclips_rk3m1ash2cpw.svg'
import Plane from './img/paper_plane_nqywqp2i7xu3.svg'
import './Chat.scss';

export default function Chat() {

    const [isActiveChat, setIsActiveChat] = useState(false);

    return (
        <div className="chat">
            <div className="header">
                <div className="burger" onClick={() => setIsActiveChat(!isActiveChat)}>
                    <div className="burger__line"></div>
                    <div className="burger__line"></div>
                    <div className="burger__line"></div>
                </div>
                
                <input type="text" name='search' className='search' placeholder='Search'/>
                
                <div className='search__button'>
                    <img src={searchIcon} alt="" className='search__icon'/>
                </div>
                <div className='create_chat'>
                    <img src={createChatIcon} alt="" className='crate_chat'/>
                </div>
            </div>
            <ul className="nav">
                <li className='li-active'>All chat</li>
                <li>Projects</li>
                <li>important</li>
            </ul>
            <div style = {isActiveChat ? {display: 'flex'} : {display: 'block'}}>
                <div className={isActiveChat ? "chats chats-active" : 'chats'}>
                    <div className="chat-item">
                        <img src={iconChat} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        Save message
                                    </div>
                                    <div className="time">
                                        9:54 PM
                                    </div>
                                </div>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div className="last-message">
                                    exampledocument.pdf
                                </div>
                                <img src={shape} alt="" className='shape'/>
                            </div>
                        </div>
                    </div>

                    <div className="chat-item">
                        <img src={designers} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        Designers
                                    </div>
                                    <div className="time">
                                        4:27 PM
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                You: How are you?
                            </div>
                        </div>
                    </div>

                    <div className="chat-item">
                        <img src={codyFisher} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        Albert Flores
                                    </div>
                                    <div className="time">
                                        Tue
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                Video
                            </div>
                        </div>
                    </div>


                    <div className="chat-item">
                        <img src={bessieCooper} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        Bessie Cooper
                                    </div>
                                    <div className="time">
                                        Tue
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                Haha that's terrifying
                            </div>
                        </div>
                    </div>

                    <div className="chat-item">
                        <img src={travelAssistant} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        Travel assistant
                                    </div>
                                    <div className="time">
                                        Mon
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                You:Photo
                            </div>
                        </div>
                    </div>

                    <div className="chat-item">
                        <img src={iconChat} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        Ronald Richards
                                    </div>
                                    <div className="time">
                                        Sun
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                Waiting to come online
                            </div>
                        </div>
                    </div>

                    <div className="chat-item">
                        <img src={iconChat} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        The best channel
                                    </div>
                                    <div className="time">
                                        Sat
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                Have you ever wondering how it feel...
                            </div>
                        </div>
                    </div>

                    <div className="chat-item">
                        <img src={iconChat} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        The best channel
                                    </div>
                                    <div className="time">
                                        Sat
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                Have you ever wondering how it feel...
                            </div>
                        </div>
                    </div>

                    <div className="chat-item">
                        <img src={iconChat} alt="" className="chat__img" />
                        <div className='wrapper'>
                            <div className="chat__descr">
                                <div className="chat__nameAndTime">
                                    <div className="chat__name">
                                        The best channel
                                    </div>
                                    <div className="time">
                                        Sat
                                    </div>
                                </div>
                            </div>
                            <div className="last-message">
                                Have you ever wondering how it feel...
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isActiveChat ? 
                    <div className="messages">
                        <div className="chat-item">
                            <img src={Nasty} alt="" className="chat__img" />
                            <div className="chat__name">
                                Анастасия
                            </div>
                        </div>

                        <div className="messages__space">
                            <div className="message__wrapper">
                                <div className="message__left">
                                    <div className="message__text">
                                        Привет
                                    </div>
                                    <div className="message__time">
                                        9:45
                                    </div>
                                </div>
                            </div>
                            <div className="message__wrapper__rigth">
                                <div className="message__rigth">
                                    <div className="message__text">
                                        Привет, твоей маме зять не нужен ?
                                    </div>
                                    <div className="message__time">
                                        9:45
                                    </div>
                                </div>
                            </div>
                            <div className="message__wrapper">
                                <div className="message__left">
                                    <div className="message__text">
                                        Не думала что такие бывают... пока
                                    </div>
                                    <div className="message__time">
                                        9:45
                                    </div>
                                </div>
                            </div>
                            
                        </div>


                        <div className="messages__input">
                            <img src={Staple} alt="" />
                            <input type="text" placeholder='Write a message...'/>
                            <img src={Plane} alt="" />
                        </div>
                    </div> 
                    :
                    undefined
                }
            </div>
        </div>
    )
}