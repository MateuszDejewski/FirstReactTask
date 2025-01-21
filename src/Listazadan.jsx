import Zadanie from './Zadanie';

function Listazadan() {
    let zadania = [
        { name: 'Programowanie sys webowych lista 1', isDone: true, points: 10, author: 'Jan Kowalski' },
        { name: 'Zad 2 HTML 1', isDone: true, points: 5, author: 'Anna Nowak' },
        { name: 'Zad 3 HTML 2', isDone: true, points: 5, author: 'Anna Nowak' },
        { name: 'Zad 4 CSS 1', isDone: true, points: 8, author: 'Piotr Wiśniewski' },
        { name: 'Zadanie 5 CSS 2', isDone: true, points: 8, author: 'Piotr Wiśniewski' },
        { name: 'Zad 6 javascript 1', isDone: true, points: 10, author: 'Jan Kowalski' },
        { name: 'Zad 7 javascript 2', isDone: true, points: 10, author: 'Jan Kowalski' },
        { name: 'Spring zad 1', isDone: true, points: 15, author: 'Anna Nowak' },
        { name: 'Spring zad 2', isDone: true, points: 15, author: 'Anna Nowak' },
        { name: 'Spring zad 3', isDone: true, points: 15, author: 'Piotr Wiśniewski' },
        { name: 'Zad 1 React', isDone: false, points: 20, author: 'Jan Kowalski' },
        { name: 'Zad 2 React', isDone: false, points: 20, author: 'Jan Kowalski' }
    ];

    return (
        <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    <th>Zadanie</th>
                    <th>Autor</th>
                    <th>Status</th>
                    <th>Punkty</th>
                    
                </tr>
            </thead>
            <tbody>
                {zadania.map((zadanie, index) => (
                    <Zadanie key={index} name={zadanie.name} isDone={zadanie.isDone} points={zadanie.points} author={zadanie.author} />
                ))}
            </tbody>
        </table>
    );
}

export default Listazadan;