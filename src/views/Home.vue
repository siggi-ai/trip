<template>
    <video autoplay muted loop id="myVideo">
      <source src="..\..\video\v1.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  
    <button class="content">
      <router-link to="first">trip</router-link>
    </button>
  </template>
  
  <style>
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Arial;
    font-size: 17px;
  }
  
  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  
  .content {
    position: fixed;
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
    font-size: 6em;
    margin: 0 auto;
    text-align: center;
    margin-top: 2em;
  }
  </style>