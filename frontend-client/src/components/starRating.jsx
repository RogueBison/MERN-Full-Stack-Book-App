/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function StarRating(props) {
  let starIcons = [];
  const fullStars = Math.floor(props.rating);
  const halfStar = props.rating - fullStars >= 0.5;

  for (let i = 0; i < props.rating; i++) {
    if (i < fullStars) {
      starIcons.push(<FaStar key={i} />);
    } else if (i === fullStars && halfStar) {
      starIcons.push(<FaStarHalfAlt key={i} />);
    }
  }
  return starIcons;
}
