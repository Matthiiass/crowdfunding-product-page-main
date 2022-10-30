
var noRewardButton = document.querySelector('#noReward')
var bambooStandButton = document.querySelector('#bambooStand')
var blackStandButton = document.querySelector('#blackStand')
var modal = document.getElementById("pledgeModal")

var pledgeReward = "none";
var amountBacked = 89914
var totalBackers = 5007
var bambooStandsLeft = 101
var blackStandsLeft = 64

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


function modalActivate() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function noRewardPledge() {
    noRewardButton.style.borderColor = "#3cb4ac"
    bambooStandButton.style.borderColor = "#9c9c9c"
    blackStandButton.style.borderColor = "#9c9c9c"

    noRewardButton.style.borderWidth = "3px"
    bambooStandButton.style.borderWidth = "1px"
    blackStandButton.style.borderWidth = "1px"

    noRewardButton.querySelector('.selectedCircle').style.display = "block"
    bambooStandButton.querySelector('.selectedCircle').style.display = "none"
    blackStandButton.querySelector('.selectedCircle').style.display = "none"

    noRewardButton.querySelector('.pledgeSection').style.display = "flex"
    bambooStandButton.querySelector('.pledgeSection').style.display = "none"
    blackStandButton.querySelector('.pledgeSection').style.display = "none"

    pledgeReward = "none"
}
function bambooStandPledge() {
    bambooStandButton.style.borderColor = "#3cb4ac"
    noRewardButton.style.borderColor = "#9c9c9c"
    blackStandButton.style.borderColor = "#9c9c9c"

    bambooStandButton.style.borderWidth = "3px"
    noRewardButton.style.borderWidth = "1px"
    blackStandButton.style.borderWidth = "1px"

    bambooStandButton.querySelector('.selectedCircle').style.display = "block"
    noRewardButton.querySelector('.selectedCircle').style.display = "none"
    blackStandButton.querySelector('.selectedCircle').style.display = "none"

    bambooStandButton.querySelector('.pledgeSection').style.display = "flex"
    noRewardButton.querySelector('.pledgeSection').style.display = "none"
    blackStandButton.querySelector('.pledgeSection').style.display = "none"

    pledgeReward = "bamboostand"
}
function blackStandPledge() {
    blackStandButton.style.borderColor = "#3cb4ac"
    noRewardButton.style.borderColor = "#9c9c9c"
    bambooStandButton.style.borderColor = "#9c9c9c"

    blackStandButton.style.borderWidth = "3px"
    noRewardButton.style.borderWidth = "1px"
    bambooStandButton.style.borderWidth = "1px"

    blackStandButton.querySelector('.selectedCircle').style.display = "block"
    bambooStandButton.querySelector('.selectedCircle').style.display = "none"
    noRewardButton.querySelector('.selectedCircle').style.display = "none"

    blackStandButton.querySelector('.pledgeSection').style.display = "flex"
    noRewardButton.querySelector('.pledgeSection').style.display = "none"
    bambooStandButton.querySelector('.pledgeSection').style.display = "none"

    pledgeReward = "blackstand"
}

function completePledge() {
    if (pledgeReward == "none") {
        var amountPledged = noRewardButton.getElementsByTagName('input')[0].value
        amountBacked += Number(amountPledged)
        totalBackers += 1
        document.querySelector('#totalPledgeAmount').innerHTML = "$" + String(amountBacked).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        document.querySelector('#centerStat').querySelector('.bigStatText').innerHTML = String(totalBackers).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        noRewardButton.style.borderColor = "#9c9c9c"
        noRewardButton.style.borderWidth = "1px"
        noRewardButton.querySelector('.selectedCircle').style.display = "none"
        noRewardButton.querySelector('.pledgeSection').style.display = "none"
        modal.style.display = "none";
    }
    else if (pledgeReward == 'bamboostand') {
        var amountPledged = bambooStandButton.getElementsByTagName('input')[0].value
        if (Number(amountPledged) < 25) {
            return
        }
        amountBacked += Number(amountPledged)
        totalBackers += 1
        document.querySelector('#totalPledgeAmount').innerHTML = "$" + String(amountBacked).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        document.querySelector('#centerStat').querySelector('.bigStatText').innerHTML = String(totalBackers).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        var left = document.querySelectorAll('.bambooStandLeft')
        bambooStandsLeft -= 1
        left[0].innerHTML = bambooStandsLeft
        left[1].innerHTML = bambooStandsLeft
        bambooStandButton.style.borderColor = "#9c9c9c"
        bambooStandButton.style.borderWidth = "1px"
        bambooStandButton.querySelector('.selectedCircle').style.display = "none"
        bambooStandButton.querySelector('.pledgeSection').style.display = "none"
        modal.style.display = "none";
    }
    else if (pledgeReward == 'blackstand') {
        var amountPledged = blackStandButton.getElementsByTagName('input')[0].value
        if (Number(amountPledged) < 75) {
            return
        }
        amountBacked += Number(amountPledged)
        totalBackers += 1
        document.querySelector('#totalPledgeAmount').innerHTML = "$" + String(amountBacked).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        document.querySelector('#centerStat').querySelector('.bigStatText').innerHTML = String(totalBackers).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        var left = document.querySelectorAll('.blackStandLeft')
        blackStandsLeft -= 1
        left[0].innerHTML = blackStandsLeft
        left[1].innerHTML = blackStandsLeft
        blackStandButton.style.borderColor = "#9c9c9c"
        blackStandButton.style.borderWidth = "1px"
        blackStandButton.querySelector('.selectedCircle').style.display = "none"
        blackStandButton.querySelector('.pledgeSection').style.display = "none"
        modal.style.display = "none";
    }
}