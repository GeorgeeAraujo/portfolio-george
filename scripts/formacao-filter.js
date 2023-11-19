const arrayOfFilterBtns = Array.from(document.querySelectorAll('.filter__btn'));
const objectOfFilterBtns = {
    all: ()=>document.getElementById('filter-all'),
    frontend:()=>document.getElementById('filter-frontend'),
    backend:()=>document.getElementById('filter-backend')
};

let coursesFiltered

const courses = Array.from(document.querySelectorAll('.course'));

filtersListener();

function teste(keyword){
    
}


function filtersListener(){
    arrayOfFilterBtns.forEach((filterBtn) => {
        filterBtn.addEventListener('click', (event)=>{
            toggleFilter(event.target)
        });
    });
};

function toggleFilter(filterElement){
    removeCLickedClass();
    addClickedClass(filterElement);
    if(filterElement.id == 'filter-all'){
        showAllCourses();
    } else if(filterElement.id == 'filter-frontend'){
        showAllCourses();
        hideCoursesDontMatch(getCoursesDontMatch('frontend'))
    } else if (filterElement.id == 'filter-backend'){
        showAllCourses();
        hideCoursesDontMatch(getCoursesDontMatch('backend'));
    }
}

function addClickedClass(element){
    element.classList.add('clicked');
};

function removeCLickedClass(){
    arrayOfFilterBtns.forEach(filterBtn=>{
        filterBtn.classList.remove('clicked');
    });
};

function getCoursesDontMatch(keyword){
    return courses.filter(course => !course.classList.contains(keyword))
}

function hideCoursesDontMatch(coursesDontMatch){
    coursesDontMatch.forEach(course => course.style.display = 'none');
}

function showAllCourses(){
    courses.forEach(course => course.style.display = 'block')
}
