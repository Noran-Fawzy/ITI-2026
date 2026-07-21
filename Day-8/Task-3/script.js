// Create Track List

function createTrackList(trackName, parentElement) {
    let title = document.createElement("h2");
    title.textContent = trackName;
    let ul = document.createElement("ul");
    parentElement.appendChild(title);
    parentElement.appendChild(ul);
    return ul;
}

// Add Course

function addCourse(courseName, listTrackElement) {
    let li = document.createElement("li");
    li.textContent = courseName;
    listTrackElement.appendChild(li);
}

// Remove Course

function removeCourse(courseName, listTrackElement) {
    let courses = listTrackElement.getElementsByTagName("li");
    for (let course of courses) {
        if (course.textContent === courseName) {
            course.remove();
            break;
        }
    }
}

// Move Course

function moveCourse(courseName, targetListTrackElement) {
    let allLists = document.querySelectorAll("ul");
    for (let list of allLists) {
        let courses = list.getElementsByTagName("li");
        for (let course of courses) {
            if (course.textContent === courseName) {
                targetListTrackElement.appendChild(course);
                return;
            }
        }
    }
}



let parent = document.getElementById("tracks");
let frontEnd = createTrackList("Front-End", parent);
let backEnd = createTrackList("Back-End", parent);

// Add courses
addCourse("HTML", frontEnd);
addCourse("CSS", frontEnd);
addCourse("JavaScript", frontEnd);
addCourse("PHP", backEnd);
addCourse("Node.js", backEnd);

// Remove course
removeCourse("CSS", frontEnd);

// Move course
moveCourse("JavaScript", backEnd);