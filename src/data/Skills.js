function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../assets/Technologies', false, /\.(png|jpe?g)$/));

export const Technologies = [{
    id: 1,
    name: "HTML",
    image: images[5],
    size: "w-20"
},
{
    id: 2,
    name: "CSS",
    image: images[2],
    size: "w-20"
},
{
    id: 3,
    name: "Javascript",
    image: images[7],
    size: "w-20"
},
{
    id: 4,
    name: "PHP",
    image: images[11],
    size: "h-20"
},
{
    id: 5,
    name: "React",
    image: images[12],
    size: "w-20"
},
{
    id: 6,
    name: "Node.js",
    image: images[10],
    size: "w-20"
},
{
    id: 7,
    name: "Git",
    image: images[3],
    size: "w-20"
},
{
    id: 8,
    name: "Tailwind",
    image: images[13],
    size: "w-20"
},
{
    id: 9,
    name: "Bootstrap",
    image: images[0],
    size: "w-20"
},
{
    id: 10,
    name: "MySQL",
    image: images[9],
    size: "w-20"
},
{
    id: 11,
    name: "C#",
    image: images[1],
    size: "w-20"
},
{
    id: 12,
    name: "Java",
    image: images[6],
    size: "h-20"
}]