document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.body.style.backgroundColor = 'white';
    document.getElementById('content').style.display = 'block';

    var audio = document.getElementById('rickrollAudio');
    audio.play();

    var gifLink = "path/to/rickroll.gif"; // Change this to your GIF link
    document.getElementById('rickrollGif').src = gifLink;
});
