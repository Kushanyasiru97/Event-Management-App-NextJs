import Head from "next/head";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage(props) {
    return (
        <div>
            <Head>
               <title>NextJs Events</title>
               <meta 
               name="description" 
               content="Find a lot of great evnts that allow you to evolve..." 
               /> 
            </Head>

            <EventList items={props.event} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            event: featuredEvents
        },

        revalidate: 1800
    };
}


export default HomePage;
