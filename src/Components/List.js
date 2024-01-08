import locationImg from './Images/Fill219.svg'

export default function List(props) {
    return (
        <div className="card">
      <div className="card--img-box">
        <img className="card--img" src={props.item.imageUrl} alt={props.item.title} />
      </div>

      <div className="card--infos">
         <img src={locationImg} className="card--location-icon" />
        <h2 className="card--location">{props.item.location}</h2>
        <a className="card--location-url" href={props.item.googleMapsUrl}>
          View on Google Maps
        </a>

        <h3 className="card--title">{props.item.title}</h3>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
    )
}