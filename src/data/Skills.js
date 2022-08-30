function importAll(r) {
    var images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
}
const images = importAll(require.context('../assets/Technologies', false, /\.(png|jpe?g)$/));

export const Technologies = [{
    id: 1,
    name: "HTML",
    image: images['html.png'],
    size: "w-20"
},
{
    id: 2,
    name: "CSS",
    image: images['css.png'],
    size: "w-20"
},
{
    id: 3,
    name: "Javascript",
    image: images['javascript.png'],
    size: "w-20"
},
{
    id: 4,
    name: "PHP",
    image: images['php.png'],
    size: "h-20"
},
{
    id: 5,
    name: "React",
    image: images['react.png'],
    size: "w-20"
},
{
    id: 6,
    name: "Node.js",
    image: images['nodejs.png'],
    size: "w-20"
},
{
    id: 7,
    name: "Git",
    image: images['git.png'],
    size: "w-20"
},
{
    id: 8,
    name: "Tailwind",
    image: images['tailwind.png'],
    size: "w-20"
},
{
    id: 9,
    name: "Bootstrap",
    image: images['bootstrap.png'],
    size: "w-20"
},
{
    id: 10,
    name: "MySQL",
    image: images['mysql.png'],
    size: "w-20"
},
{
    id: 11,
    name: "C#",
    image: images['csharp.png'],
    size: "w-20"
},
{
    id: 12,
    name: "Java",
    image: images['java.png'],
    size: "h-20"
},
{
    id: 13,
    name: "Docker",
    image: images['docker.png'],
    size: "h-20"
}];