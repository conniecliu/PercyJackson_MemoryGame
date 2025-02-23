document.addEventListener('DOMContentLoaded', function () {
    const images = [0, 1, 2, 3, 4, 5, 6, 7];

    const imageSrc = [
        '../Project2_Pictures/Annabeth_Chase-Viria.png',
        '../Project2_Pictures/Frank_Zhang.png',
        '../Project2_Pictures/Grover_Underwood.png',
        '../Project2_Pictures/Hazel_Levesque.png',
        '../Project2_Pictures/Jason_Grace.png',
        '../Project2_Pictures/Leo_Valdez.png',
        '../Project2_Pictures/Percy_Jackson.png',
        '../Project2_Pictures/Piper_McLean.png'
    ];

    let score = 0;
    let scoreOutput = document.getElementById('score');
    const parentDiv = document.getElementById('parent-div');
    let comparisonResult = document.getElementById('comparisonResult');
    let resultOutput = document.getElementById('result');
    let firstClickedImage = null;
    let secondClickedImage = null;
    let matchCount = 0;



    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    // Duplicate each image once
    const duplicatedImages = [];
    images.forEach(imageNum => {
        duplicatedImages.push(imageNum);
        duplicatedImages.push(imageNum);
    });

    const shuffledImages = shuffleArray(duplicatedImages);
    parentDiv.innerHTML = "";


    shuffledImages.forEach((imageNum, index) => {

        const imageId = `image-${index + 1}`;


        const imageElement = document.createElement('img');
        imageElement.src = "../Project2_Pictures/card_background.png";
        imageElement.classList.add('image');
        imageElement.id = imageId;
        imageElement.key = imageNum



        parentDiv.appendChild(imageElement);


        imageElement.addEventListener('click', function () {
            if (!firstClickedImage) {
                firstClickedImage = imageElement;
                imageElement.src = imageSrc[imageElement.key];
                console.log(imageElement.src);
            } else if (!secondClickedImage) {
                secondClickedImage = imageElement;
                imageElement.src = imageSrc[imageElement.key];
                check();
            }
            score++;
            finalResult();
            display();
        });

        function display() {
            scoreOutput.innerHTML = score;
        }


        function check() {
            if (firstClickedImage.key === secondClickedImage.key) {
                comparisonResult.innerHTML = "right";
                matchCount++;
                firstClickedImage = null;
                secondClickedImage = null;
            } else {
                setTimeout(() => {
                    comparisonResult.innerHTML = "wrong";
                    firstClickedImage.src = "../Project2_Pictures/card_background.png";
                    secondClickedImage.src = "../Project2_Pictures/card_background.png";

                    firstClickedImage = null;
                    secondClickedImage = null;

                }, 1000)
            }
        }



        function finalResult() {
            resultOutput.innerHTML = (matchCount === 8) ? "You finished the game! Click restart to play again!" : "Keep going...";
        }


    });

});

function restartGame() {
    location.reload();

}