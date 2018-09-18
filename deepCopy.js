function deepCopy(obj)
{
	return (Array.isArray(obj) ? deepCopyArray(obj) : deepCopyObject(obj));
}

function deepCopyArray(arr)
{
	let temp = [];
	for(let i of arr)
	{
		(typeof i === 'object') ? temp.push(deepCopy(i)) : temp.push(i);
	}
	return temp;
}

function deepCopyObject(obj)
{
	let temp = {};
	for(let i of Object.entries(obj))
	{
		(typeof i[1] === 'object') ? temp[i[0]] = deepCopy(i[1]) : temp[i[0]] = i[1];
	}
	return temp;
}

//Original Object
let person = {
    firstName:"John",
    lastName:"Spartan",
    city:"Los Angeles",
    luckyNumbers:[1,2,3,{a:100,b:200,c:300}],
}

//deep cloning the object
let personClone = deepCopy(person);

//Changes to the personClone
personClone['luckyNumbers'].push(4);
personClone['country'] = "USA";
personClone['luckyNumbers'][3]['d'] = 400;

//printing the Objects
console.log('---------person---------');
console.log(person);
console.log('---------personClone---------');
console.log(personClone);

/* 
OUTPUT

The changes to personClone object has not affected the original person object.
The changes to the luckyNumbers of the personClone object have not affected the original person object.

---------person---------
{ firstName: 'John',
  lastName: 'Spartan',
  city: 'Los Angeles',
  luckyNumbers: [ 1, 2, 3, { a: 100, b: 200, c: 300 } ] }
---------personClone---------
{ firstName: 'John',
  lastName: 'Spartan',
  city: 'Los Angeles',
  luckyNumbers: [ 1, 2, 3, { a: 100, b: 200, c: 300, d: 400 }, 4 ],
  country: 'USA' }

*/
