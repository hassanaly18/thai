"use client";
import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="wh-api">
      {isVisible && (
        <div className="wh-fixed whatsapp-pulse">
          <a target="_blank" href="https://wa.link/fxiw00" rel="noopener noreferrer">
            <button className="wh-ap-btn" />
          </a>
        </div>
      )}
      <style jsx>{`
        button.wh-ap-btn {
          outline: none;
          width: 60px;
          height: 60px;
          border: 0;
          background-color: #2ecc71;
          padding: 0;
          border-radius: 100%;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          cursor: pointer;
          transition: opacity 0.3s, background 0.3s, box-shadow 0.3s;
        }
        button.wh-ap-btn::after {
          content: "";
          background-image: url("//i.imgur.com/cAS6qqn.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 60%;
          width: 100%;
          height: 100%;
          display: block;
          opacity: 1;
        }
        button.wh-ap-btn:hover {
          opacity: 1;
          background-color: #20bf6b;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
        .wh-api {
          position: fixed;
          bottom: 0;
          right: 0;
          z-index: 999;
        }
        .wh-fixed {
          margin-right: 15px;
          margin-bottom: 15px;
        }
        .wh-fixed > a {
          display: block;
          text-decoration: none;
        }
        button.wh-ap-btn::before {
          content: "Chat Now";
          display: block;
          position: absolute;
          margin-left: -130px;
          margin-top: 16px;
          height: 1rem;
          background: #49654e;
          color: #fff;
          font-weight: 400;
          font-size: 1rem;
          border-radius: 3px;
          width: 0;
          opacity: 0;
          padding: 0;
          transition: opacity 0.4s, width 0.4s, padding 0.5s;
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-radius: 30px;
          box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
          line-height:  0.8;
        }
        .wh-fixed > a:hover button.wh-ap-btn::before {
          opacity: 1;
          width: auto;
          padding-top: 7px;
          padding-left: 10px;
          padding-right: 10px;
          width: 100px;
        }
        .whatsapp-pulse {
          width: 60px;
          height: 60px;
          right: 10px;
          bottom: 10px;
          background: #10b418;
          position: fixed;
          text-align: center;
          color: #ffffff;
          cursor: pointer;
          border-radius: 50%;
          z-index: 99;
          display: inline-block;
          line-height: 65px;
        }
        .whatsapp-pulse:before {
          position: absolute;
          content: " ";
          z-index: -1;
          bottom: -15px;
          right: -15px;
          background-color: #10b418;
          width: 90px;
          height: 90px;
          border-radius: 100%;
          animation-fill-mode: both;
          -webkit-animation-fill-mode: both;
          opacity: 0.6;
          -webkit-animation: pulse 1s ease-out;
          animation: pulse 1.8s ease-out;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }
        @-webkit-keyframes pulse {
          0% {
            -webkit-transform: scale(0);
            opacity: 0;
          }
          25% {
            -webkit-transform: scale(0.3);
            opacity: 1;
          }
          50% {
            -webkit-transform: scale(0.6);
            opacity: 0.6;
          }
          75% {
            -webkit-transform: scale(0.9);
            opacity: 0.3;
          }
          100% {
            -webkit-transform: scale(1);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          25% {
            transform: scale(0.3);
            opacity: 1;
          }
          50% {
            transform: scale(0.6);
            opacity: 0.6;
          }
          75% {
            transform: scale(0.9);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;