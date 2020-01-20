import React from 'react';

import { Container } from './styles';
import MovieList from '../../components/MovieList';

export default function Home() {
  const moviesResult = {
    groups: [
      {
        name: 'NetFlix original',
        movies: [
          { coverImage: 'https://image.tmdb.org/t/p/original//4Bph0hhnDH6dpc0SZIV522bLm4P.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//1sBx2Ew4WFsa1YY32vlHt079O03.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//p6s2svEHHLsQ1TOw4Si54c1dD5L.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//cVypg2xxXBP2UgYhzrokI1xNiyf.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//pXeuSWSKgWUnhRFHZ4TjAUU8lbE.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//9qZUrhcFVI9MNznVJxdfcrmifof.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//18FWPmsh2dULwMyWGjNDCUsmGRM.jpg' }
        ],
      },
      {
        name: 'Outros filmes',
        movies: [
          { coverImage: 'https://image.tmdb.org/t/p/original//4Bph0hhnDH6dpc0SZIV522bLm4P.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//1sBx2Ew4WFsa1YY32vlHt079O03.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//p6s2svEHHLsQ1TOw4Si54c1dD5L.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//cVypg2xxXBP2UgYhzrokI1xNiyf.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//pXeuSWSKgWUnhRFHZ4TjAUU8lbE.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//9qZUrhcFVI9MNznVJxdfcrmifof.jpg' },
          { coverImage: 'https://image.tmdb.org/t/p/original//18FWPmsh2dULwMyWGjNDCUsmGRM.jpg' }
        ],
      },
    ],
  };

  return (
    <Container>
      <MovieList groups={moviesResult.groups} />
    </Container>
  );
}
