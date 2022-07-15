export const getPostsFromServer = async () => {
    const response = await fetch(
        "http://localhost:4000/movies"
    );
    const responseInJson = await response.json();
    const posts = responseInJson.data;
    return posts;
};

export const getPostsFromServerFilter = async(filter) =>{
    const response = await fetch(
        `http://localhost:4000/movies?filter=${filter}&order={}`
    );
    const responseInJson = await response.json();
    const posts = responseInJson.data;
    return posts;
}

//http://localhost:4000/movies?sortOrder=${typeOrder}&filter=${filter}