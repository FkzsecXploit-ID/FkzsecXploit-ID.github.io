// const product = [
//     {
//         id: 0,
//         image: './images/sc.png',
//         title: 'Script Deface Generator',
//         price: 120,
//         desc: 'Custom Your Script Deface!, There are many features available from us and there are many of them!, a script that can help you in creating your html script, if you want to deface a particular site.',
//         mater: './deface generator/index2.html',
//     },
//     {
//         id: 1,
//         image: '../images/deface.png',
//         title: 'Deface',
//         price: 120,
//         desc: 'Defacement attacks occur when malicious actors infiltrate a website online or a digital advertising panel device hardware, and replace its content with their own messages. These messages can range from political or religious statements to offensive language or embarrassing content.',
//         mater: './deface generator/index2.html',
//     },
// ];


// const categories = [...new Set(product.map((item) => { return item }))];

// document.getElementById('searchBar').addEventListener('keyup', (e) => {
//     const searchData = e.target.value.toLowerCase();
//     const filteredData = categories.filter((item) => {
//         return (
//             item.title.toLowerCase().includes(searchData)
//         )
//     });
//     displayItem(filteredData);
// });

// const displayItem = (items) => {
//     document.getElementById('root').innerHTML = items.map((item) => {
//         var { image, title, desc, mater } = item;
//         return (
//             `<div class="container-tables">
//                 <div class="tables">
//                     <h5>${title}</h5>
//                     <div class="image-text-wrapper">
//                         <img class="images" src="${image}" alt="${title} IMG">
//                         <p class="additional-text">${desc}</p>
//                     </div>
//                     <div class="button-cont">
//                         <a href="${mater}">
//                             <button class="button-87" role="button">View More</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>`
//         )
//     }).join('');
// };

// displayItem(categories);




const product = [
    {
        id: 0,
        image: './images/sc.png',
        title: 'Script Deface Generator',
        price: 120,
        desc: 'Custom Your Script Deface!, There are many features available from us and there are many of them!, a script that can help you in creating your html script, if you want to deface a particular site.',
        mater: './deface_generator/index2.html',
    },
    {
        id: 1,
        image: './images/g.png',
        title: 'Admin Finder Tools',
        price: 120,
        desc: 'A tool designed to help identify and locate hidden or unprotected administration panels on a website. This tool is typically used by security professionals to perform penetration testing or by security researchers to evaluate vulnerabilities on a website.',
        mater: './deface generator/index2.html',
    },
];

const categories = [...new Set(product.map((item) => { return item }))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    });
    displayItem(filteredData);
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, desc, mater, id } = item;
        return (
            `<div class="container-tables">
                <div class="tables">
                    <h5>${title}</h5>
                    <div class="image-text-wrapper">
                        <img class="images" src="${image}" alt="${title} IMG">
                        <p class="additional-text">${desc}</p>
                    </div>
                    <div class="button-cont">
                        <button class="button-87" role="button" onclick="handleViewMore(${id})">View More</button>
                    </div>
                </div>
            </div>`
        )
    }).join('');
};


const handleViewMore2 = (id) => {
    if (id === 0) {
        const link = document.createElement('a');
        link.href = './deface_generator/index2.html'; // Ganti dengan path yang sesuai ke file Python
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        // Handle other IDs if needed
    }
};

const handleViewMore = (id) => {
    if (id === 1) {
        const link = document.createElement('a');
        link.href = './file/adm.py'; // Ganti dengan path yang sesuai ke file Python
        link.download = 'adm.py'; // Nama file yang diunduh
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        // Handle other IDs if needed
    }
};


displayItem(categories);





// const product = [
//     {
//         id: 0,
//         image: './images/sc.png',
//         title: 'Script Deface Generator',
//         price: 120,
//         desc: 'Custom Your Script Deface!, There are many features available from us and there are many of them!, a script that can help you in creating your html script, if you want to deface a particular site.',
//         mater: './deface generator/index2.html',
//     },
//     {
//         id: 1,
//         image: '../images/deface.png',
//         title: 'Deface',
//         price: 120,
//         desc: 'Defacement attacks occur when malicious actors infiltrate a website online or a digital advertising panel device hardware, and replace its content with their own messages. These messages can range from political or religious statements to offensive language or embarrassing content.',
//         mater: './deface generator/index2.html',
//     },
// ];

// const categories = [...new Set(product.map((item) => { return item }))];

// document.getElementById('searchBar').addEventListener('keyup', (e) => {
//     const searchData = e.target.value.toLowerCase();
//     const filteredData = categories.filter((item) => {
//         return (
//             item.title.toLowerCase().includes(searchData)
//         )
//     });
//     displayItem(filteredData);
// });

// const displayItem = (items) => {
//     document.getElementById('root').innerHTML = items.map((item) => {
//         const { image, title, desc, mater, id } = item;
//         return (
//             `<div class="container-tables">
//                 <div class="tables">
//                     <h5>${title}</h5>
//                     <div class="image-text-wrapper">
//                         <img class="images" src="${image}" alt="${title} IMG">
//                         <p class="additional-text">${desc}</p>
//                     </div>
//                     <div class="button-cont">
//                         <button class="button-87" role="button" onclick="handleViewMore(${id})">View More</button>
//                     </div>
//                 </div>
//             </div>`
//         );
//     }).join('');
// };

// const handleViewMore = (id) => {
//     if (id === 1) {
//         // Buat elemen <a> untuk mengunduh file
//         const link = document.createElement('a');
//         link.href = './file/adm.py'; // URL untuk mengunduh file dari server
//         link.download = 'adminfinder.py'; // Nama file yang diunduh
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     } else {
//         // Jika ID bukan 1, arahkan ke halaman materi atau lakukan tindakan lain
//         const product = categories.find(item => item.id === id);
//         if (product) {
//             window.location.href = product.mater;
//         }
//     }
// };

// displayItem(categories);
