// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, stateA, stateB){
    if (location == "A") {
        if (stateA == "DIRTY") return "CLEAN";
        else return "RIGHT";
    } else if (location == "B") {
        if (stateB == "DIRTY") return "CLEAN";
        else return "LEFT";
    }
}

function test(states){
    var location = states[0];
    var stateA = states[1];
    var stateB = states[2];
    
    var action_result = reflex_agent(location, stateA, stateB);
    
    document.getElementById("log").innerHTML += "<br>Location: " + location + " | Action: " + action_result + " | StateA: " + stateA + " | StateB: " + stateB;
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") {
        states[0] = "B";
    } else if (action_result == "LEFT") {
        states[0] = "A";
    }
    
    setTimeout(function(){ test(states); }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"]; // initial state
test(states);
