export default function BlogPost({ params }) {
  return (
    <main>
      <h4>
        {" "}
        <span>{params.post}</span> &nbsp; Title of the Post : {params.title}
      </h4>
      <p>Author : {params.author}</p>
      <p>Description : {params.description}</p>
    </main>
  );
}
