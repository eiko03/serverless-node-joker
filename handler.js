module.exports.makeLaugh = async event => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: joke.value,
            },
            null,
            2,
        ),
    };
};
