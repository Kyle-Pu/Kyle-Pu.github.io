import React from 'react'

let blogposts = [
    {
        title: "Winter Quarter: Classes",
        date: "03/20/22",
        tags: ["CS-Classes", "Classes"],
        content:
            <div>
            Winter 2022 is officially over! It's been a fun quarter seeing everyone get active on campus again.
            <br /><br />
            My thoughts on classes this quarter:
            <ul>
                <li>CS 111 (Operating Systems): Cool, learned a lot about the software-hardware boundary. My favorite topics include CPU and memory virtualization.</li>
                <li>Musicology 68 (The Beatles): Great class to discover new music, explore the lives of The Beatles, and understand how music has changed because of them.</li>
                <li>Life Science 7B (Genetics, Evolution, and Ecology): Topics are very broad, a lot of reading. Ecology was surprisingly interesting. You learn a bit about species interactions and how/why environments change.</li>
                <li>Stats 100A (Intro to Probability): Fun class based on poker.</li>
            </ul>
            <br/>
            These courses count towards a CS degree?!? Yes! Music is a GE and LS7B counts towards my <a href="https://www.seasoasa.ucla.edu/undergraduate-technical-breadth-area-tba/">tech breadth</a>.
            </div>
    },

    {
        title: ["Winter Quarter: Adventures"],
        date: "03/20/22",
        tags: ["LA"],
        content:
        <div>
            Venice Beach and Santa Monica!
            Beverly Hills, Rodeo Drive, Pauley Pavilion.
        </div>
    }
]

export default blogposts;
