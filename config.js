console.log(React);
console.log(ReactDOM);


let userArray = [];

function loopThrough() {
    let arr = [];
    let count = 10;
    for (var i = 0; i < count; i++){
        userArray.push({'name': faker.name.findName(), 'email': faker.internet.email()});
    }
    return arr;
}
loopThrough();
// console.log(userArray);

class Favorites extends React.Component {
    render() {
        console.log(userArray);
        return (
            <div>
            <ul>
                {userArray.map((element, idx) => {
                    return <li id={idx} key={idx}>{element.name}<br></br>{element.email}</li>
                })}
            </ul>
            </div>
        )
    }
}



ReactDOM.render(
    <Favorites name="ourList" />,
    document.getElementById('root')
  );
