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
        mater: './file/adm.py', // Path untuk mengunduh file Python
    },
];

const categories = [...new Set(product.map((item) => item))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => item.title.toLowerCase().includes(searchData));
    displayItem(filteredData);
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        const { image, title, desc, id } = item;
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
        );
    }).join('');
};

const handleViewMore = (id) => {
    if (id === 1) {
        // Untuk ID 1, unduh file Python
        const link = document.createElement('a');
        link.href = './file/adm.py'; // Path untuk file Python
        link.download = 'adm.py'; // Nama file saat diunduh
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        // Untuk ID selain 1, arahkan ke halaman materi
        const productItem = categories.find(item => item.id === id);
        if (productItem) {
            window.location.href = productItem.mater;
        }
    }
};

displayItem(categories);
