var usedNames = []

var icons = {
    html: 'http://logos.com/html-icon',
    js: '',
    css: '',
}

function getName()
{
    var name = document.getElementById('initial-name').value
    var splittedName = name.split('.')
    var newName = name // document
    var counter = 1
    while (usedNames.includes(newName)) {
        // Generate a new name
        newName = splittedName[0] + '-' + counter + '.' + splittedName[1]  // document-1.pdf
        console.log(newName) // document-1.pdf
        counter = counter + 1 // 2
    }
    console.log(newName) // This will always tell you the accepted name
    usedNames.push(newName)
    console.log(usedNames)
}


// array: group of values
// object: represents one instance

// var lessons = [
//     {
//         title: 'HTML',
//         weeks: 4,
//         difficult: false,
//         languages: [
//             {
//                 language: 'EN',
//                 video: true,
//                 caption: true
//             },
//             {
//                 language: 'FR',
//                 vidoe: true,
//                 caption: false
//             }
//         ]
//     },
//     {
//         title: 'CSS',
//         weeks: 5,
//         difficult: false
//     },
//     {
//         title: 'JS',
//         weeks: 8,
//         difficult: true
//     }
// ]

// var latestNews = [
//     {
//         title: 'You got one M dollar',
//         content: 'I am kidding',
//         date: '2023-03-21',
//         authoer: 'Feras',
//     },
//     {
//         title: 'You got a promotion at job',
//         content: 'You becamse a fullstack web developer',
//         date: '2023-03-20',
//         author: 'Aisha'
//     }
// ]