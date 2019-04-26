/*****************************************************
Feed-A-Shark CF201 Final Project
*******************************************************/
'use-strict';

var myAudio = document.getElementById('myAudio');

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}
