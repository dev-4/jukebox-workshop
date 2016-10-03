document.addEventListener("DOMContentLoaded",function(){
  music = new Jukebox( document.getElementById("musicbox"), "mp3" );
  music.addSong( 
    "carefree", "carefree.mp3").addSong(
    "fretless", "fretless.mp3").addSong(
    "funkychunk", "funkychunk.mp3").addSong(
    "hitman", "hitman.mp3").addSong(
    "hyperfun", "hyperfun.mp3").addSong(
    "killers", "killers.mp3").addSong(
    "riley", "riley.mp3");

  Array.from(document.getElementsByClassName("song")).forEach(
    function(s) { 
      s.addEventListener("click",function(event){

      console.log(Array.from(event.target.classList).indexOf("current"));

      if( Array.from(event.target.classList).indexOf("current") > -1 ) return;

      console.log( event.target.getAttribute("data-file") );

      document.getElementById("musicbox").src = "music/" + event.target.getAttribute("data-file");
      Array.from(document.getElementsByClassName("current")).forEach(function(el){
        el.classList.remove("current");
      });
    });
  });
});

function Song( song, file ) {
  this.song = song;
  this.file = file;
  return this;
}
var music;

function Jukebox( element, path ) {
  this.element = element;
  this.path = path + "/";
  this.songs = [];
  this.currentSong = 0;
  this.addSong = function() {
    var that = Object.create(Song.prototype);
    this.songs.push( Song.apply(that, arguments) );
    return this;
  }
  this.play = function() {
    this.element.play();
    return this;
  }
  this.pause = function() {
    this.element.pause();
    return this;
  }
  this.next = function() {
    this.currentSong = (this.currentSong+1) % this.songs.length;
    this.element.src = this.path + this.songs[this.currentSong].file;
  }
  this.prev = function() {
    this.currentSong = (this.currentSong+1+this.songs.length) % this.songs.length;
    this.element.src = this.path + this.songs[this.currentSong].file;
  }
  return this;
}









