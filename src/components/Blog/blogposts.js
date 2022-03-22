import React from 'react'

let blogposts = [
    {
        title: "Winter Quarter: Classes",
        date: "03/20/22",
        tags: ["CS", "Classes"],
        content:
            <div>
                <figure className="right">
                    <img src={require("./BImages/exec_edu_building.jpeg")} alt="Kyle Pu in a lecture room in UCLA's Executive Education Building"/>
                    <figcaption>Lecturing my imaginary students</figcaption>
                </figure>
                Winter 2022 is officially over! It's been a fun quarter seeing everyone get active on campus again.
                <br /><br />
                My thoughts on classes this quarter:
                <ul>
                    <li>CS 111 (Operating Systems): Cool, learned a lot about the software-hardware boundary. My favorite topics include CPU and memory virtualization.</li>
                    <li>Musicology 68 (The Beatles): Great class to discover new music, explore the lives of The Beatles, and understand how music has changed because of them.</li>
                    <li>Life Science 7B (Genetics, Evolution, and Ecology): Topics are very broad, a lot of reading. Ecology was surprisingly interesting. You learn a bit about species interactions and how/why environments change.</li>
                    <li>Stats 100A (Intro to Probability): Fun class based on poker.</li>
                </ul>
                <br />
                These courses count towards a CS degree?!? Yes! Music is a GE and LS7B counts towards my <a href="https://www.seasoasa.ucla.edu/undergraduate-technical-breadth-area-tba/">tech breadth</a>.
            </div>
    },

    {
        title: ["Winter Quarter: Adventures"],
        date: "03/21/22",
        tags: ["LA", "Travel", "Adventure"],
        content:
            <div>
                <figure className="right">
                    <img src={require("./BImages/santa_monica_pier.jpeg")} alt="Pacific Park entrance at Santa Monica Pier"/>
                    <figcaption>Santa Monica Pier</figcaption>
                </figure>
                What's the best part of going to school in LA? Going outside! From Venice Beach to Santa Monica and Beverly Hills, beautiful destinations are within miles of our classrooms.
                <br /><br />
                My finals ended on Monday of finals week this quarter (virtually a two week spring break for me!), so I had the chance to go out the Tuesday after. My adventures began in Venice Beach. Even on a Tuesday morning, the beach and the 2 mile walk along the ocean to Santa Monica Pier was filled with bicyclists, skaters, and a few street performers.
                <br /><br />
                Santa Monica Pier's ferris wheel was easy to spot from miles away, even through a bit of fog. It was easy to gauge our distance by seeing how much bigger it looked each time we checked. At $11 per ride, riding the ferris wheel was no cheap journey. But the beauty of the chill ocean breeze, bright light reflecting off the endless ocean waters, and the palm trees and high-rises of LA were a sight to see. "Ah, I really am in LA."
                <br /><br />
                UCLA is known for being close to the 3 B's: Beverly Hills, Bel-Air, and Brentwood (I honestly never heard of Brentwood before coming here. I had to search up "the 3 B's near UCLA" to find out what the third B was). Beverly Hills is just a 10-15 minute bus ride away from Westwood, our beloved college town. The Beverly Hills garden was quite underwhelming, featured in a garden smaller than the Botanical Gardens on campus. But Rodeo Drive lived up to its hype. The fancy glass buildings of designer stores, a golden Rolls Royce parked along the road, and fancily-dressed people walking all around made Beverly Hills what social media makes it out to be.
                <figure>
                    <img src={require("./BImages/rodeo_drive.jpeg")} alt="Red Life is Beautiful cursive sign" />
                    <figcaption>Life is Beautiful sign on Rodeo Drive</figcaption>
                </figure>
            </div>
    },

    {
        title: "LA Metro Bikes Appreciation Post",
        date: "03/21/22",
        tags: ["LA", "Travel", "Getting-Active"],
        content:
            <div>
                Yesterday was Kyle-Moves-Back-For-Spring-Break-Eve. I had a couple hours left of the afternoon before my best friend, a local, drove home. So we decided to mess around and ride a Bird scooter around campus. The thing is the people over at Bird have gotten pretty smart about where the Bird is allowed to accelerate. Walking zones cover campus where the Bird scooter becomes a primitive scooter scooter. No racing allowed!
                <br /><br />
                While we were riding around the back of Pauley Pavilion, we noticed a rack of LA Metro Bikes sitting near the entrance to Luskin. At just $3 per hour, they're a great (and much cheaper) alternative to scooters. So, we took them out for a spin.
                <br></br>
                One thing that won't stop amazing me about UCLA's campus is how many hidden spots litter campus. A couple highlights of our ride include a cafe-style seating area behind Anderson and the Executive Education building to a peaceful and green downhill slope from behind YRL (the Young Research Library) to  the edge of campus bordering the soccer field across Fowler.
                <br /><br />
                I love biking. LA Metro Bikes will see my business again. 'Till Spring Quarter!
            </div>
    }
]

export default blogposts;
