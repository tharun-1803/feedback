import Feedback from "./components/Feedback"

const resources={
    emojis:[
        {
        id:1,
        imageUrl:"https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png",
        name:"Sad"
        },
        {
        id:2,
        imageUrl:"https://assets.ccbp.in/frontend/react-js/none-emoji-img.png",
        name:"None"
        },
        {
        id:3,
        imageUrl:"https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png",
        name:"Happy"
        }
    ],
    loveEmojiUrl:"https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
}

const App=()=><Feedback resources={resources}/>

export default App