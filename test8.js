// Array Remover

// Buatlah script yang dapat menghilangkan "Jambu" 
// yang terdapat pada array berikut

const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon'];

console.log(fruits.join(', '));

fruits.splice(2, 1);

console.log(fruits.join(', '));