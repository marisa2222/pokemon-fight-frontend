import React, { useState, useEffect } from "react";
import "../style.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const LeaderBoard = () => {
  const [leaderBoardData, setLeaderBoardData] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/users/game`)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          alert("Connection failed, please try again");
        }
      )
      .then((jsonResponse) => {
        setLeaderBoardData(jsonResponse);
        console.log(jsonResponse);
      });
  }, []);

  return (
    <>
      <MDBTable hover className="w-responsive text-center mx-auto p-3 mt-2">
        <MDBTableHead>
          <tr>
    
            <th>MyPokemon</th>
            <th>Enemy Pokemon</th>
            <th>Winner</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {leaderBoardData &&
            leaderBoardData.map((game) => (
              <tr key={game._id}>
    
                <td>{game.myPokemonName}</td>
                <td>{game.enemyPokemonName}</td>
                <td>{game.winner ? "You won" : "You lost"}</td>
              </tr>
            ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default LeaderBoard;
