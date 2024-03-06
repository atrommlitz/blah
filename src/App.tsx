import React from 'react';
import './App.css';
// Take in the json data that I have been given
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

//H1 function tag for the website
function Welcome() {
  return <h1>NCAA Basketball Tournament Teams</h1>;
}

//this allows me to specify the variables in the team object and the properties in it
interface Team {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}
//this allows me to specify the variables in the teamCard object and the properties in it
interface TeamCardProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

//function recieveing information from the JSON data and putting it into H2 tags and p tags
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
//Puting teams in a list and dispalying the list of teams from the json data
function TeamList() {
  const teams: Team[] = CollegeBasketballTeams.teams;

  return (
    <div>
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

//Funciton that displays the app
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
