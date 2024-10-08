import Link from "next/link";
import styles from './event-item.module.css';

function EventItem(props){

    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(',', '/n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            <img src={'/' + image} alt={title}/>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>DATE</time>
                </div>
                <div>
                <address>ADDRESS</address>
            </div>
            </div>

            <div>
               <Link href={exploreLink}>Explore Events</Link>
            </div>
        </li>
    );
}

export default EventItem;