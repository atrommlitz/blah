import React from 'react';
import './App.css';
// Take in the json data that I have been given
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

//H1 function tag for the website
function Welcome() {
  return <h1>NCAA Basketball Tournament Teams</h1>;
}

interface Team {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamCardProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function TeamCard({ school, name, city, state }: TeamCardProps) {
  return (
    <div className="team-card">
      <h2 className="school-name">{school}</h2>
      <p className="mascot-name">{name}</p>
      <p className="location">
        Location: {city}, {state}
      </p>
    </div>
  );
}

function TeamList() {
  const teams: Team[] = CollegeBasketballTeams.teams;

  return (
    <div>
      <h1>List of Teams</h1>
      <div className="team-list">
        {teams.map((team) => (
          <TeamCard
            key={team.tid}
            school={team.school}
            name={team.name}
            city={team.city}
            state={team.state}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
