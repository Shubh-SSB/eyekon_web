import { CircleCheckBigIcon } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const Download = () => {
    return (
        <StyledWrapper>
            <div className="container">
                <label className="label">
                    <input type="checkbox" className="input" />
                    <span className="circle">
                        <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" d="M12 19V5m0 14-4-4m4 4 4-4"></path>
                        </svg>
                        <div className="square"></div>
                    </span>
                    <p className="title">Download</p>
                    <p className="title">
                        <svg className="check-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle className="check-circle" cx="10" cy="10" r="9" />
                            <path className="check-path" d="M6.5 10.2l2.5 2.5 4.5-5" />
                        </svg>
                        Started
                    </p>
                </label>
            </div>
        </StyledWrapper>
    );
}

// stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"


const StyledWrapper = styled.div`
.container {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
//   padding: 10px px;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
}
.label {
  background-color: transparent;
  border: 2px solid rgb(91, 91, 240);
  display: flex;
  align-items: center;
  border-radius: 50px;
  width: 160px;
  cursor: pointer;
  transition: all 0.4s ease;
  padding: 5px;
  position: relative;
}
.label::before {
  content: "";
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background-color: #fff;
  width: 8px; height: 8px;
  transition: all 0.4s ease;
  border-radius: 100%;
  margin: auto;
  opacity: 0;
  visibility: hidden;
}
.label .input { display: none; }

.label .title {
  font-size: 17px;
  color: #fff;
  transition: all 0.4s ease;
  position: absolute;
  right: 18px;
  bottom: 14px;
  text-align: center;
}

/* "Started" label — centered in the full button */
.label .title:last-child {
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  left: 0;
  right: 0;
  bottom: auto;
  top: 50%;
  transform: translateY(-50%);
}

.label .circle {
  height: 45px; width: 45px;
  border-radius: 50%;
  background-color: rgb(91, 91, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
  position: relative;
  box-shadow: 0 0 0 0 rgb(255,255,255);
  overflow: hidden;
  flex-shrink: 0;
}
.label .circle .icon {
  color: #fff;
  width: 30px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
}
.label .circle .square {
  aspect-ratio: 1;
  width: 15px;
  border-radius: 2px;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
}
.label .circle::before {
  content: "";
  position: absolute;
  left: 0; top: 0;
  background-color: #3333a8;
  width: 100%; height: 0;
  transition: all 0.4s ease;
}

.check-icon {
  width: 22px; height: 22px;
  flex-shrink: 0;
  opacity: 0;
}
.check-icon .check-circle {
  fill: none;
  stroke: rgb(35, 174, 35);
  stroke-width: 2;
}
.check-icon .check-path {
  fill: none;
  stroke: rgb(35, 174, 35);
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
}

/* --- checked states (unchanged) --- */
.label:has(.input:checked) {
  width: 57px;
  animation: installed 0.4s ease 3.5s forwards;
}
.label:has(.input:checked)::before {
  animation: rotate 3s ease-in-out 0.4s forwards;
}
.label .input:checked + .circle {
  animation: pulse 1s forwards, circleDelete 0.2s ease 3.5s forwards;
  rotate: 180deg;
}
.label .input:checked + .circle::before {
  animation: installing 3s ease-in-out forwards;
}
.label .input:checked + .circle .icon    { opacity: 0; visibility: hidden; }
.label .input:checked ~ .circle .square  { opacity: 1; visibility: visible; }
.label .input:checked ~ .title           { opacity: 0; visibility: hidden; }

.label .input:checked ~ .title:last-child {
  animation: showStartedMessage 0.4s ease 3.5s forwards;
}
.label .input:checked ~ .title:last-child .check-icon {
  animation: showCheck 0.5s ease 3.7s forwards;
}
.label .input:checked ~ .title:last-child .check-icon .check-path {
  animation: drawCheck 0.4s ease 3.9s forwards;
}

/* --- keyframes --- */
@keyframes pulse {
  0%   { scale: 0.95; box-shadow: 0 0 0 0   rgba(255,255,255,0.7); }
  70%  { scale: 1;    box-shadow: 0 0 0 16px rgba(255,255,255,0);   }
  100% { scale: 0.95; box-shadow: 0 0 0 0   rgba(255,255,255,0);   }
}
@keyframes installing {
  from { height: 0; }
  to   { height: 100%; }
}
@keyframes rotate {
  0%   { transform: rotate(-90deg) translate(27px) rotate(0);       opacity: 1; visibility: visible; }
  99%  { transform: rotate(270deg) translate(27px) rotate(270deg);  opacity: 1; visibility: visible; }
  100% { opacity: 0; visibility: hidden; }
}
@keyframes installed {
  100% { width: 160px; border-color: rgb(35, 174, 35); }
}
@keyframes circleDelete {
  100% { opacity: 0; visibility: hidden; }
}
@keyframes showStartedMessage {
  100% { opacity: 1; visibility: visible; }
}
@keyframes showCheck {
  0%   { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}
  `
export default Download;
