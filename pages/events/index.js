import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage(props){

    const {events} = props;
    const router = useRouter();

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events:events,
        },

        revalidate: 60
    }
}

export default AllEventsPage;