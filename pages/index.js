import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'
// import EventList , display it and make usre to pass itmes
function HomePage() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
export default HomePage

// import { getFeaturedEvents } from '../dummy-data';
// import EventList from '../components/events/event-list';

// function HomePage() {
//   const featuredEvents = getFeaturedEvents();

//   return (
//     <div>
//       <EventList items={featuredEvents} />
//     </div>
//   );
// }

// export default HomePage;
