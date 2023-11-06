const { faker } = require('@faker-js/faker')

let arr = Array.from({ length: 10 }, () => faker.person.firstName())

console.table(arr)

for (let i = 0, temp; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - 1; k++) {
        if (arr[k] > arr[k + 1]) {
            temp = arr[k]
            arr[k] = arr[k + 1]
            arr[k + 1] = temp
        }
    }
}

console.table(arr)
