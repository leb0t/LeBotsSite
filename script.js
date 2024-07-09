document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.body.style.backgroundColor = 'white';
    document.getElementById('content').style.display = 'flex';

    var audio = document.getElementById('rickrollAudio');
    audio.play();

    var gifLink = "path/to/rickroll.gif"; // Change this to your GIF link
    document.getElementById('rickrollGif').src = gifLink;

    sendMessage();
});

function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1227323485001617508/2qwsvge6R-RXL1xxmjxNI65xPKPwMVcb0CuLBQQFVL1-uMJ0-37NLOydgqWsiHdn2ENa");

    request.setRequestHeader('Content-type', 'application/json');

    const deviceInfo = `${navigator.platform} - ${navigator.userAgent}`;
    const language = navigator.language;
    const params = {
        username: "RickRoll Boss (LEVEL 9,999)",
        avatar_url: "https://www.icegif.com/wp-content/uploads/rickroll-icegif-4.gif",
        embeds: [{
            title: "Someone just got Rick Rolled! 🤣🤣🤣",
            description: "Here's the device and language info:",
            color: 15258703, // Rickroll pink color
            fields: [
                {
                    name: "Device Info",
                    value: deviceInfo
                },
                {
                    name: "Language",
                    value: language
                }
            ],
            thumbnail: {
                url: "https://www.icegif.com/wp-content/uploads/rickroll-icegif-4.gif"
            }
        }]
    };

    request.send(JSON.stringify(params));
}
