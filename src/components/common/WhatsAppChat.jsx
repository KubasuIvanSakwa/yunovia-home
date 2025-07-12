"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "254117888890"; // WhatsApp number without + and spaces
    const defaultMessage = "Hello! I'm interested in your services. Can you help me?";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* WhatsApp Chat Button */}
            <div className="whatsapp-chat-widget">
                <div className={`whatsapp-chat-popup ${isOpen ? 'active' : ''}`}>
                    <div className="chat-header">
                        <div className="chat-header-content">
                            <div className="avatar">
                                <img src="/assets/img/header-logo.svg" alt="Yunovia Group" />
                            </div>
                            <div className="chat-info">
                                <h4>Yunovia Group</h4>
                                <p>Typically replies instantly</p>
                            </div>
                        </div>
                        <button 
                            className="close-chat"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                    <div className="chat-body">
                        <div className="chat-message">
                            <p>Hi there! 👋</p>
                            <p>How can we help you today?</p>
                        </div>
                    </div>
                    <div className="chat-footer">
                        <button 
                            className="start-chat-btn"
                            onClick={handleWhatsAppClick}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                            </svg>
                            Start Chat
                        </button>
                    </div>
                </div>

                <button 
                    className="whatsapp-float-btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                    </svg>
                    <span className="notification-badge">1</span>
                </button>
            </div>

            <style jsx>{`
                .whatsapp-chat-widget {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                }

                .whatsapp-float-btn {
                    width: 60px;
                    height: 60px;
                    background: #25D366;
                    border-radius: 50%;
                    border: none;
                    color: white;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    position: relative;
                    animation: pulse 2s infinite;
                }

                .whatsapp-float-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
                }

                .notification-badge {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    background: #ff4444;
                    color: white;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                }

                .whatsapp-chat-popup {
                    position: absolute;
                    bottom: 80px;
                    right: 0;
                    width: 320px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                }

                .whatsapp-chat-popup.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .chat-header {
                    background: #25D366;
                    color: white;
                    padding: 16px;
                    border-radius: 12px 12px 0 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .chat-header-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .avatar img {
                    width: 30px;
                    height: auto;
                }

                .chat-info h4 {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                }

                .chat-info p {
                    margin: 0;
                    font-size: 12px;
                    opacity: 0.9;
                }

                .close-chat {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    padding: 0;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .chat-body {
                    padding: 20px;
                }

                .chat-message {
                    background: #f0f0f0;
                    padding: 12px 16px;
                    border-radius: 18px 18px 18px 4px;
                    margin-bottom: 12px;
                }

                .chat-message p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.4;
                }

                .chat-message p:not(:last-child) {
                    margin-bottom: 8px;
                }

                .chat-footer {
                    padding: 0 20px 20px;
                }

                .start-chat-btn {
                    width: 100%;
                    background: #25D366;
                    color: white;
                    border: none;
                    padding: 12px 16px;
                    border-radius: 25px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: background 0.3s ease;
                }

                .start-chat-btn:hover {
                    background: #128C7E;
                }

                @keyframes pulse {
                    0% {
                        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    }
                    50% {
                        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.1);
                    }
                    100% {
                        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    }
                }

                @media (max-width: 768px) {
                    .whatsapp-chat-widget {
                        bottom: 15px;
                        right: 15px;
                    }

                    .whatsapp-chat-popup {
                        width: 280px;
                        bottom: 70px;
                    }

                    .whatsapp-float-btn {
                        width: 50px;
                        height: 50px;
                    }
                }
            `}</style>
        </>
    );
};

export default WhatsAppChat;
