// In this exercise I am making an array of items. In this case, pedals.
// Below the array there is a function. In this function I am looking to
// use an eventlistener to populate more data to local storage using
// a function.

// array of items

const pedalInfo = [
    {
        make: "Strymon",
        model: "Bluesky",
        type: "reverb",
        color: "blue"
    },
    {
        make: "JHS",
        model: "Moonshine",
        type: "overdrive",
        color: "grey"
    },
    {
        make: "Boss",
        model: "DD2",
        type: "delay",
        color: "white"
    }

]

// function that is basically a template. With this I don't have to redo all of this
// typing. I can instead use some info below to create more objects

const createPedal = (myMake, myModel, myType, myColor) => {
    const newPedal = {
        make: myMake,
        model: myModel,
        type: myType,
        color: myColor
    }
    return newPedal
}

// With this function I can have more data added to the createPedal function in order
// to make some more stuff. Hell yeah.

// The function below gets the bestOverdrive put in local storage

function populateDB() {

// With "bestOverdrive" I can load the strings into the "createPedal" function above
// I am then saving the info to local storage

    const bestOverdrive = createPedal("Fuzzrocious", "OCDemon", "Distortion", "Grey")
    savingToLocalStorage(bestOverdrive, "bestOverdrive");

//  With this function I am saving the data to local storage. I am "stringifying" the
//  data so it can be accessed.

    function savingToLocalStorage(dataBaseObject, localStorageKey) {
        const strigifiedDatabase = JSON.stringify(dataBaseObject);
        localStorage.setItem(localStorageKey, strigifiedDatabase);

    }

}

// If you look in local storage you will see "pedalInfo" listed. It's the first thing I
// typed in this file

// savingToLocalStorage(pedalInfo, "pedalInfo");