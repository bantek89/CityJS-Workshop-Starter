
export async function getAIMove(board) { 
    return fetch('/.netlify/functions/test', {
        method: 'POST',
        body: JSON.stringify(board)
    }).then(res => res.json())
    .catch(error => console.error('Error:', error));
}

export default {
    getAIMove
}