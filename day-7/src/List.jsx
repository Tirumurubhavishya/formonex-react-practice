
import fruits from'./fruits.json';
function List(){

// const fruits ["apple", "banana", "orange", "pineapple, coconut");



const ListIteams = fruits.map(fruit=> <li key ={fruit.id}>{fruit.name}</li>);

return(<ol>{ListIteams}</ol>);
}

export default List