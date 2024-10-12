
function toggleCaption(button) {
    const caption = button.previousElementSibling;

    if (caption.style.minHeight === "60px" || caption.style.minHeight === "") {
        caption.style.minHeight = caption.scrollHeight + "px"; // Expands to fit full content
        button.textContent = "less...";
    } else {
        caption.style.minHeight = "60px"; // Collapses back to initial height
        button.textContent = "...more";
    }
}
// stories overlay
const profileImages = document.querySelectorAll('.pfp-stories');
const overlayImage = document.querySelector('#overlay-pic');
const overlayContainer = document.querySelector('.full-screen-div');

const storyPosts =['story-pics/story2.png','story-pics/story3.png','story-pics/story4.png','story-pics/story5.png','story-pics/story6.png','story-pics/story7.png','story-pics/story8.png']
const userID = ['user1','user2', 'user3', 'user4', 'user5', 'user6', 'user7']

let currUserIndex;
for (const image of profileImages) {
    image.addEventListener('click', openOverlay);
}

function openOverlay(event){
    let currUser = event.target.getAttribute('data-user');
    currUserIndex = userID.indexOf(currUser)
    // console.log(currUserIndex)

    if(currUserIndex !== null){
         overlayImage.src = storyPosts[currUserIndex]
        overlayContainer.style.display = 'grid';
    }else{ 
        console.error('User ID not found in userID array');
    }
}

// buttons //

// previous
const leftButton = document.getElementById("left-arrow");
leftButton.addEventListener("click", previousPic);

function previousPic(event){
    currUserIndex = currUserIndex-1
    if(currUserIndex < 0){
        exitOverlay();
    }else{
        overlayImage.src = storyPosts[currUserIndex]
        overlayContainer.style.display = 'grid';
    }
}
// next
const rightButton = document.getElementById("right-arrow");
rightButton.addEventListener("click", nextPic);
function nextPic(event){
    currUserIndex = currUserIndex+1
    if(currUserIndex >= storyPosts.length){
        exitOverlay();
    }else{
        overlayImage.src = storyPosts[currUserIndex]
        overlayContainer.style.display = 'grid';
    }
}

// exit overlay button
const exitButton = document.getElementById("exit-button");
exitButton.addEventListener("click", exitOverlay);
function exitOverlay(event){
    overlayContainer.style.display = 'none';
}


// liking and unliking
// const emptyHeart = document.getElementById("empty-heart-icon");
// emptyHeart.addEventListener("click", likePost);

// function likePost(event){
//     emptyHeart.style.display='none';
//     filledHeart.style.display='grid';
// }

// const filledHeart = document.getElementById("filled-heart-icon");
// filledHeart.addEventListener("click", unlikePost);

// function unlikePost(event){
//     filledHeart.style.display='none';
//     emptyHeart.style.display='grid';
// }

// Select all heart icons
const heartIcons = document.querySelectorAll(".heart-icon");

heartIcons.forEach(heart => {
    heart.addEventListener("click", toggleHeart);
});

function toggleHeart(event) {
    const emptyHeart = event.currentTarget.classList.contains('empty-heart');
    const filledHeart = event.currentTarget.classList.contains('filled-heart');

    if (emptyHeart) {
        event.currentTarget.style.display = 'none'; // Hide the empty heart
        // Show the corresponding filled heart
        event.currentTarget.nextElementSibling.style.display = 'grid';
    } else if (filledHeart) {
        event.currentTarget.style.display = 'none'; // Hide the filled heart
        // Show the corresponding empty heart
        event.currentTarget.previousElementSibling.style.display = 'grid';
    }
}
