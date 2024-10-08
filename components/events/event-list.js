import EventItem from "./event-item";
import styles from "./event-list.module.css";

function EventList(props) {
    const { items } = props;

    // Ensure items is an array before mapping
    if (!items || items.length === 0) {
        return <p>No events available</p>; // Display a message if there are no events
    }

    return (
        <ul className={styles.list}>
            {items.map(event => (
                <EventItem 
                    key={event.id} 
                    id={event.id} 
                    title={event.title} 
                    location={event.location} 
                    date={event.date} 
                    image={event.image} 
                />
            ))}
        </ul>
    );
}

export default EventList;
