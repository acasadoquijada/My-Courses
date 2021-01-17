const courseNameInput = document.querySelector("#input-course-name");
const courseRatingInput = document.querySelector("#input-course-rating");
const btnAdd = document.querySelector("#btn-add");
const coursesList = document.querySelector("#courses-list");

function clear() {
    courseNameInput.value = "";
    courseRatingInput.value = "";
}




btnAdd.addEventListener("click", () => {
  
    const courseName = courseNameInput.value;
    const courseRating = courseRatingInput.value;

    if(isCourseNameValid(courseName) && isCourseRatingValid(courseRating)) {

      const newItem = document.createElement("ion-item");
      newItem.textContent = `${courseName} - ${courseRating}/5`;
      coursesList.appendChild(newItem);
      clear();
    }

});


function isCourseNameValid(courseName) {
    console.log(courseName);

    return courseName.length > 0;
}

function isCourseRatingValid(courseRating) {
    console.log(courseRating);
    return courseRating <= 5 && courseRating >= 1;
}
