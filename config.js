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

let favoriteArray = [];

function getEvent(e){
    console.log(e.target);
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active')
    } else {
        e.target.classList.add('active')
    }
    
    favoriteArray.push(e);
}


class Favorites extends React.Component {
    render() {
        console.log(userArray);
        this.favoriteArray = this.setState.favoriteArray;
        return (
            <ul>
                <p>Count {favoriteArray.length} Something</p>
                {userArray.map((element, idx) => {
                    return <li id={idx} key={idx} onClick={getEvent}>{element.name}<br></br>{element.email}</li>
                })}
            </ul>
           
        )
    }
}



ReactDOM.render(
    <Favorites name="ourList" />,
    document.getElementById('root')
  );
