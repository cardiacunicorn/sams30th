import React from 'react';
import sam from './sambo.png';
import dancefloor from './dancefloor.jpg';
import bathroom from './tony-montana.png';
import snuggle from './Snuggle Sam Room.jpg';
import karaoke from './karaoke.jpg';
import photobooth from './PhotoBooth Room.PNG';
import diary from './Diary Room.jpg';
import garden from './garden.jpg';
import bar from './cocktailsam.jpg';
import sidebyside from './side-by-side.jpg';
import bedroom from './DnM.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Sam's 30th</title>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      <header className="App-header grid-container">
        <div class="grid-item item1"><img src={sam} className="App-logo sam" alt="logo" /></div>
        <div class="grid-item item2"><h1>Welcome to Sam’s Flirty 30th!</h1></div>
        <div class="grid-item item3"><img src={sam} className="App-logo sam" alt="logo" /></div>
      </header>
      <body className="App-body">
        <div className="intro">
        <h3>How it works:</h3>
        <p>This website is your portal to the party! Bookmark it, and if you get lost come back here.</p>

        <p>There are different rooms just like an party IRL.
        Scroll and pick which room you want to go to.
        Read the instructions and when you’re ready click the ‘Join the room’ button.  A link to a Zoom room will pop up - join that Zoom room and you’re in!</p>
        <p>When you want to leave the room just leave the Zoom meeting. Come back to the website and pick your next room!
        You’re free to roam about rooms at your leisure, but with a few rules in place to keep things spicy.</p>
        <ol>
          <li><strong>Pretend you’re at a party IRL.</strong> Hit the dfloor and dance up a storm. Tired of dancing? Go for a rest in the garden. Wanna DnM with your bestie? Head to the bedroom for a cosy dnm.</li>
          <li><strong>Read the instructions and help the set the vibe.</strong> Each room has instructions to help make the room fun. Have a read before you join the room and bring your good vibes!</li>
          <li><strong>When you need another drink you must head to the bar.</strong> You can also head to your fridge to get yourself a new drink.</li>
          <li><strong>When Sam enters your room stop what you’re doing and all give him a big pash</strong> (by smooching your camera)</li>
          <li><strong>Roll with the punches</strong> -- if the internet gets dodgy, music out of sync just roll with it. Sing and dance along.</li>
          <li><strong>Get chatting</strong> -- use the zoom chat for extra hilarious banter.</li>
          <li><strong>Keep an eye on the Fb event page for Group announcements.</strong></li>
          <li><strong>Have fun!</strong> It’s compulsory.</li>
        </ol>
        <ol>
        <strong>Zoom Tips:</strong>
          <li>Turn on Gallery view in the Top right corner</li>
          <li>Use the Chat down the bottom in the middle</li>
          <li>Mute yourself bottom left if you've got lots of background noise.</li>
        </ol>
        <p>Need Help? Tech Troubles? Got lost? Comment on the Helper Hut post in the FB Group and we’ll try to help you out.</p>
        </div>
        <div className="rooms">

          <div className="room">
          <img className="room-picture responsive" src={dancefloor} />
            <div className="instructions dancefloor purplebow">
              <h2>The Dancefloor!</h2>
              <p>Get ready to boooooogieeee!!! We have some fine Melbourne DJs to take you away and get lost in the music. A space to pull out all your favourite dance, and connect with some (hopefully!!) smiling faces.</p>
              <p>Some things to keep in mind while in this room:</p>
              <ol>
                <li>Create an area where you can have a bit of a dancefloor. Move out that coffee table and consider your lighting options.</li>
                <li>You must be standing up! If you feel like a sit down, go and head out in the garden area for some chats.</li>
                <li>Keep your microphone on mute, unless you're listening to the music stream in your headphones.</li>
                <li>Props encouraged - pull out that fan, cowboy hat or sunnies if that makes you feel good</li>
              </ol>
              <ul>
              <p>Setlist:</p>
              <li>8:00 DJ GLDN GAYTIME</li>
              <li>9:00 DJ GREEN EGGS AND SAM</li>
              <li>10:00 MK-ULTRA</li>
              <li>11:00 DJ RHI-PRESSED COWBOY</li>
              <li>12:00 CASA AMORE</li>
              <li>1:00 CLAM JAMZ</li>
              <li>2:00 DJ REQUESTS</li>
              </ul>
              <h4>Open 7:30pm - 3am</h4>
              <a href="https://zoom.us/j/98256028274?pwd=U1JkQ29WNWdJMkRibTZ5dmpNRHhWQT09" className="btn-gradient purple" target="_blank">Join the room</a>
            </div>
          </div>

          <div className="room">
            <img className="room-picture responsive" src={garden} />
            <div className="instructions garden greenbow">
              <h2>The Garden</h2>
              <p>Want some fresh air? A durry? Some chill vibes and banter? You'll definitely want to check out the garden - your go to place for straight-up hanging out and mingling.</p>
              <ol>
                <li>Aim to be outdoors, put up a pleasant virtual background, or lounge about with your best houseplant behind you! </li>
                <li>We're going to be kicking back, enjoying our bevs, meeting new people, and catching up with each other</li>
                <li>The neighbours have called the cops on us in the past, so we're trying to keep the music lower as it gets late. Helps with hearing each other though.</li>
                <li>Pets are of course welcome to join in here!</li>
              </ol>
              <h4>Open 7:30pm - 3am</h4>
              <a href="https://era-co.zoom.us/j/9268445195" target="_blank" className="btn-gradient green">Join the room</a>
            </div>
          </div>

          <div className="room">
          <img className="room-picture responsive" src={photobooth} />
            <div className="instructions tour">
              <h2>📸 Photobooth 📸</h2>
              <p>A place to recalibrate your look. Come for Sam themed virtual backgrounds, choreographed dance offs?, photo recreations? Print Screen funnies? You got it here. Capture your memories now! *Not a guarantee.</p>
              <ol>
                <li>Costumes Encouraged</li>
                <li>Numbers in the room may effect the Photo Booth activity</li>
                <li><a href="https://drive.google.com/open?id=13bAKEVP8AcPdPei5BDYswO_nJSZ9NpEA" target="_blank">Props folder!</a></li>
                <li>Please respect the booth: no drinks, no food, wash your hands</li>
                <li>Password: photobooth</li>
              </ol>
              <h4>Open 7:30pm - 1am</h4>
            	<a href="https://us04web.zoom.us/j/73957984880?pwd=dytWcitWWkZsRGFiOWMvWm15VllWdz09" target="_blank" className="btn-gradient blue">Join the room</a>
            </div>
          </div>

          <div className="room">
            <img className="room-picture responsive" src={bar} />
            <div className="instructions bar">
              <h2>🍻 THE BAR 🥂</h2>
              <p>Need to refuel? Head to the bar to top up your beverage, have a chat, and maybe even a drinking game or two.</p>
              <ol>
                <li>Always have a drink in hand.</li>
                <li>If Sam enters, we cheer and you need to finish your drink!</li>
                <li>Bring ID incase security come through.</li>
              </ol>
              <h4>Open 7:30pm - 12am</h4>
              <a href="https://greenpeace.zoom.us/j/95087341192" target="_blank" className="btn-gradient red">Join the room</a>
            </div>
          </div>

          <div className="room">
          <img className="room-picture responsive" src={bedroom} />
            <div className="instructions bedroom">
              <h2>The Bedroom</h2>
              <p>Need to take a break from big groups and dancing? Got something you want to get off your chest?</p><p>Welcome to the bedroom where we get deep AND meaningful about our feelings.</p>
              <ul>
                <li>you should be somewhere comfy, like your bed</li>
                <li>ask people probing questions "tell me more about that", "how did that make you feel"</li>
                <li>be nice</li>
              </ul>
              <h4>Open 9pm - 1am</h4>
              <a href="https://zoom.us/j/93967494826" target="_blank" className="btn-gradient yellow">Join the room</a>
            </div>
          </div>

          <div className="room">
            <img className="room-picture responsive" src={karaoke} />
            <div className="instructions karaoke">
              <h2>Karaoke!</h2>
              <p>Bring your best singing pipes and leave your modesty at the door, it’s your time to shine darlings!</p>
              <p>Welcome to the Karaoke Room, pls put your microphone on mute if you’re not singing (but still sing along at home!). When your song comes on turn off mute and belt it out, baby.</p>
              <p>Request your song in the chat. Duets are strongly encouraged!</p>
              <p>For the best karaoke experience click View Options then select Side-by-side mode. See photo…</p>
              <img className="responsive" src={sidebyside} />
              <p>The Rules:</p>
              <ol>
                <li>Dedicate every song to the birthday boy!</li>
                <li>If Sam enters the room sing Happy Birthday lyrics to the tune of the song that is playing – Spicks and Specks style.</li>
                <li>B.Y.O microphone… a drink bottle? A banana?</li>
              </ol>
              <h4>Open 10pm - 1am</h4>
              <a href="https://unimelb.zoom.us/j/6027448106" target="_blank" className="btn-gradient cyan">Join the room</a>
            </div>
          </div>

          <div className="room">
          <img className="room-picture responsive" src={snuggle} />
            <div className="instructions private">
              <h2>😘 Snuggle Sam Room 😘</h2>
              <p>An exclusive, invitation-only space to cuddle up with the beautiful birthday boy.</p>
              <ul>
                <li>Bring a drink</li>
                <li>Curl up on your comfiest couch</li>
                <li>Give our boy a big virtual birthday cuddle</li>
                <li>And catch up on old times</li>
              </ul>
              <a href="https://greenpeace.zoom.us/j/2208041806" target="_blank" className="btn-gradient orange">Join the room</a>
            </div>
          </div>

          <div className="room">
            <img className="room-picture responsive" src={diary} />
            <div className="instructions diary">
              <h2>The "I love Sam" Diary Room</h2>
              <p>Remember in 2001 when you really wanted to watch Big Brother, and your Mum wouldn’t let you, so you’d sneak the TV on and watch as much as you could until she noticed and yelled at you and turn that idiot show off?</p>
              <p>You always wanted to bare your soul in the diary room. Now here’s your chance…</p>
              <p>Jump into the diary room and confess your love for Sam like a contestant from Big Brother.</p>
              <ul>
                <li>Think of your favourite story about Sam</li>
                <li>Sit on your best arm chair</li>
                <li>Send him birthday wishes</li>
                <li>Bring your mates or get heart felt alone.</li>
              </ul>
              <p>*** This room will be recorded so Sam can watch your messages later ***</p>
              <h4>Open 7:30pm - 1am</h4>
              <a href="https://getup.zoom.us/j/5696787878" target="_blank" className="btn-gradient purple">Join the room</a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
