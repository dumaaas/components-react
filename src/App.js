import './App.css';
import IdCardFront from './components/IdCardFront/IdCardFront';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <IdCardFront name="Marko" surname="Dumnic" city="Niksic" idPhoto="../image/profilePhoto.png" gender="M/M" citizenship="MNE" birthDate="22.10.1995" idNumber="*********" expire="12.02.2029" signature="Marko Dumnic"/>
        <IdCardFront name="Stefan" surname="Tomovic" city="Podgorica" idPhoto="../image/profilePhoto3.png" gender="M/M" citizenship="MNE" birthDate="31.03.1995" idNumber="*********" expire="01.10.2025" signature="Stefan Tomovic"/>
        <IdCardFront name="Milos" surname="Jovovic" city="Budva" idPhoto="../image/profilePhoto2.png" gender="M/M" citizenship="MNE" birthDate="29.09.1995" idNumber="*********" expire="26.04.2027" signature="Milos Jovovic"/>
      </Wrapper>
    </div>

  );
}

export default App;
