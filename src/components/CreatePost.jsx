import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          UserID:
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="user-id"
          placeholder="Your User ID..."
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          post title:
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..?"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content:
        </label>
        <textarea
          type="text"
          name="body"
          className="form-control"
          id="body"
          rows="3"
          placeholder="Describe...!"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of likes:
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="Number of likes"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtag:
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter tags using a space"
        ></input>
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
