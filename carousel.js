// assign initial states to each div
// make a fn that switches the states
// try with something automatic

const statesMap = {
    1: 'img1cls',
    2: 'img2cls',
    3: 'img3cls',
    4: 'img4cls',
    5: 'img5cls',
}

let currentStates = [1, 2, 3, 4, 5]; // states for position class
let imagesUrls= [
    'im1osut.webp',
    'im2osut.webp',
    'im3osut.webp',
    'im4osut.webp',
    'im5osut.webp'
]; // states for image class
let shift = 0; // shift for the images

let images = [
];

export function initializeImages() {
    images = [
        document.getElementById('img1'),
        document.getElementById('img2'),
        document.getElementById('img3'),
        document.getElementById('img4'),
        document.getElementById('img5'),
    ]
    applyImages();
}


export function applyStates() {
    // apply the state for the images classes
    images.forEach((img, index) => {
        img.classList.remove('img1cls', 'img2cls', 'img3cls', 'img4cls', 'img5cls');
        img.classList.add(statesMap[currentStates[index]]);
    })
    applyImages();
}

function applyStateDecorator(func) {
    return function() {
        func();
        applyStates();
    }
}


export const iterateStatesLeft = applyStateDecorator( () => {
    let newStates = [];
        currentStates.forEach((state, index) => {
            if(state === 1) {
                newStates[index] = 5;
            } else {
                newStates[index] = state - 1;
            }

        });
        currentStates = newStates;
});

export const  iterateStatesRight = applyStateDecorator( () => {
    let newStates = [];
    currentStates.forEach((state, index) => {
        if(state === 5) {
            newStates[index] = 1;
        } else {
            newStates[index] = state + 1;
        }

    });
    currentStates = newStates;
});

export const applyImages =() => {
    // applies images to the background of the divs
    if (shift === imagesUrls.length) {
        shift = 0;
    }
    let idx = shift;
    images.forEach((img, index) => {
        img.style.backgroundImage = `url(${imagesUrls[idx]})`;
        idx++;
        if (idx === imagesUrls.length) {
            idx = 0;
        }
    });
}




export function triggerAlert() {
    console.log('triggerAlert');
}