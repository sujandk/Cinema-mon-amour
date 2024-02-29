var movieDetail;
let genrePicks;
const movies = [{
    movieName: 'The Wolf of Wall Street',
    genre: ['Comedy', 'Drama'],
    trailerLink: 'https://www.youtube.com/watch?v=iszwuX1AK6A',
    rating: 8.2,
    language: 'English',
    boxOffice: '406.9',
    synopsis: `Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high 
                life to his fall involving crime, corruption and the federal government.`,
    director: ['Martin Scorsese'],
    stars: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Roobie'],
    runTime: '3 hours'
  },

  {
    movieName: 'The Shawshank Redemption',
    genre: ['Thriller', 'Crime'],
    trailerLink: 'https://www.youtube.com/watch?v=PLl99DlL6b4',
    rating: 9.3,
    language: 'English',
    boxOffice: '73.3',
    synopsis: `Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption
                 through basic compassion.`,
    director: ['Frank Darabont'],
    stars: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    runTime: '2 hours 22 minutes'
  },

  {
    movieName: "One Flew Over the Cuckoos Nest",
    genre: ['Thriller', 'Drama'],
    trailerLink: 'https://www.youtube.com/watch?v=OXrcDonY-B8',
    rating: 8.7,
    language: 'English',
    boxOffice: '163.3',
    synopsis: `In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he 
                rallies up the scared patients against the tyrannical nurse.`,
    director: ['Milos Forman'],
    stars: ['Jack Nicholson', 'Louise Fletcher', 'Michael Berryman'],
    runTime: '2 hours 13 minutes'
  },

  {
    movieName: "Interstellar",
    genre: ['Adventure', 'Sci-fi'],
    trailerLink: 'https://www.youtube.com/watch?v=2LqzF5WauAw',
    rating: 8.7,
    language: 'English',
    boxOffice: '701.7',
    synopsis: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along
                 with a team of researchers, to find a new planet for humans.`,
    director: ['Christopher Nolan'],
    stars: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    runTime: '2 hours 49 minutes'
  },


  {
    movieName: "The Hangover 2",
    genre: ['Comdey', 'Drama'],
    trailerLink: 'https://www.youtube.com/watch?v=ohF5ZO_zOYU',
    rating: 6.5,
    language: 'English',
    boxOffice: '586.8',
    synopsis: `Two years after the bachelor party in Las Vegas, Phil, Stu, Alan, and Doug jet to Thailand for Stu's wedding. Stu's plan for a subdued
               pre-wedding brunch, however, goes seriously awry.`,
    director: ['Todd Phillips'],
    stars: ['Bradley Cooper', 'Zach Galifianakis', 'Ed Helms'],
    runTime: '1 hour 24 minutes'
  },

  {
    movieName: "The Conjuring",
    genre: ['Horror', 'Mystery'],
    trailerLink: 'https://www.youtube.com/watch?v=k10ETZ41q5o',
    rating: 7.5,
    language: 'English',
    boxOffice: '319.5',
    synopsis: `Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.`,
    director: ['James Wan'],
    stars: ['Patrick Wilson', 'Vera Farmiga', 'Ron Livingston'],
    runTime: '1 hour 52 minutes'
  },

  {
    movieName: 'Oldboy',
    genre: ['Thriller', 'Action'],
    trailerLink: 'https://www.youtube.com/watch?v=g-3oHE07-r8',
    rating: 8.3,
    language: 'Japanese',
    boxOffice: '17.1',
    synopsis: `After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to 
                find that he must find his captor in five days.`,
    director: ['Park Chan-wook'],
    stars: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jeong'],
    runTime: '2 hours'
  },

  {
    movieName: 'Se7en',
    genre: ['Thriller', 'Crime'],
    trailerLink: 'https://www.youtube.com/watch?v=znmZoVkCjpI',
    rating: 8.6,
    language: 'English',
    boxOffice: '327.3',
    synopsis: `Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.`,
    director: ['David Fincher'],
    stars: ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey'],
    runTime: '2 hours 7 minutes'
  },

  {
    movieName: 'Memories of Murder',
    genre: ['Thriller', 'Crime'],
    trailerLink: 'https://www.youtube.com/watch?v=0n_HQwQU8ls',
    rating: 8.1,
    language: 'South Korean',
    boxOffice: '1.2',
    synopsis: `In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped
               and murdered by an unknown culprit.`,
    director: ['Bong Joon Ho'],
    stars: ['Song Kang-ho', 'Kim Sang-kyung', 'Kim Roe-ha'],
    runTime: '2 hours 12 minutes'
  },

  {
    movieName: 'Inception',
    genre: ['Sci-fi', 'Action'],
    trailerLink: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    rating: 8.8,
    language: 'English',
    boxOffice: '839',
    synopsis: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his 
                tragic past may doom the project and his team to disaster.`,
    director: ['Christopher Nolan'],
    stars: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    runTime: '2 hours 28 minutes'
  },

  {
    movieName: 'John Wick',
    genre: ['Action', 'Thriller'],
    trailerLink: 'https://www.youtube.com/watch?v=2AUmvWm5ZDQ',
    rating: 7.4,
    language: 'English',
    boxOffice: '1000',
    synopsis: `An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.`,
    director: ['Chad Stahelski', 'David Leitch'],
    stars: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
    runTime: '1 hour 41 minutes'
  },

  {
    movieName: 'The Bourne Identity',
    genre: ['Action', 'Thriller'],
    trailerLink: 'https://www.youtube.com/watch?v=PGKK5wACwrU',
    rating: 7.8,
    language: 'English',
    boxOffice: '214',
    synopsis: `A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins
               and attempting to regain his memory.`,
    director: ['Doug Liman'],
    stars: ['Franka Potente', 'Matt Damon', 'Chris Cooper'],
    runTime: '1 hour 59 minutes'
  },

  {
    movieName: 'The Platform',
    genre: ['Horror', 'Sci-fi'],
    trailerLink: 'https://www.youtube.com/watch?v=RlfooqeZcdY',
    rating: 7,
    language: 'Spanish',
    boxOffice: '1.09',
    synopsis: `A vertical prison with one cell per level. Two people per cell. Only one food platform and two minutes per day to feed. 
              An endless nightmare trapped in The Hole.`,
    director: ['Galder Gaztelu-Urrutia'],
    stars: ['Ivan Massagué', 'Zorion Eguileor', 'Antonia San Juan'],
    runTime: '1 hour 34 minutes'
  },

  {
    movieName: 'Talk To Me',
    genre: ['Horror', 'Mystery'],
    trailerLink: 'https://www.youtube.com/watch?v=aLAKJu9aJys',
    rating: 7.1,
    language: 'English',
    boxOffice: '92',
    synopsis: `When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until 
                one of them goes too far and unleashes terrifying supernatural forces.`,
    director: ['Danny Philippou', 'Michael Philippou'],
    stars: ['Ari McCarthy', 'Hamish Phillips', 'Kit Erhart-Bruce'],
    runTime: '1 hour 35 minutes'
  },

  {
    movieName: 'Life',
    genre: ['Horror', 'Sci-fi'],
    trailerLink: 'https://www.youtube.com/watch?v=cuA-xqBw4jE',
    rating: 6.6,
    language: 'English',
    boxOffice: '100.5',
    synopsis: `A team of scientists aboard the International Space Station discover a rapidly evolving life form that caused 
                extinction on Mars and now threatens all life on Earth.`,
    director: ['Daniel Espinosa'],
    stars: ['Jake Gyllenhaal', 'Rebecca Ferguson', 'Ryan Reynolds'],
    runTime: '1 hour 44 minutes'
  },


  {
    movieName: 'Green Book',
    genre: ['Comedy', 'Musical'],
    trailerLink: 'https://www.youtube.com/watch?v=QkZxoko_HC0',
    rating: 8.2,
    language: 'English',
    boxOffice: '321.8',
    synopsis: `A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour
               of venues through the 1960s American South.`,
    director: ['Peter Farrelly'],
    stars: ['Viggo Mortensen', 'Mahershala Ali', 'Linda Cardellini'],
    runTime: '2 hour 10 minutes'
  },

  {
    movieName: 'Kung Fu Panda',
    genre: ['Comedy', 'Action'],
    trailerLink: 'https://www.youtube.com/watch?v=_inKs4eeHiI',
    rating: 7.6,
    language: 'English',
    boxOffice: '631.7',
    synopsis: `To everyone's surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be 
                tested as the valley's arch-enemy is on his way.`,
    director: ['Mark Osborne', 'John Stevenson'],
    stars: ['Jack Black', 'Ian McShane', 'Angelina Jolie'],
    runTime: '1 hour 32 minutes'
  },

  {
    movieName: 'American Pie',
    genre: ['Comedy', 'Romance'],
    trailerLink: 'https://www.youtube.com/watch?v=rXQMzZGWHv0',
    rating: 7,
    language: 'English',
    boxOffice: '235.4',
    synopsis: `Four teenage boys enter a pact to lose their virginity by prom night.`,
    director: ['Paul Weitz', 'Chris Weitz'],
    stars: ['Jason Biggs', 'Chris Klein', 'Thomas Ian Nicholas'],
    runTime: '1 hour 35 minutes'
  },

  {
    movieName: 'Ex Machina',
    genre: ['Sci-fi', 'Thriller'],
    trailerLink: 'https://www.youtube.com/watch?v=sDkEF7Db7Gw',
    rating: 7.7,
    language: 'English',
    boxOffice: '37.3',
    synopsis: `A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by 
                evaluating the human qualities of a highly advanced humanoid A.I.`,
    director: ['Alex Garland'],
    stars: ['Alicia Vikander', 'Domhnall Gleeson', 'Oscar Isaac'],
    runTime: '1 hour 48 minutes'
  },

  {
    movieName: 'The Equalizer',
    genre: ['Action', 'Thriller'],
    trailerLink: 'https://www.youtube.com/watch?v=2rZegVSWEXU',
    rating: 5.5,
    language: 'English',
    boxOffice: '192.3',
    synopsis: `A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young 
              girl under the control of ultra-violent Russian gangsters.`,
    director: ['Antoine Fuqua'],
    stars: ['Denzel Washington', 'Marton Csokas', 'Chloë Grace Moretz'],
    runTime: '2 hours 12 minutes'
  },
  {
    movieName: 'Don Jon',
    genre: ['Comedy', 'Drama' , 'Romantic'],
    trailerLink: 'https://www.youtube.com/watch?v=2A63Ly0Pvpk',
    rating: 6.5,
    language: 'English',
    boxOffice: '41.3',
    synopsis: `A New Jersey guy dedicated to his family, friends, and church , develops unrealistic expectations from watching porn and works
                to find happiness and intimacy with his potential true love`,
    director: ['Joseph Gordon-Levitt'],
    stars: ['Joseph Gordon-Levitt', 'Scarlett Johansson', 'Julianne Moore'],
    runTime: '1 hour 30 minutes'
  },
  {
    movieName: 'Rec',
    genre: ['Horror', 'Thriller', 'Mystery'],
    trailerLink: 'https://www.youtube.com/watch?v=oPvHTzqY2fM',
    rating: 7.4,
    language: 'Spanish',
    boxOffice: '32.5',
    synopsis: `A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked
               inside with something terrifying.`,
    director: ['Juame Balaguero'],
    stars: ['Manuela Velasco', 'Ferran Terraza', 'Jorge-Yamam Serrano'],
    runTime: '1 hour 18 minutes'
  }
]

// search button code 
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const searchBox = document.querySelector('.search-input-holder');
//   searchBox.style.display = "inline-block";
//   //  searchBox.classList.add('.slideRight');

// })



let filtration = 'topPicks';

function Filtration(filtration) {
  switch (filtration) {

    case 'topPicks':
      movies.sort((a, b) => b.rating - a.rating);
      break;

    case 'Comedy':
      genrePicks= movies.filter((movie) => movie.genre.includes("Comedy"));
      genrePicks.sort((a, b) => b.rating - a.rating);
      
      break;

    case 'Thriller/Suspense':
      genrePicks = movies.filter((movie) => movie.genre.includes("Thriller"));
      genrePicks.sort((a, b) => b.rating - a.rating);
      
      break;

    case 'Action':
      genrePicks = movies.filter((movie) => movie.genre.includes("Action"));
      genrePicks.sort((a, b) => b.rating - a.rating);
    
      break;

    case 'Horror':
      genrePicks = movies.filter( (movie) => movie.genre.includes("Horror"));
      genrePicks.sort((a, b) => b.rating - a.rating);
      
      break;  

    case 'Sci-fi':
      genrePicks= movies.filter( (movie) => movie.genre.includes("Sci-fi"));
      genrePicks.sort((a, b) => b.rating - a.rating);
      
      break;  

    default:
      console.log("Error Occured!");
      break;
  }
}

//  const element = document.getElementById('myElement');
//  const xCoordinate = element.getBoundingClientRect().left;



window.addEventListener('load', function () {
  const allPosterSelector = document.querySelectorAll('.poster-holder');
  const allRatingSelector = document.querySelectorAll('.rating');
  const allMovieNameSelector = document.querySelectorAll('.name');
  const allTrailerSelector = document.querySelectorAll('.trailer');
  Filtration(filtration);

  for (let i = 0; i < allPosterSelector.length; i++) {


    const posterClass = allPosterSelector[i];
    const ratingClass = allRatingSelector[i];
    const movieNameClass = allMovieNameSelector[i];
    const trailerClass = allTrailerSelector[i];



    let intermediateposter = movies[i].movieName.split(" ").join('');
    intermediateposter = intermediateposter.toLowerCase();
    intermediateposter = `${intermediateposter}.jpg`;

    let attributes = `
              background-image: url(${intermediateposter});
              background-repeat: no-repeat;
              background-size: 100% 100%;
              background-position: center;
              `;


    posterClass.setAttribute('style', attributes);
    let movieName = movies[i].movieName;
    movieNameClass.innerText = movieName;
    let rating = movies[i].rating;
    ratingClass.innerHTML = `&nbsp;${rating}`;
    let trailer = movies[i].trailerLink;
    trailerClass.setAttribute('href', `${trailer}`);

  }


});


window.addEventListener('load', () => {

  const movieAndMoney = document.querySelectorAll('.flex-box .name');
  const trailer = document.querySelectorAll('.flex-box .trailer');
  const numberMovies = document.querySelectorAll('.flex-box .number-class');
  const elementEnumeration = document.querySelectorAll('.flex-box .enumeration');




  movies.sort((a, b) => (b.boxOffice - a.boxOffice));

  for (let i = 0; i < movieAndMoney.length; i++) {
    let nameAndMoneyClass = movieAndMoney[i];
    let trailerClass = trailer[i];
    let numberClass = numberMovies[i];
    let moneyClass = elementEnumeration[i];

    numberClass.innerHTML = `<h5> ${i+1} |&nbsp; </h5>`
    let boxOfficeEnumeration = movies[i].boxOffice >= 1000 ? `${movies[i].boxOffice/1000} billion USD` : `${movies[i].boxOffice} million USD`;

    nameAndMoneyClass.innerHTML = `<h5>${movies[i].movieName}</h5>`;
    trailerClass.setAttribute('href', `${movies[i].trailerLink}`);
    moneyClass.innerText = `${boxOfficeEnumeration}`;
  }

});



const spanElement = document.querySelectorAll('.name');

spanElement.forEach((span) => {
  span.addEventListener('click', () => {
    for (let i = 0; i < movies.length; i++) {
      if (span.innerText === movies[i].movieName) {
        localStorage.setItem('movieDetail', JSON.stringify(movies[i]));
        break;
      }
    }

    window.location.href = 'moveidetail.html';
  })
})


const dropDowmElement = document.querySelectorAll('.dropdown-item');
dropDowmElement.forEach((dropDown) => {
  dropDown.addEventListener('click', () => {
    filtration = dropDown.innerText;
    Filtration(filtration);
    const allPosterSelector = document.querySelectorAll('.poster-holder');
    const allRatingSelector = document.querySelectorAll('.rating');
    const allMovieNameSelector = document.querySelectorAll('.name');
    const allTrailerSelector = document.querySelectorAll('.trailer');
    const changePicks = document.querySelector('.title-holder');
    changePicks.innerText= dropDown.innerText;
    
    //Filtration(filtration);
  
    for (let i = 0; i < allPosterSelector.length; i++) {
  
  
      const posterClass = allPosterSelector[i];
      const ratingClass = allRatingSelector[i];
      const movieNameClass = allMovieNameSelector[i];
      const trailerClass = allTrailerSelector[i];
  
  
  
      let intermediateposter = genrePicks[i].movieName.split(" ").join('');
      intermediateposter = intermediateposter.toLowerCase();
      intermediateposter = `${intermediateposter}.jpg`;
  
      let attributes = `
                background-image: url(${intermediateposter});
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: center;
                `;
  
  
      posterClass.setAttribute('style', attributes);
      let movieName = genrePicks[i].movieName;
      movieNameClass.innerText = movieName;
      let rating = genrePicks[i].rating;
      ratingClass.innerHTML = `&nbsp;${rating}`;
      let trailer = genrePicks[i].trailerLink;
      trailerClass.setAttribute('href', `${trailer}`);
  
    }



    // localStorage.setItem('genrePick', JSON.stringify(genrePicks));
    // window.location.href = 'genre.html';

  })
})

const search= document.querySelector('.search-input-holder');
search.addEventListener('keypress' , (event) => {
  
  if (event.key== "Enter"){
    event.preventDefault(); 
    //console.log('asdfs');
   const searchValue= search.value.trim();
  search.value= '';
    movieSearch(searchValue.toLowerCase());
   
   
  }

})

function movieSearch (nameOFMovie){
  let movieFound= false;
  movies.forEach((movie) => {
    if (movie.movieName.toLowerCase() === nameOFMovie){
      localStorage.setItem('movieDetail', JSON.stringify(movie));
       movieFound = true;
       return;
       ;
    }
   
  })

  if (movieFound){
    window.location.href = 'moveidetail.html';
  }
  else{
    window.location.href = 'error.html';
  }

}