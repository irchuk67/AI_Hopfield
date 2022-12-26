import {CHANGE_LETTER_COLOR, DRAW_LETTER, FIND_CORRECT_LETTER, READ_FILES, SUBMIT_FORM, TRAIN_AI} from "../types";
import Cell from "../../components/cell";

let readFiles = () => {
    let data = [
        [  1, -1, -1, -1, -1, -1, -1, -1,  1,  1, -1, -1,
            -1, -1, -1, -1, -1,  1,  1, -1, -1, -1, -1, -1,
            -1, -1,  1,  1, -1, -1, -1, -1, -1, -1, -1,  1,
            1,  1,  1,  1,  1,  1,  1,  1,  1,  1, -1, -1,
            -1, -1, -1, -1, -1,  1,  1, -1, -1, -1, -1, -1,
            -1, -1,  1,  1, -1, -1, -1, -1, -1, -1, -1,  1,
            1, -1, -1, -1, -1, -1, -1, -1,  1

        ],
        [ -1,  1, -1, -1, -1, -1, -1, -1,  1, -1,  1, -1,
            -1, -1, -1, -1,  1, -1, -1,  1, -1, -1, -1, -1,
            1, -1, -1, -1,  1, -1, -1, -1,  1, -1, -1, -1,
            -1,  1, -1,  1, -1, -1, -1, -1, -1, -1,  1, -1,
            -1, -1,  1, -1, -1, -1, -1,  1, -1, -1, -1, -1,
            1, -1, -1, -1,  1, -1, -1, -1, -1, -1,  1, -1,
            -1,  1, -1, -1, -1, -1, -1, -1,  1
        ],
        [ -1, -1, -1, -1, -1,  1,  1,  1,  1, -1, -1, -1,
            -1,  1, -1, -1, -1,  1, -1, -1, -1,  1, -1, -1,
            -1, -1,  1, -1, -1,  1, -1, -1, -1, -1, -1,  1,
            -1, -1,  1, -1, -1, -1, -1, -1,  1, -1, -1,  1,
            -1, -1, -1, -1, -1,  1, -1, -1,  1, -1, -1, -1,
            -1, -1,  1, -1,  1, -1, -1, -1, -1, -1, -1,  1,
            1, -1, -1, -1, -1, -1, -1, -1,  1
        ]
    ];

    return {
        type: READ_FILES,
        payload: data
    };
}

let changeCellColor = (index, array) => {
    let updatedArray = [...array];
    if( updatedArray[index] === -1 ){
        updatedArray[index] = 1;
    } else {
        updatedArray[index] = -1;
    }
    return{
        type: CHANGE_LETTER_COLOR,
        payload: updatedArray
    }
}

let drawLetter = (draw, onCellClick) => {
    let index = -1;
    let cells = draw.map(number => {
        index++;
        return <Cell number={number}
                     index={index}
                     onClick={onCellClick}
        />
    } )

    return(
        {
            type: DRAW_LETTER,
            payload: cells
        }
    )
}

let transpose = (matrix) => {
    let transposed = new Array(matrix.length).fill(0).map(() => new Array(1).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        transposed[i][0] = matrix[i]
    }
    return transposed
}

let fromMatrixToList = (matrix) => {
    let list = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            list.push(matrix[i][j] > 0 ? 1 : -1)
        }
    }
    return list
}

let arrayToMatrix = (arr) => {
    let matrix = [[...arr]]
    return matrix
}

let multiplyMatrices = (matrix1, matrix2) => {
    let result = new Array(matrix1.length).fill().map(() => new Array(matrix2[0].length))
    for (let i = 0; i < matrix1.length; ++i) {
        for (let j = 0; j < matrix2[0].length; ++j) {
            result[i][j] = 0;             // initialize the current cell
            for (let k = 0; k < matrix2.length; ++k) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}

let sumUpMatrices = (weights, matrix) => {
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++) {
            weights[i][j] += matrix[i][j]
        }
    }
}

let compareLists = (list1, list2) => {
    for (let i = 0; i < list1.length; i++){
        if(list1[i] === list2[i]){

        }else {
            return false;
        }
    }
    return true
}

let train = (DATA) => {
    let weights = []; //створення масиву для зберігання обчислених ваг
    for (let letter of DATA){ //цикл для розрахунку ваг для кожної букви
        let transposed = transpose(letter) //транспонуємо букву
        let multiplied = multiplyMatrices(transposed, arrayToMatrix(letter)) //виконуємо множення транспонованої матриці на дійсну (nx1 * 1xn = nxn)
        if(weights.length === 0){ //якщо матриця ваг пуста
            weights = multiplied;// записуємо їй усі значення з отриманої в результаті множення матриці
        }else{ //інакше
            sumUpMatrices(weights, multiplied) //поелементно додаємо до елементів матриці ваг елементи з отриманої в результаті множення матриці
        }
    }
    for (let i = 0; i < weights.length; i++) { //цикл для обчислення коефіцієнтів ваг
        for (let j = 0; j < weights[i].length; j++){ //проходимося по усіх елементах матриці ваг
            weights[i][j] = weights[i][j] / weights[i].length; //ділимо їх на кількість елементів
        }
    }
    return {
        type: TRAIN_AI,
        payload: weights
    };
}

let findCorrectLetter = (letter, data, weights) => {
    let transposed = transpose(letter); //транспонуємо масив, отриманий в результаті зчитування
    let result = transposed; //ініціалізуємо змінну для запису результату обчислень
    let iterations = 0;//ініціалізуємо змінну для обчислення кількості ітерацій
    do{
        result = fromMatrixToList(multiplyMatrices(weights, result)) //виконуємо множення матриць та їх перетворення в список
        iterations++; //інкрементуємо змінну відповідальну кількості ітерацій
    }while (!compareLists(result, data[0]) && !compareLists(result, data[1]) && !compareLists(result, data[2]) && iterations < 10) //робимо це поки жодна з відомих букв не співпеде з результатом і поки кількість ітерацій не перевищить 10

    return {
        type: FIND_CORRECT_LETTER,
        payload: result //повертаємо знайдену літеру
    }
}

let submitForm = () => {
    return {
        type: SUBMIT_FORM,
        payload: true
    }
}
export {readFiles, changeCellColor, drawLetter, train, findCorrectLetter, submitForm}
