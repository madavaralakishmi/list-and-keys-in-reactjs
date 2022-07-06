// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} border_layout`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} className="img1" alt={title} />
    </li>
  )
}
export default CardItem
