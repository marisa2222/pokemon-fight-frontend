import React from "react";
import "../styles/App.css";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBMask, MDBView } from "mdbreact";

export default () => {
  return (
    <>
    

      <main className="mainLandingPage">
        <MDBContainer className="text-center my-5 ">
          <h3>Catch, train, care for and battle with Pokémon! </h3>
          <p>
            {" "}
            Welcome to Pokémon universe! The world of Pokémon parallels our
            world. Various creatures and objects in our world appear as Pokémon
            in the Pokémon world. Pokémon are creatures with different types,
            attack techniques, evolutions and abilities. In the Pokémon world,
            the goal is to train Pokémon. A person who trains Pokémon is called
            a Pokémon trainer. The trainers, who set their heart on this job,
            leave their homes and go on a journey in the world of Pokémon.
            Before embarking on their journey, they must acquire a Pokémon
            called a starter Pokémon. This Pokémon is also provided by the
            Professors of the inhabited region. During this journey, they find
            themselves Pokémon to train. They catch these Pokémon with a variety
            of balls called Poke Balls. The rule of thumb for catching a Pokémon
            is to make it fight another Pokémon in your hand, reducing its
            energy. Pokémon that are not depleted of energy are hardly caught or
            not caught at all. When the Pokémon's energy is reduced, the Poke
            Ball is thrown at the wild Pokémon, capturing the Pokémon. Captured
            Pokémon are now yours and must serve you. Of course, this necessity
            also depends on the strong character of the educator. Because
            Pokémon do not listen to the trainers they see as incompetent.
          </p>

          <h3>So, what are the captured Pokémon used for?</h3>
          <p>
            Some trainers travel to the continent they live in, stop by the GYM
            and win badges by defeating the hall leaders there. These badges
            earned enable participation in the big league. The dream of trainers
            is to join this league and become a champion. Of course, this road
            is very long and arduous.{" "}
          </p>
        </MDBContainer>

        <div>
          <MDBContainer className="text-center">
            <iframe
              src="https://player.vimeo.com/video/315431464?autoplay=1&loop=1&color=5cd7d4&byline=0&portrait=0"
              width="800"
              height="400"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              className="videoFrame"
            ></iframe>
          </MDBContainer>
        </div>

        <MDBContainer className="text-center">
          <Link to="/choosePlayer">
            <MDBBtn>
              <img
                src={process.env.PUBLIC_URL + "/img/Pokéball.png"}
                className="pokeball"
                alt="logo"
                style={{
                  width: 40,
                }}
              />
              SELECT POKEMON
            </MDBBtn>
          </Link>
        </MDBContainer>
        <br></br>
      </main>
    </>
  );
};

//About us - Pokémon is formed by combining the words Pocket and Monsters. (So it is a plural word. However, we use it singularly due to general habit.) Japanese programmer Satoshi Tajiri, combining his childhood hobby of catching bugs with his programmer intelligence, Pocket Monsters Green and Pocket Monsters, the foundations of which were laid in 1990 and released as a Nintendo Gameboy game in 1996. He started this great journey with Red games. After the commercial success of the game, anime, movie, card game, manga, toys, etc. The Pokémon craze, which has spread to many branches, has achieved great success in almost every branch and continues its journey.
