const Hero = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt="" width={100} />
        </div>
    )
}

const Enemy = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt="" width={100} />
        </div>
    )
}

const Arena = (props) => {
    return (
        <div>
            <h2>{props.arena}</h2>
            <Hero name="Mario" img="imgs/mario.png" />
            <Enemy name="Bowser" img="imgs/bowser.png" />
            <hr />
        </div>
    )
}

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export { Hero, Enemy, Arena, World }
