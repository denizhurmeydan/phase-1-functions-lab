// Code your solution in this file!
const headquarters = 42
function distanceFromHqInBlocks (block) {
    return (headquarters>block) ? headquarters-block : block-headquarters
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block)*264
}

function  distanceTravelledInFeet(start, destination) {
    if (start>destination){
        return (start-destination)*264
    }
    if (destination>start){
        return (destination-start)*264
    }
}

function calculatesFarePrice(start, destination) {
    

    if (distanceTravelledInFeet(start, destination) <  400) {
        return 0 ;
    }
        
    if (distanceTravelledInFeet(start, destination)>=400 && distanceTravelledInFeet(start, destination)<2000) {
        return 0.02 * (distanceTravelledInFeet(start, destination)-400) ;
    }
        
    if (distanceTravelledInFeet(start, destination)>=2000 && distanceTravelledInFeet(start, destination)<2500) {
        return 25 ;
    }
        
    if (distanceTravelledInFeet(start, destination)>=2500) { 
        return "cannot travel that far" ;
    }    
}
