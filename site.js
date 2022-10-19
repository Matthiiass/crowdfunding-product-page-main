function projHover() {
    document.querySelector('.backProject').style.backgroundColor = '#147b74'
};

function projUnhover() {
    document.querySelector('.backProject').style.backgroundColor = '#3cb4ac'
};

var bookmarked = false
function bookHover() {
    if (bookmarked != true) {
        document.querySelector('.bookmarkDiv').style.backgroundColor = '#147b74'
    }
};

function bookUnhover() {
    if (bookmarked != false) {
        document.querySelector('.bookmarkDiv').style.backgroundColor = '#3cb4ac'
    }
};

function bookmarkProject() {
    if (bookmarked == false) {
        bookmarked = true
        document.querySelector('.inactiveBookmark').style.display = 'none'
        document.querySelector('.activeBookmark').style.display = 'initial'
        document.querySelector('#bookmarkText').style.color = '#3cb4ac'
        document.querySelector('#bookmarkText').innerHTML = 'Bookmarked'
    }
    else {
        bookmarked = false
        document.querySelector('.inactiveBookmark').style.display = 'initial'
        document.querySelector('.activeBookmark').style.display = 'none'
        document.querySelector('#bookmarkText').style.color = '#7a7a7a'
        document.querySelector('#bookmarkText').innerHTML = 'Bookmark'
    }
}