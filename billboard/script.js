const images = {
    'stinky_marshmallows': 'stinky marshmallow.JPG',
    'hot_marshmallows': 'hot marshmallow.JPG',
    'wet_marshmallows': 'wet marshmallow.JPG',
    'angry_marshmallows': 'angry marshmallow.JPG',

    'stinky_tacos': 'stinky tacos.JPG',
    'hot_tacos': 'hot tacos.JPG',
    'wet_tacos': 'wet tacos.JPG',
    'angry_tacos': 'angry tacos.JPG',

    'stinky_pillows': 'stinky pillow.JPG',
    'hot_pillows': 'hot pillow.JPG',
    'wet_pillows': 'wet pillow.JPG',
    'angry_pillows': 'angry pillow.JPG',

    'stinky_bananas': 'stinky banana.JPG',
    'hot_bananas': 'hot banana.JPG',
    'wet_bananas': 'wet banana.JPG',
    'angry_bananas': 'angry banana.JPG'
};

const images2 = {
    'dancing_little_cupcake': 'dancing cupcake.jpg',
    'huge_little_cupcake': 'huge cupcake.jpg',
    'cute_lemon': 'cute lemon.jpg',
    'cute_little_cupcake': 'cute little cupcake.jpg',
    'dancing_lemon': 'dancing lemon.jpg',
    'huge_lemon': 'huge lemon.jpg',
    'cute_potato': 'cute potato.jpg',
    'dancing_potato': 'dancing potato.jpg',
    'huge_potato': 'huge potato.jpg'
};

function generateSentence() {
    const adjective = document.getElementById('adjective').value;
    const noun = document.getElementById('noun').value;
    const imageKey = `${adjective}_${noun}`;

    const container = document.querySelector('.container');
    container.style.display = 'none';

    const billboard = document.createElement('div');
    billboard.className = 'billboard';
    billboard.style.position = 'fixed';
    billboard.style.left = '0';
    billboard.style.top = '0';
    billboard.style.width = '100vw';
    billboard.style.height = '100vh';
    billboard.style.backgroundColor = 'yellow';
    billboard.style.display = 'flex';
    billboard.style.flexDirection = 'column';
    billboard.style.justifyContent = 'center';
    billboard.style.alignItems = 'center';
    billboard.style.transition = 'transform 1s ease-out';
    document.body.appendChild(billboard);

    if (images[imageKey]) {
        const img = document.createElement('img');
        img.src = `./images/${images[imageKey]}`;
        img.alt = `${adjective} ${noun}`;
        img.style.maxWidth = '500px';
        img.style.opacity = '0';
        img.style.transform = 'scale(0) rotate(0deg)';
        img.style.transition = 'opacity 1s, transform 3s ease-out';

        billboard.appendChild(img);

        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1) rotate(1440deg)';
        }, 100);

        setTimeout(() => {
            showNewPrompt();
        }, 5000); 
    } else {
        billboard.innerHTML = 'No image found for that combination.';
    }
    setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1) rotate(1440deg)';
    }, 100);
    const text = document.createElement('div');

}

function showNewPrompt() {
    document.body.innerHTML = ''; 
    const newPrompt = document.createElement('div');
    newPrompt.className = 'new-prompt';
    newPrompt.innerHTML = `Simply <select id='verb'>
                            <option value='burn'>burn</option>
                            <option value='eat'>eat</option>
                            <option value='cook'>cook</option>
                        </select>
                        it and watch as it transforms into a 
                        <select id='adjective2'>
                            <option value='cute'>cute</option>
                            <option value='dancing'>dancing</option>
                            <option value='huge'>huge</option>
                        </select>
                        <select id='noun2'>
                            <option value='little_cupcake'>little cupcake</option>
                            <option value='lemon'>lemon</option>
                            <option value='potato'>potato</option>
                        </select>.
                        <br><br>
                        <button id="generateNewImage" onclick="generateNewImage()">Generate</button>`;

    newPrompt.style.position = 'fixed';
    newPrompt.style.top = '50%';
    newPrompt.style.left = '50%';
    newPrompt.style.transform = 'translate(-50%, -50%)';
    newPrompt.style.fontSize = '24px';
    newPrompt.style.fontWeight = 'bold';
    newPrompt.style.textAlign = 'center';

    document.body.appendChild(newPrompt);
}

function generateNewImage() {
    const adjective2 = document.getElementById('adjective2').value;
    const noun2 = document.getElementById('noun2').value;

    const imageKey = `${adjective2}_${noun2.replace(/\s+/g, '_')}`;

    if (!images2[imageKey]) {
        console.error(`Image key "${imageKey}" not found in images2 object.`);
        alert("Image not found. Please try again.");
        return;
    }

    document.body.innerHTML = ''; 
    document.body.style.backgroundColor = 'yellow';

    const finalResultDiv = document.createElement('div');
    finalResultDiv.className = 'final-result';
    finalResultDiv.style.position = 'fixed';
    finalResultDiv.style.top = '50%';
    finalResultDiv.style.left = '50%';
    finalResultDiv.style.transform = 'translate(-50%, -50%)';
    finalResultDiv.style.zIndex = '9999';

    const img = document.createElement('img');
    img.src = `./images2/${images2[imageKey]}`;
    img.alt = `${adjective2} ${noun2}`;
    img.style.maxWidth = '80vw';
    img.style.opacity = '0';
    img.style.transition = 'opacity 1s';

    finalResultDiv.appendChild(img);
    document.body.appendChild(finalResultDiv);


    setTimeout(() => {
        img.style.opacity = '1';
    }, 100);

    setTimeout(() => {
        showFinalMessage();
    }, 4000);
}

function showFinalMessage() {
    document.body.innerHTML = ''; 
    document.body.style.backgroundColor = 'yellow';

    const messageDiv = document.createElement('div');
    messageDiv.innerText = "Call now！we'd like to solve all your problems!";
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.fontSize = '36px';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.color = 'black';
    messageDiv.style.textAlign = 'center';
    
    document.body.appendChild(messageDiv);
}

