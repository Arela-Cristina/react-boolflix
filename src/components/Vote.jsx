import { FaStar, FaRegStar } from 'react-icons/fa'

export default function Stars({ vote }) {

    console.log('vote', vote)
    const votes = parseFloat(vote) / 2;
    const fullStars = Math.floor(votes);
    const emptyStars = 5 - fullStars

    console.log('votos', votes)
    console.log('voto redondeado', fullStars)

    return (
        <div>

            {Array(fullStars).fill(<FaStar color="gold" />)}

            {Array(emptyStars).fill(<FaRegStar color="gray" />)}
        </div>
    )
}