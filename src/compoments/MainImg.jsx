function MainImg() {
    return (
        <div className="text-center">
                       <ExploreMore/>

            <PlayGame/>
        </div>
    )
}

export default MainImg



function PlayGame(){
    return(
        <img src="./src/assets/Button.svg" alt="" />
    )
}

function ExploreMore(){
    return(
        <img src="./src/assets/vector.svg" alt="" />
    )
}
