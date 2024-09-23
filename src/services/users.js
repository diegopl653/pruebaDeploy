export const createUser = async (body) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/v1/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};
