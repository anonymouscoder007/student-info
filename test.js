const registration = document.querySelector(".reg");
const roll = document.querySelector(".roll");
const name = document.querySelector(".name");
const container = document.querySelector(".container");
const search = document.querySelector("input");
const students = [
    {
        name: "Sourav Ghosh",
        roll: 10061422001,
        reg: 221000411000,
        img: "uk.png",
    },
    {
        name: "Hitaishi Das",
        roll: 10061422002,
        reg: 221000411001,
        img: "hito.jpg",
    },
    {
        name: "Bidisha Bhakta",
        roll: 10061422003,
        reg: 221000411002,
        img: "bidisha.jpg",
    },
    {
        name: "Dhiraj Kumar",
        roll: 10061422004,
        reg: 221000411003,
        img: "dhiraj.jpg",
    },
    {
        name: "Subhadip Kayal",
        roll: 10061422005,
        reg: 221000411004,
        img: "uk.png",
    },
    {
        name: "Sukanta Mahata",
        roll: 10061422006,
        reg: 221000411005,
        img: "uk.png",
    },
    {
        name: "Omprakash Mahata",
        roll: 10061422007,
        reg: 221000411006,
        img: "om.jpg",
    },
    {
        name: "Susmita Das",
        roll: 10061422008,
        reg: 221000411007,
        img: "susmita.jpg",
    },
    {
        name: "Shahbaj Alam",
        roll: 10061422009,
        reg: 221000411008,
        img: "naheed.jpg",
    },
    {
        name: "Arnab",
        roll: 10061422010,
        reg: 221000411009,
        img: "arnab.jpg",
    },
    {
        name: "Chayan",
        roll: 10061422011,
        reg: 221000411010,
        img: "cyan.jpg",
    },
    {
        name: "Sayudh Swarnakar",
        roll: 10061422013,
        reg: 221000411012,
        img: "sayudh.jpg",
    },
    {
        name: "Shankha",
        roll: 10061422014,
        reg: 221000411013,
        img: "shankha.jpg",
    },
];

const renderList = (arr) => {
    container.innerHTML = "";
    arr.forEach((e) => {
        const markup = `
        <div class="card">
        <img src=${e.img} alt="" />
        <div class="info">
             <h1 class="name">${e.name}</h1>
             <h1>Registration No</h1>
             <h1 class="reg">${e.reg}</h1>
             <h1>Roll No</h1>
             <h1 class="roll">${e.roll}</h1>
        </div>
        </div>
        `;

        container.insertAdjacentHTML("beforeend", markup);
    });
};

search.addEventListener("input", (e) => {
    const filteredArr = [];
    students.forEach((student) => {
        if (student.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            filteredArr.push({
                name: student.name,
                reg: student.reg,
                roll: student.roll,
                img: student.img,
            });
        }
    });
    renderList(filteredArr);
});

renderList(students);
