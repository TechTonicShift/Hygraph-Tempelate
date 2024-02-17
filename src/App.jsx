import { useEffect, useState } from 'react'
import { graphcms, carouselimagesQuery, teammembersQuery } from './GraphQL/queries';

function App() {
  const [carousel, setCarousel] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Fetch carousel images
    graphcms.request(carouselimagesQuery)
      .then((res) => {
        console.log(res);
        setCarousel(res.carouselimages); // Assuming 'carouselimages' is an array in the response
      })
      .catch((error) => {
        console.error('Error fetching carousel data:', error);
      });

    // Fetch team members
    graphcms.request(teammembersQuery)
      .then((res) => {
        console.log(res);
        setTeam(res.teammembers); // Assuming 'teammembers' is an array in the response
      })
      .catch((error) => {
        console.error('Error fetching team members data:', error);
      });
  }, []) // This effect will run only once after the initial render

  return (
    <>
      <h1>Hello World!</h1>
      {/* Render your carousel and team members here */}
    </>
  )
}

export default App
