import './App.css';
import BookCard from './components/BookCard/BookCard';
import IdCardFront from './components/IdCardFront/IdCardFront';
import MovieCard from './components/MovieCard/MovieCard';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <IdCardFront name="Marko" surname="Dumnic" city="Niksic" idPhoto="https://dumaaas.github.io/components-react/image/profilePhoto.png" gender="M/M" citizenship="MNE" birthDate="22.10.1995" idNumber="*********" expire="12.02.2029" signature="Marko Dumnic"/>
        <IdCardFront name="Stefan" surname="Tomovic" city="Podgorica" idPhoto="https://dumaaas.github.io/components-react/image/profilePhoto3.png" gender="M/M" citizenship="MNE" birthDate="31.03.1995" idNumber="*********" expire="01.10.2025" signature="Stefan Tomovic"/>
        <IdCardFront name="Milos" surname="Jovovic" city="Budva" idPhoto="https://dumaaas.github.io/components-react/image/profilePhoto2.png" gender="M/M" citizenship="MNE" birthDate="29.09.1995" idNumber="*********" expire="26.04.2027" signature="Milos Jovovic"/>
      </Wrapper>
      <Wrapper>
        <MovieCard 
          name="Interstellar"
          image="https://dumaaas.github.io/components-react/image/interstellar.jpg" 
          genre="Adventure, Drama, Sci-Fi" 
          director="Christopher Nolan" 
          releaseYear="2014" 
          actors="Matthew McConaughey, Anne Hathaway, Jessica Chastain" 
          summary="A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way."
          trailer="https://www.youtube.com/watch?v=zSWdZVtXT7E"
          imdb="https://www.imdb.com/title/tt0816692/"
        />
        <MovieCard 
          name="Fight Club" 
          image="https://dumaaas.github.io/components-react/image/fightclub.jpg" 
          genre="Drama" 
          director="David Fincher" 
          releaseYear="1999" 
          actors="Edward Norton, Brad Pitt, Helene Bonham Carter" 
          summary="A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable."
          trailer="https://www.youtube.com/watch?v=qtRKdVHc-cE"
          imdb="https://www.imdb.com/title/tt0137523/"
        />
        <MovieCard 
          name="Oldboy" 
          image="https://dumaaas.github.io/components-react/image/oldboy2.jpg" 
          genre=" Action, Drama, Mystery" 
          director="Chan-wook Park" 
          releaseYear="2003" 
          actors="Choi Min-sik, Yoo Ji-Tae, Kang Hye-jeong" 
          summary="Dae-Su is an obnoxious drunk bailed from the police station yet again by a friend. However, he's abducted from the street and wakes up in a cell, where he remains for the next 15 years, drugged unconscious when human contact is unavoidable, otherwise with only the television as company."
          trailer="https://www.youtube.com/watch?v=zSWdZVtXT7E"
          imdb="https://www.imdb.com/title/tt0364569/"
        />
      </Wrapper>
      <Wrapper>
        <BookCard
          src="https://dumaaas.github.io/components-react/image/lord.jpg"
          name="The Fellowship Of The Ring"
          author="J. R. R. Tolkien"
          publishYear="July 29, 1954"
          quote="“Not all those who wander are lost.”"
          publisher="Allen & Unwin"
        />
        <BookCard
          src="https://dumaaas.github.io/components-react/image/lord.jpg"
          name="The Fellowship Of The Ring"
          author="J. R. R. Tolkien"
          publishYear="July 29, 1954"
          quote="“Not all those who wander are lost.”"
          publisher="Allen & Unwin"
        />
        <BookCard
          src="https://dumaaas.github.io/components-react/image/lord.jpg"
          name="The Fellowship Of The Ring"
          author="J. R. R. Tolkien"
          publishYear="July 29, 1954"
          quote="“Not all those who wander are lost.”"
          publisher="Allen & Unwin"
          />
      </Wrapper>
    </div>
  );
}

export default App;
