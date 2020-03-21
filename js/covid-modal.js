// create reference to covid-modal element
const modal = document.getElementById("covid-modal");

// check if covid modal exists
if(modal) {
    //add overflow hidden to body element, to prevent page from scrolling
    document.body.style.overflow = "hidden";
    // create reference to modal close button element
    const closeButton = document.getElementById("covid-close-btn");
    // add event listener to close button
    closeButton.addEventListener("click", () => {
        //hide modal
        modal.style.display = "none";
        //reset body overflow so page could scroll once modal is hidden
        document.body.style.overflow = "auto"
      });
}

