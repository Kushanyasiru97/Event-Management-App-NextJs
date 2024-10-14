import Head from "next/head";

import { Fragment } from "react";

import EventSummary from "../../components/event-detail/event-summary";

import EventLogistics from "../../components/event-detail/event-logistics";

import EventContent from "../../components/event-detail/event-content";

import ErrorAlert from "../../components/ui/error-alert";

import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";



function EventDetailPage(props) {

    const event = props.selectedEvent;



    if (!event) {

        return (

            <div className="center">

                <p>Loading...</p>

            </div>

        );

    }



    return (

        <Fragment>

            <Head>
               <title>{event.title}</title>
               <meta 
               name="description" 
               content= {event.description}
               /> 
            </Head>

            <EventSummary title={event.title} />

            <EventLogistics

                date={event.date}

                address={event.address}

                image={event.image}

                imageAlt={event.title}

            />

            <EventContent>

                <p>{event.description}</p>

            </EventContent>

        </Fragment>

    );

}



export async function getStaticProps(context) {

    const eventId = context.params.eventId;



    const event = await getEventById(eventId);



    return {

        props: {

            selectedEvent: event,

        },
        
        revalidate: 30

    };

}



export async function getStaticPaths() { // Fixed naming

    const events = await getFeaturedEvents();



    const paths = events.map(event => ({ params: { eventId: event.id } }));



    return {

        paths: paths,

        fallback: true, // Change this to 'true' or 'blocking' if you want fallback pages.

    };

}



export default EventDetailPage;