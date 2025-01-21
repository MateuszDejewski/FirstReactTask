import { useEffect, useState } from 'react';

function Listazadan() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from Express server
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:5000/tasks');
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const downloadTasksAsJSON = () => {
        const jsonBlob = new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' }); //tworzy łancuch JSON, przekształca na obiekt binarny typu json
        const url = URL.createObjectURL(jsonBlob); //tworzy tymczasowy url do obiektu
        const link = document.createElement('a'); // tworzy link do url
        link.href = url;
        link.download = 'tasks.json';
        link.click(); // ustawia parametry i klika w link
        URL.revokeObjectURL(url); // usuwa urt do blebu
    };

    return (
        <div>
        <button onClick={downloadTasksAsJSON} style={{ marginBottom: '10px' }}>
            Pobierz JSON
        </button>
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
                {tasks.length > 0 ? (
                    tasks.map((zadanie, index) => (
                        <tr key={index}>
                            <td>{zadanie.name}</td>
                            <td>{zadanie.author}</td>
                            <td>{zadanie.isDone ? 'Done' : 'Not Done'}</td>
                            <td>{zadanie.points}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'center' }}>Brak danych</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    );
}

export default Listazadan;
