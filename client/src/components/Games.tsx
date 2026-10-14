import madCookingImg from '../assets/madcoocing.png'
import sinoptikImg from '../assets/sinoptik.png'
import fairyImg from '../assets/fairy.png'
import dadImg from '../assets/dad.png'
import deadImg from '../assets/dead.png'
import catImg from '../assets/cat.png'

const gamesData = [
    { 
        id: 1, 
        title: 'Mad Cooking', 
        url: 'https://vishnyabu.itch.io/mad-cooking', 
        img: madCookingImg 
    },
    { 
        id: 2, 
        title: 'Sinoptik Jack', 
        url: 'https://vishnyabu.itch.io/sinoptik-jack', 
        img: sinoptikImg 
    },
    { 
        id: 3, 
        title: 'Fairytailophobia', 
        url: 'https://vishnyabu.itch.io/fairytailophobia', 
        img: fairyImg 
    },
    { 
        id: 4, 
        title: 'Dad and Dead', 
        url: 'https://vishnyabu.itch.io/dad-and-dead', 
        img: dadImg 
    },
    { 
        id: 5, 
        title: 'The Cure', 
        url: 'https://vishnyabu.itch.io/the-cure', 
        img: deadImg 
    },
    { 
        id: 6, 
        title: 'Cat Admin', 
        url: 'https://vishnyabu.itch.io/cat-admin', 
        img: catImg 
    },
]

export const Games = () => {
    return (
        <div>
            {gamesData.map((game) => (
                <div key={game.id}>
                    <a href={game.url}>
                        <img src={game.img} alt={game.title} />
                    </a>
                    <h1>{game.title}</h1>
                </div>
            ))}
        </div>
    )
}