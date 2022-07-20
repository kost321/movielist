export const getPostsFromServer = async () => {
  const response = await fetch("http://localhost:4000/movies");
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostsFromServerFilter = async (filter) => {
  const response = await fetch(`http://localhost:4000/movies?filter=${filter}`);
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostsFromServerSort = async (typeOrder, currentFilter) => {
  if (typeOrder === "asc") {
    const response = await fetch(
      `http://localhost:4000/movies?sortBy=release_date&sortOrder=${typeOrder}&filter=${currentFilter}`
    );
    const responseInJson = await response.json();
    const posts = responseInJson.data;
    return posts;
  } else {
    const response = await fetch(
      `http://localhost:4000/movies?sortBy=release_date&sortOrder=${typeOrder}&filter=${currentFilter}`
    );
    const responseInJson = await response.json();
    const posts = responseInJson.data;
    return posts;
  }
};

export const getPostsFromServerSearch = async (value) => {
  const response = await fetch(
    `http://localhost:4000/movies?search=${value}%20&searchBy=title`
  );
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostFromServerById = async (id) => {
  const response = await fetch(`http://localhost:4000/movies/${id}`);
  const post = await response.json();
  return post;
};

export const deletePostsFromServer = async (id) => {
  await fetch(`http://localhost:4000/movies/${id}`, { method: "DELETE" });
};

export const editPostFromServer = async (paramDispatch) => {
  const valueTitle = paramDispatch.valueTitle;
  const valueRelease = paramDispatch.valueRelease;
  const valueUrl = paramDispatch.valueUrl;
  const valueOverview = paramDispatch.valueOverview;
  const valueRuntime = +paramDispatch.valueRuntime;
  const id = paramDispatch.id;
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: `${valueTitle}`,
      release_date: `${valueRelease}`,
      poster_path: `${valueUrl}`,
      overview: `${valueOverview}`,
      runtime: valueRuntime,
      id: id,
    }),
  };
  debugger;
  const response = await fetch(`http://localhost:4000/movies`, requestOptions);
  const post = await response.json();
  debugger
  return post;
};
